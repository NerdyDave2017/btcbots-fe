import React from "react";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import {
  InfoIcon,
  DollarArrowIcon,
  DollarCircleIcon,
} from "@/public/assets/icons";
import Image from "next/image";
import Button from "@/src/app/components/button";
import { Strategy } from "@/src/types";
import { CardDetails } from "@/src/types/index";

type Props = {
  cardDetails: CardDetails;
  onClick: () => void;
};

const Card = ({ cardDetails, onClick }: Props) => {
  const echanges = [
    "Binance",
    "Kraken",
    "Coinbase",
    "Gemini",
    "OKX",
    "Binance.US",
    "Gate.io",
    "Bybit",
    "Bitget",
  ];

  const cardData = [
    {
      title: "Avg. Monthly Return",
      value: cardDetails.strategy.return,
    },
    {
      title: "Safety Net",
      value: cardDetails.strategy.safety_net,
    },
    {
      title: "Minimum Deposit",
      value: cardDetails.strategy.minimum_deposit,
    },
    {
      title: "Market Type",
      value: cardDetails.strategy.market_type,
    },
    {
      title: "Strategy Direction",
      value: cardDetails.strategy.direction,
    },
    {
      title: "Leverage Used",
      value: cardDetails.strategy.leverage,
    },
  ];

  return (
    <div className="w-[350px] break-inside-avoid">
      <div className="h-[115px] bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px]  py-6 px-4 break-inside-avoid flex items-center justify-start gap-4">
        <Image src={cardDetails.logo!} className="w-12 h-12" alt="" />
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex items-center gap-4">
            <p className="text-xl text-text-light font-normal">
              {cardDetails.bot} Bot
            </p>
            <div className="px-2.5 py-1.5 bg-main/20 rounded-[90px] justify-center items-center flex">
              <p className="text-main text-sm font-normal">
                {cardDetails.strategy.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-sm text-[#090909] font-normal flex-1">
              {cardDetails.strategy.market_type}
            </p>
            <div className="">
              {(cardDetails.strategy.direction.includes("LONG") ||
                cardDetails.strategy.direction.includes("BULL")) && (
                <span className="text-[#14ae5c] text-sm font-normal">
                  {cardDetails.strategy.direction.split("/")[0]}
                </span>
              )}
              {cardDetails.strategy.direction.includes("/") && (
                <span className="text-[#090909] text-sm font-normal"> / </span>
              )}
              {(cardDetails.strategy.direction.includes("SHORT") ||
                cardDetails.strategy.direction.includes("BEAR")) && (
                <span className="text-[#e9362b] text-sm font-normal">
                  {cardDetails.strategy.direction.includes("/")
                    ? cardDetails.strategy.direction.split("/")[1]
                    : cardDetails.strategy.direction}
                </span>
              )}
            </div>
            <InfoIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="py-4 px-4 bg-[#eaf0f6] rounded-bl-[32px] rounded-br-[32px] flex-col justify-start items-center gap-6 flex">
        {/* Section 1 */}
        <div className="w-full  items-center justify-between">
          <div className="flex items-center justify-between">
            <p className="text-[#090909] text-base font-normal mb-2 ">
              Deposit with
            </p>
            <div className="flex-1"></div>
            <p className="text-[#090909] text-base font-normal mb-2 flex-1">
              Profits with
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="px-4 py-2 bg-[#d0e0f1] rounded justify-start items-center gap-2 flex">
              <Image
                src={cardDetails.depositCurrencyImg}
                className="w-8 h-8"
                alt=""
              />
              <p className="text-[#090909] text-base font-normal ">SOL</p>
            </div>
            <div className="flex items-center">
              <DollarCircleIcon />
              <DollarArrowIcon />
            </div>
            <div className="px-4 py-2 bg-[#d0e0f1] rounded justify-start items-center gap-2 flex">
              <Image
                src={cardDetails.profitCurrencyImg}
                className="w-8 h-8"
                alt=""
              />
              <p className="text-[#090909] text-base font-normal ">SOL</p>
            </div>
          </div>
        </div>

        <div className="w-full border border-[#E3E3E3]/50"></div>

        <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="self-stretch justify-between items-start inline-flex"
            >
              <p className="text-[#3c3c43]/60 text-sm font-normal">
                {item.title}
              </p>
              {index === 4 ? (
                <div>
                  {(item.value.includes("LONG") ||
                    item.value.includes("BULL")) && (
                    <span className="text-[#14ae5c] text-base font-normal">
                      {item.value.split("/")[0]}
                    </span>
                  )}
                  {item.value.includes("/") && (
                    <span className="text-[#090909] text-base font-normal">
                      {" "}
                      /{" "}
                    </span>
                  )}
                  {(item.value.includes("SHORT") ||
                    item.value.includes("BEAR")) && (
                    <span className="text-[#e9362b] text-base font-normal">
                      {item.value.includes("/")
                        ? item.value.split("/")[1]
                        : item.value}
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-[#090909] text-base font-normal">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="w-full border border-[#E3E3E3]/50"></div>

        <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
          <p className="text-right text-[#3c3c43]/60 text-sm font-normal">
            Available Exchanges
          </p>
          <div className="self-stretch justify-start items-center gap-2 flex flex-wrap">
            {cardDetails.exchanges.map((exchange, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#d9dde1] rounded-[90px] justify-start items-center gap-2 flex"
              >
                <p className="text-[#090909] text-sm font-normal">{exchange}</p>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onClick}
          text="Activate Bots"
          className="w-full"
          size="lg"
        />

        <button className="w-full px-8 py-4 rounded-[90px] border border-[#006fe3] justify-center items-center gap-2.5 inline-flex text-[#006fe3] ">
          See Performance Data
        </button>
      </div>
    </div>
  );
};

export default Card;
