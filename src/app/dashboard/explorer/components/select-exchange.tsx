import React from "react";
import { HouseIcon, ArrowRight } from "@/public/assets/icons";
import Button from "@/src/app/components/button";
import { type SelectedType, type ExchangesType } from "../page";

type Props = {
  setSelected?: (value: SelectedType) => void;
  setSelectedExchange: (value: ExchangesType) => void;
  selectedExchange: ExchangesType;
};

function SelectExchange({
  setSelected,
  setSelectedExchange,
  selectedExchange,
}: Props) {
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
    <div className="w-full">
      <div className="w-full px-4 py-6 md:py-10 bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px] flex items-center gap-3 ">
        <HouseIcon />
        <p className="text-main text-lg">Select an exchange</p>
      </div>

      <div className="w-full py-6 px-[18px] bg-[#eaf0f6] rounded-bl-2xl rounded-br-2xl">
        <p className="text-text-light text-base mb-[16px]">
          Available exchanges
        </p>

        <div className="w-full flex gap-2 gap-y-[32px] flex-wrap ">
          {exchanges.map((exchange) => (
            <div
              key={exchange}
              className={`px-2 md:px-4 py-2 bg-[#d0e0f1] rounded border hover:border-main justify-center items-center inline-flex cursor-pointer box-border transition-all ease-in-out duration-200 ${
                selectedExchange === exchange
                  ? "border-main"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedExchange(exchange as ExchangesType)}
            >
              <p className="text-text-light text-lg">{exchange}</p>
            </div>
          ))}
        </div>

        {setSelected && (
          <Button
            onClick={() => setSelected("strategy")}
            text="Proceed"
            className="w-full mt-[32px]"
            size="lg"
          />
        )}
      </div>
    </div>
  );
}

export default SelectExchange;
