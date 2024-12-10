import React from "react";
import { ArrowRight } from "@/public/assets/icons";
import { SelectedType } from "../page";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const Activate = ({ setSelected }: Props) => {
  return (
    <div className="w-full font-normal">
      <div className="w-full relative mb-[48px]">
        <ArrowRight
          onClick={() => setSelected(null)}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <p className="text-2xl font-normal text-center">
          Select Your Desired Strategy
        </p>
      </div>
    </div>
  );
};

export default Activate;
