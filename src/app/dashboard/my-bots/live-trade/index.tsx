import React from "react";
import Header from "../../components/header";
import { SelectedType } from "../page";
import Card from "./card";
import Events from "./events";
import { BotData, useFetchBotDeals } from "@/src/hooks/fetchRequests";
import LiveTradeCardSkeleton from "../components/live-trade-card-skeleton";
import LiveTradeEventSkeleton from "../components/live-trade-event-skeleton";

type Props = {
  activeBot: BotData | null;
  setSelected: (value: SelectedType) => void;
};

const LiveTrade = ({ activeBot, setSelected }: Props) => {
  const {
    data: BotDeals,
    isSuccess,
    isError,
    error,
    isLoading,
    isRefetching,
    refetch,
  } = useFetchBotDeals(activeBot!._id ?? "");

  console.log(BotDeals);

  return (
    <div className="w-full">
      <Header text="Live Trade" onClick={() => setSelected(null)} />
      <div className="w-full mx-auto px-5 lg:px-[48px] flex flex-col xl:flex-row  justify-center items-start gap-10">
        {(isLoading || isRefetching) && <LiveTradeCardSkeleton />}
        {!isLoading && !isRefetching && (
          <Card
            data={BotDeals?.latestDeal!}
            activeBot={activeBot}
            setSelected={setSelected}
          />
        )}

        {(isLoading || isRefetching) && <LiveTradeEventSkeleton />}

        {!isLoading && !isRefetching && <Events data={BotDeals?.latestDeal} />}
      </div>
    </div>
  );
};

export default LiveTrade;
