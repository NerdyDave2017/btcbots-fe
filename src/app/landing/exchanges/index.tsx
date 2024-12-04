import React from "react";
import Container from "../components/container";
import binanceUs from "@/public/assets/icons/binance-us.svg";
import binance from "@/public/assets/icons/binance-vector-logo 1.svg";
import bitget from "@/public/assets/icons/bitget.svg";
import bybit from "@/public/assets/icons/bybit-seeklogo 1.svg";
import coinbase from "@/public/assets/icons/coinbase.svg";
import full_gate from "@/public/assets/icons/full-gate.io-logo 1.svg";
import gemini from "@/public/assets/icons/gemini.svg";
import kraken from "@/public/assets/icons/kraken-vector-logo 1.svg";
import kucoin from "@/public/assets/icons/Kucoin.svg";
import okex from "@/public/assets/icons/OKX_logo 1.svg";
import Image from "next/image";
import { SleepDollar, Discount, MoneyNotFound } from "@/public/assets/icons";

const Exchanges = () => {
  const exchanges = [
    { name: "Binance", logo: binance },
    { name: "OKEX", logo: okex },
    { name: "Bybit", logo: bybit },
    { name: "Kraken", logo: kraken },
    { name: "Kucoin", logo: kucoin },
    { name: "Coinbase", logo: coinbase },
    { name: "Gemini", logo: gemini },
    { name: "Gate.io", logo: full_gate },
    { name: "Binance US", logo: binanceUs },
    { name: "Bitget", logo: bitget },
  ];

  return (
    <div className="bg-[#F4F6F8] text-text-light py-[70px]">
      <Container>
        <div className="">
          <p className="text-2xl text-center mb-[24px]">
            Automated trading on leading exchanges.
          </p>
          <div className="max-w-[1100px] mx-auto grid grid-cols-5 justify-items-center gap-y-[40px] mb-[64px]">
            {exchanges.map((exchange, index) => (
              <div key={index} className="">
                <Image
                  style={{
                    color: "wheat",
                  }}
                  src={exchange.logo}
                  alt={exchange.name}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center gap-[40px]">
            <div className="w-[284px] h-[287px] bg-[#e8f0f7] rounded-lg px-[32px] py-[50px] flex flex-col items-center justify-center text-center gap-[16px]">
              <SleepDollar />
              <span className="text-2xl">
                Generate passive cash-flow independently
              </span>
            </div>
            <div className="w-[284px] h-[342px] bg-[#e8f0f7] rounded-lg px-[32px] py-[50px] flex flex-col items-center justify-center text-center gap-[16px]">
              <Discount />
              <span className="text-2xl">
                Earn and withdraw 25% of all your referrals performance fees.
              </span>
            </div>
            <div className="w-[284px] h-[287px] bg-[#e8f0f7] rounded-lg px-[32px] py-[50px] flex flex-col items-center justify-center text-center gap-[16px]">
              <MoneyNotFound />
              <span className="text-2xl">
                0$ to start. no credit card required.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Exchanges;
