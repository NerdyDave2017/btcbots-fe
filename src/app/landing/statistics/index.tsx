import React from "react";
import Container from "../../components/container";
import Image from "next/image";
import bloomberg from "@/public/assets/icons/bloomberg.svg";
import coindesk from "@/public/assets/icons/coindesk.svg";
import cointelegraph from "@/public/assets/icons/cointelegraph.svg";
import forbes from "@/public/assets/icons/forbes.svg";
import reuters from "@/public/assets/icons/reuters.svg";
import wired from "@/public/assets/icons/wired.svg";
import yahoo from "@/public/assets/icons/yahoo.svg";

const Statistics = () => {
  const statistics = [
    { name: "CoinDesk", logo: coindesk },
    { name: "Bloomberg", logo: bloomberg },
    { name: "CoinTelegraph", logo: cointelegraph },
  ];

  const statistics2 = [
    { name: "Reuters", logo: reuters },
    { name: "Wired", logo: wired },
    { name: "Yahoo", logo: yahoo },
    { name: "Forbes", logo: forbes },
  ];

  return (
    <div className="bg-[#f4f6f8] text-text-light py-10 pb-36 lg:py-[70px] xl:pb-[260px]">
      <Container>
        <div className="">
          <div className="hidden lg:flex mb-20">
            <div className="flex-1"></div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-[26px] md:text-[32px] xl:text-[40px] text-main">
                Our Statistics
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row relative">
            <div className="flex-1 text-text-light text-center lg:text-start text-base md:text-xl xl:text-2xl">
              <p className="mb-[24px]">
                Find reports and articles about the <br /> power of automated
                trading in:{" "}
              </p>
              <div className="w-full flex mb-[28px] mx-auto ">
                {statistics.map((statistic, index) => (
                  <div key={index} className="">
                    <Image src={statistic.logo} alt={statistic.name} />
                  </div>
                ))}
              </div>
              <div className="w-full flex  mx-auto">
                {statistics2.map((statistic, index) => (
                  <div key={index} className="">
                    <Image src={statistic.logo} alt={statistic.name} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex lg:hidden items-center justify-center mb-8">
              <p className="text-[26px] text-main">Our Statistics</p>
            </div>
            <div className="flex-1 lg:h-[650px] text-[#f4f6f8] flex lg:block flex-col items-center justify-center gap-6">
              <div className="w-[323px] h-[182px] xl:w-[412px] xl:h-[264px] rounded-lg lg:absolute p-[40px] xl:p-[64px] bg-main lg:top-[315px] lg:right-[180px] xl:top-[364px] xl:right-[480.13px]">
                <p className="text-[32px] xl:text-5xl leading-snug">$3.9m+</p>
                <p className="text-lg xl:text-2xl">
                  In profits generated since 2020
                </p>
              </div>
              <div className="w-[323px] h-[182px] xl:w-[412px] xl:h-[324px] rounded-lg lg:absolute p-[40px] xl:p-[64px] bg-dark-background lg:right-[90px] lg:top-[162px] xl:right-auto  xl:top-[162.54px]">
                <p className="text-[32px] xl:text-5xl leading-tight">
                  42 Countries
                </p>
                <p className="text-lg xl:text-2xl">
                  helping people achieve their financial goals.
                </p>
              </div>
              <div className="w-[323px] h-[182px] xl:w-[412px] xl:h-[264px] rounded-lg lg:absolute p-[40px] xl:p-[64px] bg-main lg:right-0 xl:right-0">
                <p className="text-[32px] xl:text-5xl leading-snug">$323K+</p>
                <p className="text-lg xl:text-2xl">
                  paid out to our affiliate partners.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
