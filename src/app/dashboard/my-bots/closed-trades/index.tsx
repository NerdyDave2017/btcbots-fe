import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import ClosedTradesTable from "./closed-trades-table";
import BarChartComponent from "./bar-chart";
import { BotData, BotDeal, useFetchBotDeals } from "@/src/hooks/fetchRequests";

type Props = {
  activeBot: BotData | null;
  setSelected: (value: SelectedType) => void;
};

const ClosedTrades = ({ activeBot, setSelected }: Props) => {
  const {
    data: BotDeals,
    isSuccess,
    isError,
    error,
    isLoading,
    isRefetching,
    refetch,
  } = useFetchBotDeals(activeBot!._id ?? "");

  return (
    <div className="w-full h-full pb-[48px]">
      <Header
        text="Closed  trades statistics"
        onClick={() => setSelected("LiveTrade")}
      />

      <div className="w-full h-full px-[48px]">
        <div className=" bg-[#eaf0f6] rounded-2xl w-[50%] py-8 px-6 mb-6">
          <BarChartComponent />
        </div>
        <ClosedTradesTable
          data={
            BotDeals?.deals.filter(
              (item) => item.status === "completed"
            ) as BotDeal[]
          }
        />
      </div>
    </div>
  );
};

export default ClosedTrades;
