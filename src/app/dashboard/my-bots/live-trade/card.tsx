import React from "react";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import { InfoIcon } from "@/public/assets/icons";
import { SelectedType } from "../page";

type Props = {
  setSelected: (value: SelectedType) => void;
};

const card = ({ setSelected }: Props) => {
  const data = [
    {
      title: "Completed safety orders",
      value: "6",
    },
    {
      title: "Bought average price",
      value: "59199.0",
    },
    {
      title: "Liquidation Price",
      value: "15870.0",
    },
    {
      title: "Created at",
      value: "2021-06-05 21:04:52 UTC",
    },
  ];

  return (
    <div className="w-full max-w-[350px] py-4 px-3 bg-[#eaf0f6] rounded-[32px] flex-col justify-start items-start gap-4 flex">
      <div className="flex items-center justify-start gap-4">
        <Image src={Bitcoin} className="w-12 h-12" alt="" />
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex items-center gap-4">
            <p className="text-xl text-text-light font-normal">Bitcoin Bot</p>
            <div className="px-2.5 py-1.5 bg-main/20 rounded-[90px] justify-center items-center flex">
              <p className="text-main text-sm font-normal">CB001</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-sm text-[#090909] font-normal">BTCUSD_BTC</p>
            <p className="text-sm text-[#e9362b] font-normal">Short</p>
            <InfoIcon className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-2 bg-[#c3dbf5] rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-[#3c3c43]/60 text-sm font-normal">
            Current Profit
          </p>
          <div className="text-[#3c3c43]/60 text-sm font-normal">Size</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="py-2 rounded justify-start items-center gap-2 inline-flex">
            <div className="flex-col justify-center items-start gap-2 inline-flex">
              <div className="text-[#090909] text-base font-normal">
                +0.058 SOL
              </div>
            </div>
          </div>
          <div className="py-2 rounded justify-start items-center gap-2 inline-flex">
            <div className="flex-col justify-center items-start gap-2 inline-flex">
              <div className="text-[#090909] text-base font-normal">
                {" "}
                20816 SOL
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-1 flex-col justify-start items-start gap-3 inline-flex">
        {data.map((item, index) => (
          <div
            key={index}
            className="self-stretch justify-between items-center inline-flex"
          >
            <p className="text-[#3c3c43]/60 text-sm font-normal">
              {item.title}
            </p>
            <p className="text-[#090909] text-base font-normal">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="w-full border border-[#E3E3E3]/50"></div>

      <div className="w-full px-4 flex-col justify-start items-center gap-2.5 inline-flex">
        <p
          onClick={() => setSelected("LiveChart")}
          className="text-[#006fe3] text-base font-normal cursor-pointer"
        >
          Open Live Chart
        </p>
        <p
          onClick={() => setSelected("TradeOrders")}
          className="text-[#006fe3] text-base font-normal cursor-pointer"
        >
          Trade Orders
        </p>
        <p
          onClick={() => setSelected("ClosedTrades")}
          className="text-[#006fe3] text-base font-normal cursor-pointer"
        >
          Closed trades statistics
        </p>
      </div>
    </div>
  );
};

export default card;
