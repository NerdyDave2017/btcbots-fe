import React from "react";
import { MultiDataIcon, HouseIcon } from "@/public/assets/icons";

type Props = {
  selected: "coin" | "exchange" | null;
  setSelected: (value: "coin" | "exchange" | null) => void;
};

const Main = ({ selected, setSelected }: Props) => {
  return (
    <>
      <div className="w-full">
        <p className="text-2xl font-normal text-center">
          Get Started: Choose Your Preferred Method
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-[76px] mt-[48px]">
        <div
          className={`w-[366px] h-[237px] py-8 px-[18px] bg-[#eaf0f6] rounded-2xl flex-col justify-center items-start gap-6 inline-flex hover:border hover:border-primary cursor-pointer border border-[#eaf0f6] box-border ${
            selected === "coin" && "border border-primary"
          }`}
          onClick={() => setSelected("coin")}
        >
          <MultiDataIcon />

          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-base font-normal font-['Sora']">
              Trade your Desired Cryptocurrency
            </p>
            <p className="self-stretch text-base font-light font-['Sora']">
              Choose this option to select your preferred asset and profit
              target.
            </p>
          </div>
        </div>

        <div
          className={`w-[366px] h-[237px] py-8 px-[18px] bg-[#eaf0f6] rounded-2xl flex-col justify-center items-start gap-6 inline-flex hover:border hover:border-primary cursor-pointer border border-[#eaf0f6] box-border  ${
            selected === "exchange" && "border border-primary"
          }`}
          onClick={() => setSelected("exchange")}
        >
          <HouseIcon />

          <div className="flex-col justify-start items-start gap-2 flex">
            <p className="text-base font-normal font-['Sora']">
              Trade on Top Exchanges
            </p>
            <p className="self-stretch text-base font-light font-['Sora']">
              Select this option to leverage our bots on leading cryptocurrency
              exchanges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
