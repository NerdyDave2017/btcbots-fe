import React from "react";
import Header from "../components/header";
import Assets from "./components/assets";
import { CopyIcon } from "@/public/assets/icons";
import AffiliateCenterTable from "./components/affiliate-center-table";
import { BalanceType, SelectedType } from "./page";
import { RewardData } from "@/src/hooks/fetchRequests";
import { toast } from "sonner";

type Props = {
  rewards: RewardData[];
  balance: Record<BalanceType, number>;
  referral: string;
  setSelectedCoin: (value: BalanceType) => void;
  setSelected: (value: SelectedType) => void;
};

const Main = ({
  rewards,
  balance,
  referral,
  setSelectedCoin,
  setSelected,
}: Props) => {
  const copyTextToClipboard = (value: string, feedback: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success(feedback + " copied");
        // Optionally, you can provide feedback to the user that the text has been copied
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

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
        <Assets
          setSelected={setSelected}
          setSelectedCoin={setSelectedCoin}
          balance={balance}
        />
        <div className="py-3 px-4 bg-[#eaf0f6] rounded-lg flex flex-col md:flex-row gap-5 md:gap-10 justify-between items-center my-8 float-right">
          <p className="text-[#090909] text-base font-normal">
            My Referral link
          </p>
          <div className="justify-start items-center gap-2 flex">
            <p className="text-[#090909] text-sm font-light">{referral}</p>
            <CopyIcon
              onClick={() => copyTextToClipboard(referral, "Referral link")}
              className="cursor-pointer"
            />
          </div>
        </div>

        <AffiliateCenterTable data={rewards ?? []} />
      </div>
    </div>
  );
};

export default Main;
