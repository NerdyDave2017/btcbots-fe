import React from "react";
import Header from "../../components/header";
import Card from "./card";
import { SelectedType } from "../page";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const Main = ({ setSelected }: Props) => {
  return (
    <div className="w-full">
      <Header text="All active bots" showArrow={false} />
      <div className="grid grid-cols-3 justify-items-center w-[1070px] gap-4 mx-auto">
        <Card onClick={() => setSelected("LiveTrade")} />
        <Card onClick={() => setSelected("LiveTrade")} />
        <Card onClick={() => setSelected("LiveTrade")} />
      </div>
    </div>
  );
};

export default Main;
