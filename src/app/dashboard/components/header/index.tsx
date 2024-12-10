import React from "react";
import { ArrowRight } from "@/public/assets/icons";

type Props = {
  text: string;
  onClick?: () => void;
  showArrow?: boolean;
};

const Header = ({ text, onClick, showArrow = true }: Props) => {
  return (
    <div className="p-[48px] w-full relative">
      {showArrow && (
        <ArrowRight
          onClick={onClick}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      )}
      <p className="text-2xl font-normal text-center">{text}</p>
    </div>
  );
};

export default Header;
