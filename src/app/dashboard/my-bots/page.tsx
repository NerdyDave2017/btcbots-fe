"use client";
import React, { useState } from "react";
import Main from "./main";
import LiveChart from "./live-chart";
import LiveTrade from "./live-trade";
import TradeOrders from "./trade-orders";
import ClosedTrades from "./closed-trades";
import { BotData } from "@/src/hooks/fetchRequests";

export type SelectedType =
  | "LiveTrade"
  | "LiveChart"
  | "TradeOrders"
  | "ClosedTrades"
  | null;

const page = () => {
  const [selected, setSelected] = useState<SelectedType>(null);
  const [activeBot, setActiveBot] = useState<BotData | null>(null);

  return (
    <div className="w-full  text-text-light font-light overflow-scroll pb-[48px]">
      {selected === null && (
        <Main setActiveBot={setActiveBot} setSelected={setSelected} />
      )}

      {selected === "LiveTrade" && (
        <LiveTrade activeBot={activeBot} setSelected={setSelected} />
      )}

      {selected === "LiveChart" && <LiveChart setSelected={setSelected} />}

      {selected === "TradeOrders" && <TradeOrders setSelected={setSelected} />}

      {selected === "ClosedTrades" && (
        <ClosedTrades setSelected={setSelected} />
      )}
    </div>
  );
};

export default page;
