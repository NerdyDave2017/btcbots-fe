import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import OrdersTable from "./orders-table";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const TradeOrders = ({ setSelected }: Props) => {
  return (
    <div className="w-full pb-[48px]">
      <Header text="Trade Orders" onClick={() => setSelected("LiveTrade")} />

      <div className="px-[48px]">
        <OrdersTable />
      </div>
    </div>
  );
};

export default TradeOrders;
