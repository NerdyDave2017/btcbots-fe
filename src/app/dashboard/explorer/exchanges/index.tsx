import React from "react";
import { HouseIcon, ArrowRight } from "@/public/assets/icons";
import Button from "@/src/app/components/button";
import { type SelectedType, type ExchangesType } from "../page";
import SelectExchange from "../components/select-exchange";
import Header from "../../components/header";

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
    <div className="w-full font-normal px-5">
      <Header
        text="Explore our bots and their performance"
        showArrow={true}
        onClick={() => setSelected(null)}
      />

      <div className="w-full md:w-[516px] mx-auto">
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
