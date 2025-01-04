import { BotDeal } from "./fetchRequests";

const useModifyDealsData = (deals: BotDeal[]) => {
  const temp = [];

  for (let deal of deals) {
    const tableObj = {
      pair: deal.pair,
      profit: deal.actual_profit,
      volume: deal.bought_volume,
      status: deal.status,
      so: deal.completed_safety_orders_count,
      closedOn: deal.closed_at,
    };
    temp.push(tableObj);
  }

  return temp;
};

export default useModifyDealsData;
