import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import OrdersTable from "./orders-table";
import { BotData, useFetchBotDeals } from "@/src/hooks/fetchRequests";

type Props = {
  activeBot: BotData | null;
  setSelected: (value: SelectedType) => void;
};

const TradeOrders = ({ activeBot, setSelected }: Props) => {
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
    <div className="w-full pb-[48px] overflow-scroll">
      <Header text="Trade Orders" onClick={() => setSelected("LiveTrade")} />

      <div className="w-full px-5 lg:px-[48px] overflow-scroll">
        <OrdersTable data={BotDeals?.latestDealOrders!} />
      </div>
    </div>
  );
};

export default TradeOrders;
