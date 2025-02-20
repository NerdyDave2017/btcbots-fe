import React, { useEffect, useState } from "react";
import { ArrowRight, SearchIcon, SettingsIcon } from "@/public/assets/icons";
import { CoinsType, ExchangesType, SelectedType } from "../page";
import Link from "next/link";
import Card from "../components/card";
import Header from "../../components/header";
import { Masonry } from "react-plock";
import {
  CB001,
  CB002,
  CB003,
  CB004,
  CB005,
  CB006,
  CB007,
  CB008,
  CB009,
  CB010,
  CB011,
  SOLBTC,
  SOLETH,
} from "../../data";
import { CardDetails } from "@/src/types";
const CardData = [
  CB001,
  CB002,
  CB003,
  SOLBTC,
  CB004,
  CB005,
  CB006,
  SOLETH,
  CB007,
  CB008,
  CB009,
  CB010,
  CB011,
];

type Props = {
  setStrategy: (strategy: CardDetails) => void;
  depositCoin: CoinsType;
  profitCoin: CoinsType;
  selectedExchange: ExchangesType;
  setSelected: (value: SelectedType) => void;
};

const Strategy = ({
  setStrategy,
  depositCoin,
  profitCoin,
  selectedExchange,
  setSelected,
}: Props) => {
  const [filteredCard, setFilteredCard] = useState<typeof CardData>([]);

  const nav = ["Data Room", "FAQ", "Help", "Knowledge Base"];

  const filterCardData = () => {
    if (depositCoin && profitCoin) {
      setFilteredCard(
        CardData.filter((item) => {
          return (
            depositCoin.toLowerCase().includes(item.strategy.deposit_coin) &&
            profitCoin.toLowerCase().includes(item.strategy.profit_coin)
          );
        })
      );
      return;
    }

    if (selectedExchange) {
      console.log(selectedExchange);
      setFilteredCard(
        CardData.filter((item) => {
          return item.exchanges.includes(selectedExchange);
        })
      );

      return;
    }

    setFilteredCard(CardData);
  };

  useEffect(() => {
    filterCardData();
  }, [depositCoin, selectedExchange, profitCoin]);

  return (
    <div className="w-full font-normal overflow-scroll pb-[48px]">
      <Header
        text="Select Your Desired Strategy"
        showArrow={true}
        onClick={() => setSelected(null)}
      />

      <div className="w-full px-5 xl:px-[48px] py-4 bg-[#eaf0f6] justify-between items-center flex flex-col md:flex-row gap-4">
        <div className="justify-start items-center gap-6 inline-flex">
          {nav.map((item) => (
            <Link
              href=""
              key={item}
              className="text-main text-base xl:text-lg font-normal text-nowrap"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="w-[289px] bg-[#dfeaf5] rounded-xl justify-between items-center inline-flex gap-2">
            <input
              className="text-[#3c3c43]/60 text-base font-normal bg-transparent px-4 py-3 w-full outline-none"
              placeholder="Search for a bot"
            />

            <SearchIcon className="mr-4 cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
          </div>

          <div className="px-4 py-3 bg-[#dfeaf5] rounded-xl justify-center items-center inline-flex">
            <SettingsIcon className="cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
          </div>
        </div>
      </div>

      <Masonry
        className="w-[350px] md:w-[700px] xl:w-[1070px] m-auto mt-6"
        items={filteredCard}
        config={{
          columns: [1, 2, 2, 3],
          gap: [24, 12, 6, 6],
          media: [640, 770, 1025, 1440],
        }}
        render={(item, index) => (
          <Card
            key={index}
            cardDetails={item}
            onClick={() => {
              setStrategy(item);
              setSelected("activate");
            }}
          />
        )}
      />
    </div>
  );
};

export default Strategy;
