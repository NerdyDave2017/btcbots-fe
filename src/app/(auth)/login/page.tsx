import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";
import { GoogleIcon, UserIcon } from "@/public/assets/icons";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="w-[475px]">
        <p className="text-[40px] text-main">Welcome back!</p>
        <p className="text-sm font-light text-text-light">
          Please log in to access your account.
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Input label="Email" icon="email" value="" setValue={() => {}} />

        <div className="">
          <Input
            label="Password"
            icon="password"
            value=""
            setValue={() => {}}
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

        <Button text="Login" className="w-full flex text-text-dark" size="lg" />
      </div>

      <div className="w-[475px] justify-center items-center gap-4 inline-flex">
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
        <div className="text-right text-[#3c3c43]/60 text-sm font-normal ">
          or
        </div>
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <button className="w-full  px-8 py-4 rounded-full border border-primary justify-center items-center gap-2.5 inline-flex">
          <GoogleIcon />
          <p className="text-main  font-normal ">Continue with Google</p>
        </button>

        <button className="w-full  px-8 py-4 rounded-full border border-primary justify-center items-center gap-2.5 inline-flex">
          <UserIcon className="text-main" />
          <p className="text-main  font-normal ">Sign in as guest</p>
        </button>
      </div>
    </div>
  );
};

export default page;
