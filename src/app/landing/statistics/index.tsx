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
    <div className="bg-[#f4f6f8] text-text-light py-[70px] pb-[260px]">
      <Container>
        <div className="">
          <div className="flex mb-20">
            <div className="flex-1"></div>
            <div className="flex-1 flex items-center justify-ce">
              <p className="text-[40px] text-primary">Our Statistics</p>
            </div>
          </div>

          <div className="flex relative">
            <div className="flex-1 text-text-light text-2xl">
              <p className="mb-[24px]">
                Find reports and articles about the <br /> power of automated
                trading in:{" "}
              </p>
              <div className="w-full flex mb-[28px]  ">
                {statistics.map((statistic, index) => (
                  <div key={index} className="">
                    <Image src={statistic.logo} alt={statistic.name} />
                  </div>
                ))}
              </div>
              <div className="w-full flex  ">
                {statistics2.map((statistic, index) => (
                  <div key={index} className="">
                    <Image src={statistic.logo} alt={statistic.name} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 h-[628px] text-[#f4f6f8] ">
              <div className="w-[412px] h-[264px] rounded-lg absolute p-[64px] bg-primary top-[364px] right-[480.13px]">
                <p className="text-5xl leading-snug">$3.9m+</p>
                <p className="text-2xl">In profits generated since 2020</p>
              </div>
              <div className="w-[412px] h-[324px] rounded-lg absolute p-[64px] bg-dark-background top-[162.54px]">
                <p className="text-5xl leading-tight">42 Countries</p>
                <p className="text-2xl">
                  helping people achieve their financial goals.
                </p>
              </div>
              <div className="w-[412px] h-[264px] rounded-lg absolute p-[64px] bg-primary right-0">
                <p className="text-5xl leading-snug">$323K+</p>
                <p className="text-2xl">paid out to our affiliate partners. </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
