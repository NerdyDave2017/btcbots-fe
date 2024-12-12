import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const ClosedTrades = ({ setSelected }: Props) => {
  return (
    <div className="w-full">
      <Header
        text="Closed  trades statistics"
        onClick={() => setSelected("LiveTrade")}
      />
    </div>
  );
};

export default ClosedTrades;
