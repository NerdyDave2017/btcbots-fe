"use client";
import React, { Suspense, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useResetPassword } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Loader from "../../components/loader";

const page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate: ResetPassword, isPending } = useResetPassword();

  // Get individual query parameters by key
  const otp = searchParams.get("otp") || "";

  const handleChangePassword = async () => {
    if (password !== confirmPassword) {
      toast.error("New password must match Confirm password", {
        position: "top-center",
      });
      return;
    }
    ResetPassword(
      {
        password,
        otp,
      },
      {
        onSuccess: () => {
          toast.success("Password Reset");
          router.push("/dashboard/home");
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

  return (
    <div className="w-full flex flex-col items-center justify-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="w-[475px]">
        <p className="text-[40px] text-main">Reset Password</p>
        <p className="text-sm font-light text-text-light">
          Type in your new password.
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Input
          label="New Password"
          icon="password"
          value={password}
          setValue={setPassword}
        />
        <Input
          label="Confirm New Password"
          icon="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <Button
          onClick={handleChangePassword}
          text="Continue"
          className="w-full flex text-text-dark"
          size="lg"
          loading={isPending}
        />
      </div>
    </div>
  );
};

export default page;
