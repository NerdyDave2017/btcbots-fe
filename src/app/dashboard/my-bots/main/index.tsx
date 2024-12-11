import React from "react";
import Header from "../../components/header";
import Card from "../components/card";

const Main = () => {
  return (
    <div className="">
      <Header text="All active bots" showArrow={false} />
      <div className="mx-[48px]">
        <Card />
      </div>
    </div>
  );
};

export default Main;
