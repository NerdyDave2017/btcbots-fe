import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import OrdersTable from "./orders-table";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const TradeOrders = ({ setSelected }: Props) => {
  return (
    <div className="">
      <Header text="Trade Orders" onClick={() => setSelected("LiveTrade")} />

      <OrdersTable />
    </div>
  );
};

export default TradeOrders;
