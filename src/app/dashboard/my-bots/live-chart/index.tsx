import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import { TVChartContainer } from "./tv-chart-container";
import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "@/public/static/charting_library/charting_library";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
  symbol: "BTCUSD",
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

const LiveChart = ({ setSelected }: Props) => {
  return (
    <div className="w-full pb-[48px]">
      <Header text="Live Chart" onClick={() => setSelected("LiveTrade")} />

      <div className="px-[48px]">
        <TVChartContainer props={defaultWidgetProps} data={{}} orders={[]} />
      </div>
    </div>
  );
};

export default LiveChart;
