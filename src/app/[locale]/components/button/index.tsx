import React from "react";
import { ArrowRight } from "@/public/assets/icons";
import Loader from "../loader";

type Props = {
  text: string;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  size?: "base" | "lg";
  loading?: boolean;
  disabled?: boolean;
};

const Button = ({
  text,
  arrow = false,
  className,
  onClick,
  size = "base",
  loading,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${className} relative bg-[#006fe3] rounded-full flex items-center justify-center px-[36px] text-text-dark gap-2.5 ${
        size === "base" ? "py-[12px] h-[47px]" : "py-[16px] h-[55px]"
      } `}
    >
      <span className="absolute inset-0 bg-gradient-to-b from-white/[0] to-black/[0.5] rounded-full pointer-events-none"></span>
      {loading && <Loader bg="bg-text-dark" />}
      {!loading && (
        <span className="w-full relative z-10 text-text-dark">{text}</span>
      )}
      {!loading && arrow && <ArrowRight className="relative z-10" />}
    </button>
  );
};

export default Button;
