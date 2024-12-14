"use client";
import React from "react";
import Header from "../components/header";
import Main from "./main";

const page = () => {
  return (
    <div className="w-full pb-[48px]">
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

      <Main />
    </div>
  );
};

export default page;
