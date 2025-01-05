"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";
import AlternativeSignin from "../components/alternative-signin";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSignUp } from "@/src/hooks/postRequests";
import { toast } from "sonner";
import { isAxiosError } from "axios";

const page = () => {
  // Access location object using useLocation hook
  const searchParams = useSearchParams();

  // Get individual query parameters by key
  const referrer = searchParams.get("referrer");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const { mutate: SignUp, isPending } = useSignUp();

  const handleSignup = async () => {
    SignUp(
      {
        email,
        password,
        name,
        referrer: referrer ?? "",
      },
      {
        onSuccess: (res) => {
          toast.success(res.message, { position: "top-center" });
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
  };

  const handleSignupValidation = () => {
    if (!name) {
      toast.error("Name required", { position: "top-center" });
      return;
    }
    if (!email) {
      toast.error("Email required", { position: "top-center" });
      return;
    }
    if (!password) {
      toast.error("Password required", { position: "top-center" });
      return;
    }
    if (!confirmPassword) {
      toast.error("Confirm Password required", { position: "top-center" });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password must match Confirm Password", {
        position: "top-center",
      });
      return;
    }
    handleSignup();
  };

  return (
    <div className="w-full flex flex-col items-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="w-[475px]">
        <p className="text-[40px] text-main">Create your account</p>
        <p className="text-sm font-light text-text-light">
          Fill your details and start making profits today!
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Input label="Name" icon="text" value={name} setValue={setName} />
        <Input label="Email" icon="email" value={email} setValue={setEmail} />
        <Input
          label="Password"
          icon="password"
          value={password}
          setValue={setPassword}
        />

        <div className="">
          <Input
            label="Confirm Password"
            icon="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <div className="text-right mt-[16px]">
            <span className=" text-sm font-normal">
              do you have an account?
            </span>{" "}
            <Link
              href="/login"
              className="text-main text-sm font-normal  underline"
            >
              Login
            </Link>
          </div>
        </div>

        <Button
          onClick={handleSignupValidation}
          text="Sign Up"
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

export default page;
