"use client";
import React, { useState } from "react";
import Main from "./components/main";
import Coins from "./components/coins";
import Exchanges from "./components/exchanges";

export type SelectedType = "coin" | "exchange" | null;
export type CoinsType = "BTC" | "ETH" | " SOL" | "USDT" | "USDC" | null;
export type ExchangesType =
  | "Binance.US"
  | "Bybit"
  | "Binance"
  | "OKX"
  | "Gemini"
  | "Bitget"
  | "Kraken"
  | "Gate.io"
  | null;

const page = () => {
  const [selected, setSelected] = useState<SelectedType>(null);
  const [selectedCoin, setSelectedCoin] = useState<CoinsType>(null);
  const [selectedExchange, setSelectedExchange] = useState<ExchangesType>(null);

  return (
    <div className="w-full p-[48px] text-text-light font-light">
      {selected === null && (
        <Main selected={selected} setSelected={setSelected} />
      )}
      {selected === "coin" && (
        <Coins
          setSelected={setSelected}
          setSelectedCoin={setSelectedCoin}
          selectedCoin={selectedCoin}
        />
      )}
      {selected === "exchange" && (
        <Exchanges
          setSelected={setSelected}
          setSelectedExchange={setSelectedExchange}
          selectedExchange={selectedExchange}
        />
      )}
    </div>
  );
};

export default page;
