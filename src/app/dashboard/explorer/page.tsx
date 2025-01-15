"use client";
import React, { useState, useEffect } from "react";
import Main from "./main";
import Coins from "./coins";
import Exchanges from "./exchanges";
import Strategy from "./strategy";
import Activate from "./activate";
import { CardDetails } from "@/src/types";
import { useSearchParams } from "next/navigation";

export type SelectedType = "coin" | "exchange" | "strategy" | "activate" | null;
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
} from "../data";
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

const page = () => {
  const searchParams = useSearchParams();
  const strategyQuery = searchParams.get("strategy");

  const [selected, setSelected] = useState<SelectedType>(null);
  const [depositCoin, setDepositCoin] = useState<CoinsType>(null);
  const [profitCoin, setProfitCoin] = useState<CoinsType>(null);
  const [selectedExchange, setSelectedExchange] = useState<ExchangesType>(null);
  const [strategy, setStrategy] = useState<CardDetails | null>(null);

  useEffect(() => {
    if (strategyQuery) {
      setSelected("activate");
      setStrategy(
        CardData.find((item) => item.strategy.name === strategyQuery) || null
      );
    }
  }, [strategyQuery]);

  return (
    <div className="w-full  text-text-light font-light overflow-scroll">
      {selected === null && (
        <Main
          selected={selected}
          setSelected={setSelected}
          setDepositCoin={setDepositCoin}
          setProfitCoin={setProfitCoin}
          setSelectedExchange={setSelectedExchange}
        />
      )}
      {selected === "coin" && (
        <Coins
          setSelected={setSelected}
          setDepositCoin={setDepositCoin}
          depositCoin={depositCoin}
          setProfitCoin={setProfitCoin}
          profitCoin={profitCoin}
        />
      )}
      {selected === "exchange" && (
        <Exchanges
          setSelected={setSelected}
          setSelectedExchange={setSelectedExchange}
          selectedExchange={selectedExchange}
        />
      )}

      {selected === "strategy" && (
        <Strategy
          setStrategy={setStrategy}
          depositCoin={depositCoin}
          profitCoin={profitCoin}
          selectedExchange={selectedExchange}
          setSelected={setSelected}
        />
      )}

      {selected === "activate" && (
        <Activate
          depositCoin={depositCoin}
          profitCoin={profitCoin}
          strategy={strategy!}
          setSelected={setSelected}
          setSelectedExchange={setSelectedExchange}
          selectedExchange={selectedExchange}
        />
      )}
    </div>
  );
};

export default page;
