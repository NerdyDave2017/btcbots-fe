import React from "react";
import { SelectedType } from "../page";
import Header from "../../components/header";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const LiveChart = ({ setSelected }: Props) => {
  return (
    <div className="w-full">
      <Header text="Live Chart" onClick={() => setSelected("LiveTrade")} />
    </div>
  );
};

export default LiveChart;
