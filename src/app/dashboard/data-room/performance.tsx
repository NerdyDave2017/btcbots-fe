import React from "react";
import Header from "../components/header";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Button from "../../components/button";
import Dropdown from "../../components/dropdown/dropdown";
import Chart from "@/public/assets/icons/performance-chart.svg";

const Performance = () => {
  const data = [
    {
      title: " Market Strategy",
      value: "Long",
    },
    {
      title: "Average",
      value: "0.33",
    },
    {
      title: "Maximum",
      value: "2.33",
    },
    {
      title: "Max Price Deviation",
      value: "-21.73",
    },
    {
      title: "Profits",
      value: "36.15%",
    },
    {
      title: "Completed trades",
      value: "20816 SOL",
    },
  ];

  return (
    <div className="w-full px-[48px]">
      <Header text="Performance Data" showArrow />

      <div className="w-full mb-[60px]">
        <Image src={Chart} alt="" />
      </div>

      <div className="flex w-full justify-center gap-[48px]">
        <div className="flex-1 w-full max-w-[550px]">
          <div className="bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px] py-6 px-4 break-inside-avoid flex items-center justify-start gap-4">
            <Image src={Bitcoin} className="w-12 h-12" alt="" />
            <div className="flex flex-col items-start justify-center gap-3">
              <div className="flex items-center gap-4">
                <p className="text-xl text-text-light font-normal">
                  Bitcoin Bot
                </p>
                <div className="px-2.5 py-1.5 bg-primary/20 rounded-[90px] justify-center items-center flex">
                  <p className="text-primary text-sm font-normal">CB001</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-4 px-4 bg-[#eaf0f6] rounded-bl-[32px] rounded-br-[32px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="flex-col justify-center items-start gap-4 inline-flex">
                <p className="text-[#3c3c43]/60 text-sm font-normal">Profits</p>

                <p className="text-[#090909] text-base font-normal">36.15%</p>
              </div>
              <div className="flex-col justify-center items-end gap-4 inline-flex">
                <p className="text-[#3c3c43]/60 text-sm font-normal">
                  Completed trades
                </p>

                <p className="text-[#090909] text-base font-normal">
                  20816 SOL
                </p>
              </div>
            </div>

            <div className="w-full border border-[#E3E3E3]/50"></div>

            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch justify-between items-start inline-flex"
                >
                  <div className="text-[#3c3c43]/60 text-sm font-normal">
                    {item.title}
                  </div>
                  <div
                    className={`text-[#090909] text-base font-normal ${
                      index === 0 && "text-[#14ae5c]"
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full border border-[#E3E3E3]/50"></div>

            <Button className="w-full" text="Activate Bot" size="lg" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <Dropdown
            label="Year"
            setValue={() => {}}
            value=""
            options={["2020", "2021", "2022", "2023", "2024"]}
          />
          <Dropdown
            label="Month"
            setValue={() => {}}
            value=""
            options={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
          />
          <Button className="w-full" size="lg" text="Apply Changes" />
        </div>
      </div>
    </div>
  );
};

export default Performance;
