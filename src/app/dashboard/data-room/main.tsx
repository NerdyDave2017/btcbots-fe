import React from "react";
import { ArrowRight, SearchIcon, SettingsIcon } from "@/public/assets/icons";
import { SelectedType } from "./page";
import Link from "next/link";
import Card from "./components/card";
import Header from "../components/header";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const Main = ({ setSelected }: Props) => {
  const nav = ["Data Room", "FAQ", "Help", "Knowledge Base"];

  return (
    <div className="w-full font-normal overflow-scroll pb-[48px]">
      <Header text="Data Room" showArrow={false} />

      <div className="w-full px-[48px] py-4 bg-[#eaf0f6] justify-between items-center inline-flex">
        <div className="justify-start items-center gap-6 inline-flex">
          {nav.map((item) => (
            <Link
              href=""
              key={item}
              className="text-primary text-lg font-normal"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="w-[289px] bg-[#dfeaf5] rounded-xl justify-between items-center inline-flex gap-2">
            <input
              className="text-[#3c3c43]/60 text-base font-normal bg-transparent px-4 py-3 w-full outline-none"
              placeholder="Search for a bot"
            />

            <SearchIcon className="mr-4 cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
          </div>

          <div className="px-4 py-3 bg-[#dfeaf5] rounded-xl justify-center items-center inline-flex">
            <SettingsIcon className="cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
          </div>
        </div>
      </div>

      <div className="columns-3 justify-items-center w-[1070px] m-auto mt-6">
        {/* {data.map((item, index) => ( */}
        <Card onClick={() => setSelected("Performance")} />
        <Card onClick={() => setSelected("Performance")} />
        <Card onClick={() => setSelected("Performance")} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Main;
