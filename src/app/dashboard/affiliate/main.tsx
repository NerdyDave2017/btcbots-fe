import React from "react";
import Assets from "./components/assets";
import { CopyIcon } from "@/public/assets/icons";
import AffiliateCenterTable from "./components/affiliate-center-table";

const Main = () => {
  return (
    <div className="w-full">
      <div className="px-[48px]">
        <Assets />
        <div className="py-3 px-4 bg-[#eaf0f6] rounded-lg flex gap-10 justify-between items-center my-8 float-right">
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
