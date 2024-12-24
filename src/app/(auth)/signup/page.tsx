import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Link from "next/link";
import { GoogleIcon, UserIcon } from "@/public/assets/icons";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="w-[475px]">
        <p className="text-[40px] text-main">Create your account</p>
        <p className="text-sm font-light text-text-light">
          Fill your details and start making profits today!
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Input label="Name" icon="text" value="" setValue={() => {}} />
        <Input label="Email" icon="email" value="" setValue={() => {}} />
        <Input label="Password" icon="password" value="" setValue={() => {}} />

        <div className="">
          <Input
            label="Confirm Password"
            icon="password"
            value=""
            setValue={() => {}}
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
          text="Sign Up"
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
        <button className="w-full  px-8 py-4 rounded-full border border-main justify-center items-center gap-2.5 inline-flex">
          <GoogleIcon />
          <p className="text-main  font-normal ">Sign up with Google</p>
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
