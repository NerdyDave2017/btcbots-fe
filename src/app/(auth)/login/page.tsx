"use client";
import React, { Suspense, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";

import { useSignIn } from "@/src/hooks/postRequests";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { isAxiosError } from "axios";
import { useAppContext } from "@/src/context";
import AlternativeSignin from "../components/alternative-signin";
import Loader from "../../components/loader";

const PageContent = () => {
  const router = useRouter();
  // Access location object using useLocation hook
  const searchParams = useSearchParams();

  // Get individual query parameters by key
  const referrer = searchParams.get("referrer");

  const { setIsAuthenticated, setUser } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: SignIn, isPending } = useSignIn();

  const handleLogin = async () => {
    SignIn(
      { email, password },
      {
        onSuccess: (user) => {
          if (user && typeof window !== undefined && window.Intercom) {
            window.Intercom("update", {
              app_id: "xd17lti9",
              email: user.email,
              name: user.name,
              user_id: user._id, // Optional, pass if you have a user ID
            });
          }
          toast.success("Login successful");
          setUser(user);
          setIsAuthenticated(true);
          router.push("/dashboard");
        },
        onError: (error: Error) => {
          setIsAuthenticated(false);
          setUser(null);
          if (isAxiosError(error)) {
            toast.error(error.response?.data.message, {
              position: "top-center",
            });
          } else {
            console.error(error);
            toast.error("An unexpected error occurred", {
              position: "top-center",
            });
          }
        },
      }
    );
  };

  const handleValidation = () => {
    if (!email) {
      toast.error("Email required");
      return;
    }
    if (!password) {
      toast.error("Password required");
      return;
    }
    handleLogin();
  };

  return (
    <div className="w-full flex flex-col items-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="w-[475px]">
        <p className="text-[40px] text-main">Welcome back!</p>
        <p className="text-sm font-light text-text-light">
          Please log in to access your account.
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Input label="Email" icon="email" value={email} setValue={setEmail} />

        <div className="">
          <Input
            label="Password"
            icon="password"
            value={password}
            setValue={setPassword}
          />
          <div className="text-right mt-[16px]">
            <Link
              href="/forgot-password"
              className="text-main text-sm font-normal  underline"
            >
              Forgot password?
            </Link>{" "}
            <span className="text-text-light text-sm font-normal ">or</span>{" "}
            <Link
              href="/signup"
              className="text-main text-sm font-normal  underline"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <Button
          onClick={handleValidation}
          text="Login"
          className="w-full flex text-text-dark"
          size="lg"
          loading={isPending}
        />
      </div>

      <div className="w-[475px] justify-center items-center gap-4 inline-flex">
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
        <div className="text-right text-[#3c3c43]/60 text-sm font-normal ">
          or
        </div>
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
      </div>

      <AlternativeSignin referrer={referrer!} />
    </div>
  );
};

const page = () => (
  <Suspense fallback={<Loader bg="bg-main" />}>
    <PageContent />
  </Suspense>
);

export default page;
