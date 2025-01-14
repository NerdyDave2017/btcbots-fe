import React, { useState } from "react";
import Header from "../components/header";
import Input from "../../components/input";
import Button from "../../components/button";
import { SelectedType, BalanceType } from "./page";
import { toast } from "sonner";
import { useFetchUser } from "@/src/hooks/fetchRequests";
import { useSendOtp, useWithdraw } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";

type Props = {
  balance: Record<BalanceType, number>;
  selectedCoin: BalanceType;
  setSelected: (value: SelectedType) => void;
};

const Withdraw = ({ balance, selectedCoin, setSelected }: Props) => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const { mutate: SendOtp, isPending: otpPending } = useSendOtp();
  const { mutate: Withdraw, isPending } = useWithdraw();
  const { data: user } = useFetchUser();

  const router = useRouter();

  const sendOtp = async () => {
    SendOtp(user!._id, {
      onSuccess: () => {
        toast.success("OTP sent. Check mail");
        setOtpSent(true);
      },
      onError: (error: Error) => {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("Error sending OTP");
        }
        setOtpSent(false);
      },
    });
  };

  const withdraw = async () => {
    if (!address) {
      toast.error("Please enter address");
      return;
    }

    if (!amount) {
      toast.error("Please enter amount");
      return;
    }

    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    if (parseFloat(amount) > Number(balance[selectedCoin])) {
      toast.error("Insufficient balance");
      return;
    }

    Withdraw(
      {
        amount: parseFloat(amount),
        walletAddress: address,
        currency: selectedCoin,
        otp,
      },
      {
        onSuccess: () => {
          toast.success("Withdrawal Request Sent");
        },
        onError: (error: Error) => {
          if (isAxiosError(error)) {
            toast.error(error.response?.data.message);
          } else {
            toast.error("An unexpected error occurred");
          }
        },
      }
    );
  };

  return (
    <div className="w-full">
      <Header text="Withdraw Balance" onClick={() => setSelected("Main")} />
      <div className="w-full px-5 lg:px-[48px]">
        <div className="max-w-[500px] mx-auto flex flex-col gap-8">
          <Input
            label="USD address"
            icon="text"
            value={address}
            setValue={setAddress}
          />

          <div className="">
            <Input
              label="Amount to withdraw"
              icon="text"
              value={amount}
              setValue={setAmount}
            />
            <div className="text-right mt-4">
              <span className="text-[#3c3c43]/60 text-sm font-normal">
                Available balance:{" "}
              </span>
              <span className="text-[#090909] text-sm font-normal">
                {balance[selectedCoin]} {selectedCoin.toUpperCase()}
              </span>
            </div>
          </div>

          <Input
            label="2FA OTP"
            icon="text"
            action={
              <span
                onClick={sendOtp}
                className="text-right text-[#006fe3] text-base font-normal cursor-pointer"
              >
                Send OTP
              </span>
            }
            value={otp}
            setValue={setOtp}
          />

          <Button
            className="w-full"
            size="lg"
            text="Withdraw"
            onClick={() => setSelected("Main")}
          />
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
