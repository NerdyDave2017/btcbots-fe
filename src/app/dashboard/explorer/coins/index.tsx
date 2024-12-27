import React from "react";
import { MultiDataIcon, ArrowRight } from "@/public/assets/icons";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import { type SelectedType, type CoinsType } from "../page";
import Button from "@/src/app/components/button";
import Image from "next/image";
import Header from "../../components/header";

type Props = {
  setSelected: (value: SelectedType) => void;
  setDepositCoin: (value: CoinsType) => void;
  depositCoin: CoinsType;
  setProfitCoin: (value: CoinsType) => void;
  profitCoin: CoinsType;
};

const Coins = ({
  setSelected,
  depositCoin,
  profitCoin,
  setDepositCoin,
  setProfitCoin,
}: Props) => {
  const coins = [
    {
      name: "BTC",
      icon: Bitcoin,
    },
    {
      name: "ETH",
      icon: Ethereum,
    },
    {
      name: "SOL",
      icon: Solana,
    },
    {
      name: "USDT",
      icon: Usdt,
    },
    {
      name: "USDC",
      icon: Usdc,
    },
  ];

  return (
    <div className="w-full font-normal">
      <Header
        text="Explore our bots and their performance"
        showArrow={true}
        onClick={() => setSelected(null)}
      />

      <div className="w-full md:w-[516px] mx-auto px-5">
        <div className="w-full px-4 py-6 md:py-10 bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px] flex items-center gap-3 ">
          <MultiDataIcon />
          <p className="text-main text-lg">Select your asset</p>
        </div>

        <div className="w-full py-6 px-[18px] bg-[#eaf0f6] rounded-bl-2xl rounded-br-2xl">
          <div className="w-full mb-[32px]">
            <div className="w-full mb-8">
              <p className="mb-2">Deposit with</p>
              <div className="w-full flex items-start justify-start gap-2 flex-wrap">
                {coins.map((coin) => (
                  <div
                    key={coin.name}
                    className={`px-2  py-2 bg-[#d0e0f1] rounded border hover:border-main box-border transition-all ease-in-out duration-200  ${
                      depositCoin === coin.name
                        ? "border-[#006fe3]"
                        : "border-transparent"
                    } justify-start items-center gap-2 inline-flex cursor-pointer`}
                    onClick={() => setDepositCoin(coin.name as CoinsType)}
                  >
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={coin.icon}
                      alt={coin.name}
                    />
                    <p className="text-text-light text-base">{coin.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#E3E3E3]/50 mb-8"></div>

            <div className="w-full">
              <p className="mb-2">Profits with</p>
              <div className="w-full flex items-start justify-start gap-2 flex-wrap">
                {coins.map((coin) => (
                  <div
                    key={coin.name}
                    className={`px-2 py-2 bg-[#d0e0f1] rounded border hover:border-main box-border transition-all ease-in duration-200  ${
                      profitCoin === coin.name
                        ? "border-[#006fe3]"
                        : "border-transparent"
                    } justify-start items-center gap-2 inline-flex cursor-pointer`}
                    onClick={() => setProfitCoin(coin.name as CoinsType)}
                  >
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={coin.icon}
                      alt={coin.name}
                    />
                    <p className="text-text-light text-base">{coin.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={() => setSelected("strategy")}
            text="Proceed"
            className="w-full"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Coins;
