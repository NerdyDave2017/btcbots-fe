import React from "react";
import { ArrowRight } from "@/public/assets/icons";

type Props = {
  text: string;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  size?: "base" | "lg";
};

const Button = ({
  text,
  arrow = false,
  className,
  onClick,
  size = "base",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className} relative bg-[#006fe3] rounded-full flex items-center justify-center px-[36px] text-text-dark gap-2.5 ${
        size === "base" ? "py-[12px]" : "py-[16px]"
      } `}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/[0] to-black/[0.5] rounded-full pointer-events-none"></span>
      <span className="w-full relative z-10 text-text-dark">{text}</span>
      {arrow && <ArrowRight className="relative z-10" />}
    </button>
  );
};

export default Button;
