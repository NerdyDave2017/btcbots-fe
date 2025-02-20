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
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Sign-up");

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
          toast.success(res.message);
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
      toast.error("Name required");
      return;
    }
    if (!email) {
      toast.error("Email required");
      return;
    }
    if (!password) {
      toast.error("Password required");
      return;
    }
    if (!confirmPassword) {
      toast.error("Confirm Password required");
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
    <div className="w-full flex flex-col items-center py-6 px-5  md:py-10 xl:py-[70px] xl:px-[160px] gap-[48px] text-text-light">
      <div className="w-full max-w-[475px]">
        <p className="text-[28px] md:text-[32px] xl:text-[40px] text-main">
          {t("0")}
        </p>
        <p className="text-sm font-light text-text-light">{t("1")}</p>
      </div>

      <div className="w-full max-w-[475px] flex flex-col gap-[32px]">
        <Input label={t("2")} icon="text" value={name} setValue={setName} />
        <Input label={t("3")} icon="email" value={email} setValue={setEmail} />
        <Input
          label={t("4")}
          icon="password"
          value={password}
          setValue={setPassword}
        />

        <div className="">
          <Input
            label={t("5")}
            icon="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <div className="text-right mt-[16px]">
            <span className=" text-sm font-normal">{t("6")}</span>{" "}
            <Link
              href="/login"
              className="text-main text-sm font-normal  underline"
            >
              {t("7")}
            </Link>
          </div>
        </div>

        <Button
          onClick={handleSignupValidation}
          text={t("8")}
          className="w-full flex text-text-dark"
          size="lg"
          loading={isPending}
        />
      </div>

      <div className="w-full max-w-[475px] justify-center items-center gap-4 inline-flex">
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
        <div className="text-right text-[#3c3c43]/60 text-sm font-normal ">
          {t("9")}
        </div>
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
      </div>

      <AlternativeSignin referrer={referrer!} />
    </div>
  );
};

export default page;
