import React from "react";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import Usdt_Usdc from "@/public/assets/icons/usdt_usdc.svg";
import { InfoIcon } from "@/public/assets/icons";
import { SelectedType } from "../page";
import { BotDeal } from "../closed-trades/closed-trades-table";
import { BotData } from "@/src/hooks/fetchRequests";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { formatCurrencyDecimal, formatDate } from "@/src/lib";

type Props = {
  activeBot: BotData | null;
  data: BotDeal;
  setSelected: (value: SelectedType) => void;
};

type DataValues = {
  [key: string]: {
    img: StaticImport;
    name: string;
  };
};

const card = ({ data, activeBot, setSelected }: Props) => {
  const dataExtract = [
    {
      title: "Completed safety orders",
      value: data?.completed_safety_orders_count,
    },
    {
      title: "Bought average price",
      value: `${Number(data?.bought_average_price).toFixed(
        formatCurrencyDecimal(data?.to_currency.toLowerCase())
      )} ${data?.to_currency}`,
    },
    {
      title: "Liquidation Price",
      value: `${
        Number(data?.last_known_position_info?.liquidation_price ?? 0).toFixed(
          formatCurrencyDecimal(data?.from_currency.toLowerCase())
        ) ?? 0
      } ${data?.from_currency}`,
    },
    {
      title: "Created at",
      value: formatDate(data?.created_at, "MMM DD, YYYY. h:mm a"),
    },
  ];

  const dataValues: DataValues = {
    btc: {
      img: Bitcoin,
      name: "Bitcoin",
    },
    eth: {
      img: Ethereum,
      name: "Ethereum",
    },
    sol: {
      img: Solana,
      name: "Solana",
    },
    usd: {
      img: Usdt_Usdc,
      name: "USD",
    },
  };

  return (
    <div className="w-full max-w-[350px] py-4 px-3 bg-[#eaf0f6] rounded-[32px] flex-col justify-start items-start gap-4 flex">
      <div className="flex items-center justify-start gap-4">
        <Image
          src={
            dataValues[
              activeBot!.depositCurrency.includes("usd")
                ? "usd"
                : activeBot!.depositCurrency
            ].img
          }
          className="w-12 h-12"
          alt=""
        />
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex items-center gap-4">
            <p className="text-xl text-text-light font-normal">
              {
                dataValues[
                  activeBot!.depositCurrency.includes("usd")
                    ? "usd"
                    : activeBot!.depositCurrency
                ].name
              }{" "}
              Bot
            </p>
            <div className="px-2.5 py-1.5 bg-main/20 rounded-[90px] justify-center items-center flex">
              <p className="text-main text-sm font-normal">
                {activeBot?.strategy}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-sm text-[#090909] font-normal">{data.pair}</p>
            <p className="text-sm text-[#e9362b] font-normal">
              {data?.strategy.charAt(0).toUpperCase() + data?.strategy.slice(1)}
            </p>
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
                {Number(data?.actual_profit) > 0
                  ? `${Number(data?.actual_profit).toFixed(
                      formatCurrencyDecimal(data?.from_currency.toLowerCase())
                    )} ${data?.from_currency}`
                  : "0"}
              </div>
            </div>
          </div>
          <div className="py-2 rounded justify-start items-center gap-2 inline-flex">
            <div className="flex-col justify-center items-start gap-2 inline-flex">
              <div className="text-[#090909] text-base font-normal">
                {" "}
                {`${data?.bought_amount}  ${data?.to_currency}`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-1 flex-col justify-start items-start gap-3 inline-flex">
        {dataExtract.map((item, index) => (
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
