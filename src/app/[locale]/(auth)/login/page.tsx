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
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Log-in");

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
    <div className="w-full flex flex-col items-center py-6 px-5  md:py-10 xl:py-[70px] xl:px-[160px] gap-[48px] text-text-light">
      <div className="w-full max-w-[475px]">
        <p className="text-[28px] md:text-[32px] xl:text-[40px] text-main">
          {t("0")}
        </p>
        <p className="text-sm font-light text-text-light">{t("1")}</p>
      </div>

      <div className="w-full max-w-[475px] flex flex-col gap-[32px]">
        <Input label={t("2")} icon="email" value={email} setValue={setEmail} />

        <div className="">
          <Input
            label={t("3")}
            icon="password"
            value={password}
            setValue={setPassword}
          />
          <div className="text-right mt-[16px]">
            <Link
              href="/forgot-password"
              className="text-main text-sm font-normal  underline"
            >
              {t("4")}
            </Link>{" "}
            <span className="text-text-light text-sm font-normal ">
              {t("5")}
            </span>{" "}
            <Link
              href="/signup"
              className="text-main text-sm font-normal  underline"
            >
              {t("6")}
            </Link>
          </div>
        </div>

        <Button
          onClick={handleValidation}
          text={t("7")}
          className="w-full flex text-text-dark"
          size="lg"
          loading={isPending}
        />
      </div>

      <div className="w-full max-w-[475px] justify-center items-center gap-4 inline-flex">
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
        <div className="text-right text-[#3c3c43]/60 text-sm font-normal ">
          {t("5")}
        </div>
        <div className="w-full grow shrink basis-0 h-[0px] border-b border-[#3c3c43]/60"></div>
      </div>

      <AlternativeSignin referrer={referrer!} />
    </div>
  );
};

export default page;
