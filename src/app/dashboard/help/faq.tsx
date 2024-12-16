import React from "react";
import Header from "../components/header";
import { SelectedType } from "./page";
import { SearchIcon, ArrowRight } from "@/public/assets/icons";
import Image from "next/image";
import flag from "@/public/assets/images/Circle.svg";

type Props = {
  setSelected: (selected: SelectedType) => void;
};

const FAQ = ({ setSelected }: Props) => {
  const GeneralInformation = [
    "What is cryptobots.io ?",
    "What do you need to start using cryptobots.io ?",
    "What's the average expected ROI (return on investment) I should expect ?",
  ];

  const StrategiesTrading = [
    "How do the strategies differ from one another in terms of their approach and application ?",
    "What happens if I manually interfere with the trades executed by the automated trading system?",
    "How many trades does the algorithm take per month ?",
  ];

  return (
    <div className="w-full">
      <Header
        text="Frequent Asked Questions"
        showArrow
        onClick={() => setSelected("main")}
      />
      <div className="w-full px-[48px] py-4 bg-[#eaf0f6] justify-center items-center inline-flex relative">
        <div className="w-[510px] bg-[#dfeaf5] rounded-xl justify-between items-center inline-flex gap-2">
          <input
            className="text-[#3c3c43]/60 text-base font-normal bg-transparent px-4 py-3 w-full outline-none"
            placeholder="Search for an article"
          />

          <SearchIcon className="mr-4 cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
        </div>

        <div className="absolute h-[32px] border-[#bec9d5] border-[1px] px-[8px] py-[6px] flex items-center justify-between rounded cursor-pointer right-[48px]">
          <span className="h-full w-full">
            <Image src={flag} alt="Flag" />
          </span>
          <span className="">EN</span>
        </div>
      </div>
      <div className="w-full px-[48px] ">
        <div className="w-full mt-8 py-4 bg-[#eaf0f6] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch h-5 px-8 flex-col justify-start items-start gap-3 flex">
            <p className="text-[#090909] text-base font-normal">
              General Information
            </p>
          </div>

          {GeneralInformation.map((info, index) => (
            <>
              <div className="self-stretch px-4 ">
                <div className="w-full border border-[#E3E3E3]/50"></div>
              </div>
              <div
                key={index}
                className="self-stretch h-6 px-8 flex-col justify-start items-start gap-3 flex"
              >
                <div className="self-stretch justify-between items-start inline-flex">
                  <p className="text-[#090909] text-sm font-light">{info}</p>
                  <ArrowRight className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="w-full mt-8 py-4 bg-[#eaf0f6] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch h-5 px-8 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch justify-start items-start gap-[60px] inline-flex">
              <div className="text-[#090909] text-base font-normal">
                Strategies and Trading
              </div>
            </div>
          </div>
          {StrategiesTrading.map((info, index) => (
            <>
              <div className="self-stretch px-4 ">
                <div className="w-full border border-[#E3E3E3]/50"></div>
              </div>
              <div
                key={index}
                className="self-stretch h-6 px-8 flex-col justify-start items-start gap-3 flex"
              >
                <div className="self-stretch justify-between items-start inline-flex">
                  <p className="text-[#090909] text-sm font-light">{info}</p>
                  <ArrowRight className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
