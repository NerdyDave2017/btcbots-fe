import React from "react";
import Header from "../components/header";
import { SelectedType } from "./page";
import { ArrowRight } from "@/public/assets/icons";
import SearchBar from "./components/searchbar";

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
      <SearchBar />
      <div className="w-full md:max-w-[1058px] mx-auto px-5 lg:px-[48px] ">
        <div className="w-full mt-8 py-4 bg-[#eaf0f6] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch px-4 md:px-8 flex-col justify-start items-start gap-3 flex">
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
                className="self-stretch px-4 md:px-8 flex-col justify-start items-center gap-3 flex"
              >
                <div className="self-stretch justify-between items-start flex">
                  <p className="text-[#090909] text-sm font-light flex-1">
                    {info}
                  </p>
                  <ArrowRight className="cursor-pointer" />
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="w-full mt-8 py-4 bg-[#eaf0f6] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch px-4 md:px-8 flex-col justify-start items-start gap-3 flex">
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
                className="self-stretch px-4 md:px-8 flex-col justify-start items-center gap-3 flex"
              >
                <div className="self-stretch justify-between items-center flex">
                  <p className="text-[#090909] text-sm font-light flex-1">
                    {info}
                  </p>
                  <ArrowRight className="cursor-pointer w-6" />
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
