"use client";
import React, { useState } from "react";
import Main from "./main";
import LiveChart from "./live-chart";
import LiveTrade from "./live-trade";
import TradeOrders from "./trade-orders";
import ClosedTrades from "./closed-trades";

export type SelectedType =
  | "LiveTrade"
  | "LiveChart"
  | "TradeOrders"
  | "ClosedTrades"
  | null;

const page = () => {
  const [selected, setSelected] = useState<SelectedType>(null);

  return (
    <div className="w-full  text-text-light font-light overflow-scroll">
      {selected === null && <Main setSelected={setSelected} />}

      {selected === "LiveTrade" && <LiveTrade setSelected={setSelected} />}

      {selected === "LiveChart" && <LiveChart setSelected={setSelected} />}

      {selected === "TradeOrders" && <TradeOrders setSelected={setSelected} />}

      {selected === "ClosedTrades" && (
        <ClosedTrades setSelected={setSelected} />
      )}
    </div>
  );
};

export default page;
