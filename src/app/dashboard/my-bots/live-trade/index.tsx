import React from "react";
import Header from "../../components/header";
import { SelectedType } from "../page";
import Card from "./card";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const LiveTrade = ({ setSelected }: Props) => {
  return (
    <div className="w-full">
      <Header text="Live Trade" onClick={() => setSelected(null)} />
      <div className="w-full mx-auto px-[48px]">
        <Card />
      </div>
    </div>
  );
};

export default LiveTrade;
