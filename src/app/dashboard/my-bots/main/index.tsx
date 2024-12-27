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
      <div className="columns-1 md:columns-2 xl:columns-3 justify-items-center w-[350px] md:w-[700px] xl:w-[1070px] mx-auto">
        <Card onClick={() => setSelected("LiveTrade")} />
        <Card onClick={() => setSelected("LiveTrade")} />
        <Card onClick={() => setSelected("LiveTrade")} />
      </div>
    </div>
  );
};

export default Main;
