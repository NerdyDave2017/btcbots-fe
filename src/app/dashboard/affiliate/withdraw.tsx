import React from "react";
import Header from "../components/header";
import Input from "../../components/input";
import Button from "../../components/button";
import { SelectedType } from "./page";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const Withdraw = ({ setSelected }: Props) => {
  return (
    <div className="w-full">
      <Header text="Withdraw Balance" onClick={() => setSelected("Main")} />
      <div className="w-full px-5 lg:px-[48px]">
        <div className="max-w-[500px] mx-auto flex flex-col gap-8">
          <Input label="USD address" icon="text" value="" setValue={() => {}} />

          <div className="">
            <Input
              label="Amount to withdraw"
              icon="text"
              value=""
              setValue={() => {}}
            />
            <div className="text-right mt-4">
              <span className="text-[#3c3c43]/60 text-sm font-normal">
                Available balance:{" "}
              </span>
              <span className="text-[#090909] text-sm font-normal">
                239.3823USD
              </span>
            </div>
          </div>

          <Input
            label="2FA OTP"
            icon="text"
            action={
              <span className="text-right text-[#006fe3] text-base font-normal cursor-pointer">
                Send OTP
              </span>
            }
            value=""
            setValue={() => {}}
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
