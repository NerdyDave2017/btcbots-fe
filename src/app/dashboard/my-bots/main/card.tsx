import React, { useState } from "react";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import {
  DollarArrowIcon,
  DollarCircleIcon,
  CastIcon,
  InfoIcon,
} from "@/public/assets/icons";
import { motion } from "framer-motion";

type Props = {
  onClick: () => void;
};

const Card = ({ onClick }: Props) => {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled(!enabled);

  return (
    <div className="w-[350px] py-4 px-3 bg-[#eaf0f6] rounded-[32px] flex flex-col items-center gap-4">
      <div className="w-full flex items-center gap-4">
        <Image src={Bitcoin} className="w-12 h-12" alt="" />
        <p className="text-xl text-text-light font-normal">Bitcoin Bot</p>
        <div className="px-2.5 py-1.5 bg-main/20 rounded-[90px] justify-center items-center flex">
          <p className="text-main text-sm font-normal">CB001</p>
        </div>
      </div>

      <div className="w-full flex items-center  px-2 py-2 bg-[#c3dbf5] rounded-lg justify-center gap-6">
        <div className="flex flex-col items-center">
          <p className="text-text-light text-base font-normal mb-2 ">
            Deposit with
          </p>
          <div className="justify-start items-center gap-2 flex">
            <Image src={Bitcoin} className="w-8 h-8" alt="" />
            <p className="text-text-light text-base font-normal ">SOL</p>
          </div>
        </div>
        <div className="flex items-center translate-y-[14px]">
          <DollarCircleIcon />
          <DollarArrowIcon />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-text-light text-base font-normal mb-2 ">
            Profits with
          </p>
          <div className="justify-start items-center gap-2 flex">
            <Image src={Bitcoin} className="w-8 h-8" alt="" />
            <p className="text-text-light text-base font-normal ">SOL</p>
          </div>
        </div>
      </div>

      <div className="justify-center items-center gap-4 inline-flex">
        <p className="text-[#090909] text-base font-normal">Disabled</p>
        <div
          onClick={toggleSwitch}
          className={`w-[51px] h-[31px] p-0.5 bg-[#34c759] rounded-[100px] ${
            enabled ? "justify-end" : "justify-start"
          } items-center flex cursor-pointer`}
        >
          <motion.div
            layout
            transition={{
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.4,
            }}
            className="w-[27px] h-[27px] bg-white rounded-[100px] shadow"
          />
        </div>
        <p className="text-[#090909] text-base font-normal">Enabled</p>
      </div>

      <div className="w-full px-2 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <p className="text-[#3c3c43]/60 text-sm font-normal">
            Current Period ROI
          </p>
          <p className="text-[#14ae5c] text-base font-normal">₿0.00000256</p>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          <p className="text-[#3c3c43]/60 text-sm font-normal">
            Cumulative ROI
          </p>
          <p className="text-[#14ae5c] text-base font-normal">₿0.000256</p>
        </div>
      </div>

      <div className="w-full border border-[#E3E3E3]/50"></div>

      <div className="w-full flex-col justify-center items-start gap-1 inline-flex">
        <p className="text-right text-[#3c3c43]/60 text-sm font-normal">
          Exchange
        </p>

        <div className="px-4 py-2 bg-[#d9dde1] rounded-[90px] justify-start items-center gap-2 flex">
          <p className="text-[#090909] text-sm font-normal">Binance</p>
        </div>
      </div>

      <div className="w-full border border-[#E3E3E3]/50"></div>

      <div className="w-full px-4 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
          <p className="text-main text-base font-normal">Resume Bot</p>

          <InfoIcon />
        </div>
        <div className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
          <p className="text-main text-base font-normal">Force Stop Bot</p>
          <InfoIcon />
        </div>
        <div className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
          <p className="text-main text-base font-normal">Soft Stop Bot</p>
          <InfoIcon />
        </div>
        <div
          onClick={onClick}
          className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer"
        >
          <CastIcon />
          <p className="text-main text-base font-normal">Display Live data</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
