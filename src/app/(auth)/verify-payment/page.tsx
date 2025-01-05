"use client";
import React, { useEffect } from "react";
import Button from "../../components/button";
import { SuccessIcon, ErrorIcon } from "@/public/assets/icons";
import Loader from "../../components/loader";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useVerifyInvoicePayment } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    mutate: verifyPayment,
    isSuccess,
    isError,
    error,
    isPending,
  } = useVerifyInvoicePayment();

  const invoiceId = searchParams.get("invoice_id");

  const handleVerifyPayment = async () => {
    verifyPayment(invoiceId!);
  };

  useEffect(() => {
    handleVerifyPayment();
  }, []);

  const handleButtonClick = () => {
    if (isSuccess) {
      router.push("/login");
    } else if (isError) {
      router.push("/login");
    } else {
      handleVerifyPayment();
    }
  };

  const returnErrMessage = () => {
    if (isAxiosError(error)) {
      return error.response?.data.message;
    } else {
      return "An error occurred while verifying your email.";
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-[70px] px-[160px] gap-[48px] text-text-light">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-center w-[80px] h-[80px] rounded-[50%]">
          {isSuccess ? (
            <SuccessIcon className="text-green-500" />
          ) : isError ? (
            <ErrorIcon className="text-rose-500" />
          ) : (
            <Loader bg="bg-main" />
          )}
        </div>
        <h1 className="text-lg md:text-xl font-bold">
          {isSuccess
            ? "Payment Successful"
            : isError
            ? "Error Verifying Payment"
            : "Verifying Payment"}
        </h1>
        <p className="text-center">
          {isSuccess
            ? "Your Payment has been successfully verified."
            : isError
            ? returnErrMessage()
            : "Please wait while we verify your Payment."}
        </p>
      </div>

      <div className="w-[475px] flex flex-col gap-[32px]">
        <Button
          onClick={handleButtonClick}
          text={isSuccess ? "Go to login" : isError ? "Go to login" : "Retry"}
          className="w-full flex text-text-dark"
          size="lg"
          disabled={isPending}
        />
      </div>
    </div>
  );
};

export default page;
