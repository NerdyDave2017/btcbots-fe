import React from "react";
import { HouseIcon, ArrowRight } from "@/public/assets/icons";
import Button from "@/src/app/components/button";
import { type SelectedType, type ExchangesType } from "../page";
import SelectExchange from "../components/select-exchange";

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
  return (
    <div className="w-full px-[48px] font-normal">
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
        <SelectExchange
          setSelected={setSelected}
          setSelectedExchange={setSelectedExchange}
          selectedExchange={selectedExchange}
        />
      </div>
    </div>
  );
};

export default Exchanges;
