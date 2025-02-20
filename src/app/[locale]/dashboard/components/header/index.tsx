import React from "react";
import { ArrowRight } from "@/public/assets/icons";

type Props = {
  text: string;
  description?: React.ReactNode;
  onClick?: () => void;
  showArrow?: boolean;
};

const Header = ({ text, description, onClick, showArrow = true }: Props) => {
  return (
    <div className="p-5 lg:p-[48px] w-full relative">
      {showArrow && (
        <ArrowRight
          onClick={onClick}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      )}
      <div className="w-full flex flex-col gap-3 items-center">
        <p className="text-xl md:text-2xl font-normal text-center">{text}</p>
        {description && (
          <p className="text-sm lg:text-base font-light text-center text-text-light">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
