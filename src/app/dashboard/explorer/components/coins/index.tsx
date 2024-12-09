import React from "react";
import { MultiDataIcon, ArrowRight } from "@/public/assets/icons";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import { type CoinsType } from "../../page";

type Props = {
  setSelected: (value: "coin" | "exchange" | null) => void;
  setSelectedCoin: (value: CoinsType | null) => void;
  selectedCoin: CoinsType | null;
};

const Coins = ({ setSelected, setSelectedCoin, selectedCoin }: Props) => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full relative">
        <ArrowRight
          onClick={() => setSelected(null)}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <p className="text-2xl font-normal text-center">
          Explore our bots and their performance
        </p>
      </div>
    </div>
  );
};

export default Coins;
