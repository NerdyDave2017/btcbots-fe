import React from "react";
import { HouseIcon, ArrowRight } from "@/public/assets/icons";
import Button from "@/src/app/components/button";
import { type SelectedType, type ExchangesType } from "../../page";

type Props = {
  setSelected: (value: SelectedType) => void;
  setSelectedExchange: (value: ExchangesType) => void;
  selectedExchange: ExchangesType;
};

const Exchanges = ({
  setSelected,
  setSelectedExchange,
  selectedExchange,
}: Props) => {
  const exchanges = [
    "Binance.US",
    "Bybit",
    "Binance",
    "OKX",
    "Gemini",
    "Bitget",
    "Kraken",
    "Gate.io",
  ];

  return (
    <div className="w-full font-normal">
      <div className="w-full relative mb-[48px]">
        <ArrowRight
          onClick={() => setSelected(null)}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <p className="text-2xl text-center">
          Explore our bots and their performance
        </p>
      </div>

      <div className="w-[516px] mx-auto">
        <div className="w-full px-4 py-10 bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px] flex items-center gap-3 ">
          <HouseIcon />
          <p className="text-primary text-lg">Select an exchange</p>
        </div>

        <div className="w-full py-6 px-[18px] bg-[#eaf0f6] rounded-bl-2xl rounded-br-2xl">
          <p className="text-text-light text-base mb-[16px]">
            Available exchanges
          </p>

          <div className="w-full flex gap-2 gap-y-[32px] flex-wrap mb-[32px]">
            {exchanges.map((exchange) => (
              <div
                key={exchange}
                className={`px-6 py-4 bg-[#d0e0f1] rounded border hover:border hover:border-primary justify-center items-center inline-flex cursor-pointer box-border transition-all ease-in duration-200 ${
                  selectedExchange === exchange
                    ? "border-primary"
                    : "border-[#d0e0f1]"
                }`}
                onClick={() => setSelectedExchange(exchange as ExchangesType)}
              >
                <p className="text-text-light text-lg">{exchange}</p>
              </div>
            ))}
          </div>

          <Button text="Proceed" className="w-full" size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
