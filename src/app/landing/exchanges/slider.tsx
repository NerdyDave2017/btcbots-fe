import React from "react";
import binanceUs from "@/public/assets/icons/binance-us.svg";
import binance from "@/public/assets/icons/binance.svg";
import bitget from "@/public/assets/icons/bitget.svg";
import bybit from "@/public/assets/icons/bybit.svg";
import coinbase from "@/public/assets/icons/coinbase.svg";
import full_gate from "@/public/assets/icons/full-gate-io.svg";
import gemini from "@/public/assets/icons/gemini.svg";
import kraken from "@/public/assets/icons/kraken.svg";
import kucoin from "@/public/assets/icons/kucoin.svg";
import okex from "@/public/assets/icons/okx.svg";
import Image from "next/image";

import Slider from "react-infinite-logo-slider";
import index from "../../(auth)/components/alternative-signin/index";

const exchanges = [
  { name: "Binance", logo: binance },
  { name: "OKEX", logo: okex },
  { name: "Bybit", logo: bybit },
  { name: "Kraken", logo: kraken },
  { name: "Kucoin", logo: kucoin },
];

const exchanges2 = [
  { name: "Coinbase", logo: coinbase },
  { name: "Gemini", logo: gemini },
  { name: "Gate.io", logo: full_gate },
  { name: "Binance US", logo: binanceUs },
  { name: "Bitget", logo: bitget },
];

const SliderContainer = () => {
  return (
    <>
      <Slider
        width="180px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#F4F6F8"}
      >
        {exchanges.map((exchange, index) => (
          <Slider.Slide key={index}>
            <Image
              className="w-[130px] h-[50px]"
              height={100}
              width={100}
              style={{
                color: "wheat",
              }}
              src={exchange.logo}
              alt={exchange.name}
            />
          </Slider.Slide>
        ))}
      </Slider>
      <Slider
        width="180px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={"#F4F6F8"}
      >
        {exchanges2.map((exchange, index) => (
          <Slider.Slide key={index}>
            <Image
              className="w-[130px] h-[50px]"
              height={100}
              width={100}
              style={{
                color: "wheat",
              }}
              src={exchange.logo}
              alt={exchange.name}
            />
          </Slider.Slide>
        ))}
      </Slider>
    </>
    // <div className="min-w-[1100px] md:max-w-[1100px]  mx-auto grid grid-cols-5 justify-items-center gap-y-[40px] mb-[64px] overflow-scroll">
    // </div>
  );
};

export default SliderContainer;
