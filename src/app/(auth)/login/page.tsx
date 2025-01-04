"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";
import { GoogleIcon, UserIcon } from "@/public/assets/icons";
import {
  useDecode,
  useSignIn,
  useSignInSocial,
} from "@/src/hooks/postRequests";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import Router from "next/router";
import { useSearchParams } from "next/navigation";
import { isAxiosError } from "axios";
import { useAppContext } from "@/src/context";

const page = () => {
  const router = Router;
  // Access location object using useLocation hook
  const searchParams = useSearchParams();

  // Get individual query parameters by key
  const referrer = searchParams.get("referrer");

  const { setIsAuthenticated, setUser } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: SignInSocial } = useSignInSocial();
  const { mutate: Decode, data: decodeData } = useDecode();
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
          toast.success("Login successful", { position: "top-center" });
          setUser(user);
          setIsAuthenticated(true);
          router.push("/dashboard/bot-explorer");
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
      toast.error("Email required", { position: "top-center" });
      return;
    }
    if (!password) {
      toast.error("Password required", { position: "top-center" });
      return;
    }
    handleLogin();
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      loginWithGoogle(codeResponse.access_token);
    },
    onError: (e) => toast.error(`Login failed. ${e.error_description}`),
  });

  const loginWithGoogle = async (accessToken: string) => {
    Decode(accessToken, {
      onSuccess: (result) => {
        SignInSocial(
          {
            email: result.email,
            name: `${result.given_name} ${result.family_name ?? ""}`,
            referrer: referrer ?? undefined,
            avatar: result.picture ?? undefined,
            isEmailVerified: result.verified_email,
          },
          {
            onSuccess: (res) => {
              toast.success("Login Successful", { position: "top-center" });
              setUser(res);
              router.push("/dashboard/bot-explorer");
            },
            onError: (error: Error) => {
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
      },
      onError: (error: Error) => {
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
    });
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
        />
      </div>

      <div className="w-[475px] justify-center items-center gap-4 inline-flex">
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
        <div className="text-right text-[#3c3c43]/60 text-sm font-normal ">
          or
        </div>
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <button
          onClick={() => login()}
          className="w-full  px-8 py-4 rounded-full border border-main justify-center items-center gap-2.5 inline-flex"
        >
          <GoogleIcon />
          <p className="text-main  font-normal ">Continue with Google</p>
        </button>

        <button className="w-full  px-8 py-4 rounded-full border border-main justify-center items-center gap-2.5 inline-flex">
          <UserIcon className="text-main" />
          <p className="text-main  font-normal ">Sign in as guest</p>
        </button>
      </div>
    </div>
  );
};

export default page;
