import React from "react";
import Header from "../components/header";
import Assets from "./components/assets";
import { CopyIcon } from "@/public/assets/icons";
import AffiliateCenterTable from "./components/affiliate-center-table";
import { SelectedType } from "./page";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const Main = ({ setSelected }: Props) => {
  return (
    <div className="w-full">
      <Header
        text="Affiliate Center"
        description={
          <span>
            Every time your referral pay their profit share of the month, 25%
            get automatically credited in your account and <br /> settled in the
            current they paid with, for you to withdraw immediately.
          </span>
        }
        showArrow={false}
      />
      <div className="px-5 lg:px-[48px]">
        <Assets onClick={() => setSelected("Withdraw")} />
        <div className="py-3 px-4 bg-[#eaf0f6] rounded-lg flex flex-col md:flex-row gap-5 md:gap-10 justify-between items-center my-8 float-right">
          <p className="text-[#090909] text-base font-normal">
            My Referral link
          </p>
          <div className="justify-start items-center gap-2 flex">
            <p className="text-[#090909] text-sm font-light">
              https://btcbots.us/dashboard/Wn239saj
            </p>
            <CopyIcon className="cursor-pointer" />
          </div>
        </div>

        <AffiliateCenterTable />
      </div>
    </div>
  );
};

export default Main;
