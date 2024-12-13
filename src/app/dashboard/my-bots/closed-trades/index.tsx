import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";
import ClosedTradesTable from "./closed-trades-table";
import BarChartComponent from "./bar-chart";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const ClosedTrades = ({ setSelected }: Props) => {
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
        <ClosedTradesTable />
      </div>
    </div>
  );
};

export default ClosedTrades;
