import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "@/public/static/charting_library/charting_library";
import dynamic from "next/dynamic";
import { BotData, BotDeal, useFetchBotDeals } from "@/src/hooks/fetchRequests";

type Props = {
  activeBot: BotData | null;
  setSelected: (value: SelectedType) => void;
};

const TVChartContainer = dynamic(
  () => import("./tv-chart-container").then((mod) => mod.TVChartContainer),
  { ssr: false }
);

const getSymbol = (from: string, to: string) => {
  to = to === "usd" ? "usdt" : to;
  from = from === "usd" ? "usdt" : from;
  to = from === to ? "usdt" : to;

  return `${from.toUpperCase()}/${to.toUpperCase()}`;
};

const LiveChart = ({ activeBot, setSelected }: Props) => {
  const { data, isSuccess, isError, error } = useFetchBotDeals(
    activeBot?._id ?? ""
  );

  const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
    symbol: getSymbol(
      activeBot?.depositCurrency.toLowerCase()!,
      activeBot?.depositCurrency.toLowerCase()!
    ),
    theme: "dark",
    interval: "1D" as ResolutionString,
    library_path: "/static/charting_library/",
    locale: "en",
    charts_storage_url: "https://saveload.tradingview.com",
    charts_storage_api_version: "1.1",
    client_id: "tradingview.com",
    user_id: "public_user_id",
    fullscreen: false,
    autosize: true,
    debug: true,
  };

  return (
    <div className="w-full pb-[48px]">
      <Header text="Live Chart" onClick={() => setSelected("LiveTrade")} />

      <div className="px-5 lg:px-[48px]">
        <TVChartContainer
          props={defaultWidgetProps}
          data={data?.latestDeal ? data?.latestDeal : ({} as BotDeal)}
          orders={data?.latestDealOrders ? data?.latestDealOrders : []}
        />
      </div>
    </div>
  );
};

export default LiveChart;
