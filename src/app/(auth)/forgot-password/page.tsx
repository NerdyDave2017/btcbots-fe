"use client";
import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { useForgotPassword } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const page = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { mutate: ForgotPassword, isPending } = useForgotPassword();

  const handleForgotPassword = async () => {
    ForgotPassword(email, {
      onSuccess: () => {
        toast.success("Password reset link sent to your email", {
          position: "top-center",
        });
        router.push("/login");
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
    <div className="w-full flex flex-col items-center justify-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="w-[475px]">
        <p className="text-[40px] text-primary">Forgot Password</p>
        <p className="text-sm font-light text-text-light">
          A reset link would sent to your mailbox or spam folder.
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Input label="Email" icon="email" value={email} setValue={setEmail} />

        <Button
          onClick={handleForgotPassword}
          text="Submit"
          className="w-full flex text-text-dark"
          size="lg"
          loading={isPending}
        />
      </div>
    </div>
  );
};

export default page;
