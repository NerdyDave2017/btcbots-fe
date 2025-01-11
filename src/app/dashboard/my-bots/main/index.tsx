import React from "react";
import Header from "../../components/header";
import Card from "./card";
import { SelectedType } from "../page";
import { useFetchBots, useFetchUser } from "@/src/hooks/fetchRequests";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const Main = ({ setSelected }: Props) => {
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useFetchUser();
  const {
    data: bots,
    error: botError,
    isLoading: botIsLoading,
  } = useFetchBots(user?._id! ?? "");

  console.log(bots);

  return (
    <div className="w-full">
      <Header text="All active bots" showArrow={false} />
      <div className="columns-1 md:columns-2 xl:columns-3 justify-items-center w-[350px] md:w-[700px] xl:w-[1070px] mx-auto">
        {bots?.map((item, index) => (
          <Card
            key={index}
            data={item}
            onClick={() => setSelected("LiveTrade")}
          />
        ))}

        {/* <Card onClick={() => setSelected("LiveTrade")} />
        <Card onClick={() => setSelected("LiveTrade")} />
        <Card onClick={() => setSelected("LiveTrade")} /> */}
      </div>
    </div>
  );
};

export default Main;
