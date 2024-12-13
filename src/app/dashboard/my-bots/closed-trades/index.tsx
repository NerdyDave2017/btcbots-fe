import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import ClosedTradesTable from "./closed-trades-table";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const ClosedTrades = ({ setSelected }: Props) => {
  return (
    <div className="w-full pb-[48px]">
      <Header
        text="Closed  trades statistics"
        onClick={() => setSelected("LiveTrade")}
      />

      <div className="px-[48px]">
        <ClosedTradesTable />
      </div>
    </div>
  );
};

export default ClosedTrades;
