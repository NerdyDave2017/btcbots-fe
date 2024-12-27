import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import OrdersTable from "./orders-table";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const TradeOrders = ({ setSelected }: Props) => {
  return (
    <div className="w-full pb-[48px] overflow-scroll">
      <Header text="Trade Orders" onClick={() => setSelected("LiveTrade")} />

      <div className="w-full px-5 lg:px-[48px] overflow-scroll">
        <OrdersTable />
      </div>
    </div>
  );
};

export default TradeOrders;
