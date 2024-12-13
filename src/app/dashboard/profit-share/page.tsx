"use client";
import React from "react";
import Header from "../components/header";
import ProfitShareTable from "./profit-share-table";

const page = () => {
  return (
    <div className="w-full pb-[48px]">
      <Header
        text="Profits Share"
        description={
          <span>
            Around every 30 days, we will take a snap shot of your accumulated
            profits <br /> and request you to send us 33% in the currency you
            profited in.
          </span>
        }
        showArrow={false}
      />
      <div className="px-[48px]">
        <ProfitShareTable />
      </div>
    </div>
  );
};

export default page;
