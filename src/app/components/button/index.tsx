import React from "react";
import { ArrowRight } from "@/public/assets/icons";

type Props = {
  text: string;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button = ({ text, arrow = false, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className} relative bg-[#006fe3] rounded-full flex items-center justify-center px-[36px] py-[12px] `}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/[0] to-black/[0.5] rounded-full pointer-events-none"></span>
      <span className="w-full relative z-10">{text}</span>
      {arrow && <ArrowRight className="relative z-10" />}
    </button>
  );
};

export default Button;
