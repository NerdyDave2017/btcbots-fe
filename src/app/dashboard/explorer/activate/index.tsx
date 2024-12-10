import React from "react";
import { ArrowRight } from "@/public/assets/icons";
import { ExchangesType, SelectedType } from "../page";
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
import Input from "@/src/app/components/input";
import Link from "next/link";
import SelectExchange from "../components/select-exchange";

type Props = {
  setSelected: (value: SelectedType) => void;
  setSelectedExchange: (value: ExchangesType) => void;
  selectedExchange: ExchangesType;
};

const Activate = ({
  setSelected,
  setSelectedExchange,
  selectedExchange,
}: Props) => {
  const cardData = [
    {
      title: "Avg. Monthly Return",
      value: "4%+",
    },
    {
      title: "Safety Net",
      value: "-40% to -50%",
    },
    {
      title: "Minimum Deposit",
      value: "$10,000",
    },
    {
      title: "Market Type",
      value: "Inverse Derivation",
    },
    {
      title: "Strategy Direction",
      value: "Long / Short",
    },
    {
      title: "Leverage Used",
      value: "1x to 1.5x",
    },
  ];

  return (
    <div className="w-full font-normal">
      <div className=" px-[48px] w-full relative mb-[48px]">
        <ArrowRight
          onClick={() => setSelected("strategy")}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <p className="text-2xl font-normal text-center">Activate your bot</p>
      </div>

      <div className="w-full px-[48px] flex justify-center gap-[48px]">
        <div className="w-full max-w-[550px]">
          <div className="w-full">
            <div className="bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px]  py-6 px-4 break-inside-avoid flex items-center justify-start gap-4">
              <Image src={Bitcoin} className="w-12 h-12" alt="" />
              <div className="flex flex-col items-start justify-center gap-3">
                <div className="flex items-center gap-4">
                  <p className="text-xl text-text-light font-normal">
                    Bitcoin Bot
                  </p>
                  <div className="px-2.5 py-1.5 bg-primary/20 rounded-[90px] justify-center items-center flex">
                    <p className="text-primary text-sm font-normal">CB001</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-sm text-text-light font-normal">Spot</p>
                  <p className="text-sm text-[#e9362b] font-normal">Short</p>
                  <InfoIcon className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="py-4 px-4 bg-[#eaf0f6] rounded-bl-[32px] rounded-br-[32px] flex-col justify-start items-center gap-6 flex">
              {/* Section 1 */}
              <div className="w-full flex items-center justify-between">
                <div className="">
                  <p className="text-text-light text-base font-normal mb-2 ">
                    Deposit with
                  </p>
                  <div className="px-4 py-2 bg-[#d0e0f1] rounded justify-start items-center gap-2 flex">
                    <Image src={Bitcoin} className="w-8 h-8" alt="" />
                    <p className="text-text-light text-base font-normal ">
                      SOL
                    </p>
                  </div>
                </div>
                <div className="flex items-center translate-y-[14px]">
                  <DollarCircleIcon />
                  <DollarArrowIcon />
                </div>

                <div className="">
                  <p className="text-text-light text-base font-normal mb-2 ">
                    Profits with
                  </p>
                  <div className="px-4 py-2 bg-[#d0e0f1] rounded justify-start items-center gap-2 flex">
                    <Image src={Bitcoin} className="w-8 h-8" alt="" />
                    <p className="text-text-light text-base font-normal ">
                      SOL
                    </p>
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
                        {item.value.includes("Long") && (
                          <span className="text-[#14ae5c] text-base font-normal">
                            Long
                          </span>
                        )}
                        {item.value.includes("/") && (
                          <span className="text-text-light text-base font-normal">
                            {" "}
                            /{" "}
                          </span>
                        )}
                        {item.value.includes("Short") && (
                          <span className="text-[#e9362b] text-base font-normal">
                            Short
                          </span>
                        )}
                      </div>
                    ) : (
                      <p className="text-text-light text-base font-normal">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full py-4 bg-[#eaf0f6] rounded-[32px] flex items-center justify-center gap-6 mt-6 ">
            <div className="w-full h-14 px-4 flex-col justify-center items-start gap-1 flex">
              <p className="text-right text-[#3c3c43]/60 text-sm font-normal">
                Selected Exchange
              </p>
              <div className="w-full justify-start items-center gap-2 inline-flex">
                <div className="px-4 py-2 bg-[#d9dde1] rounded-[90px] justify-start items-center gap-2 flex">
                  <p className="text-text-light text-sm font-normal">Binance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <SelectExchange
              setSelectedExchange={setSelectedExchange}
              selectedExchange={selectedExchange}
            />
          </div>

          <div className="w-[500px] mt-[40px]">
            <span className="text-text-light text-xl font-normal">
              IMPORTANT INFORMATION ABOUT THIS STRATEGY
              <br />
            </span>
            <ol className="text-text-light text-base font-light leading-normal list-disc pl-5">
              <li>
                Funds: Verify that your account has the minimum required funds
                before sending API keys.
              </li>
              <li>
                API Key Permissions: Double-check that all permissions on the
                API keys are correctly set.
              </li>
              <li>
                Correct Wallet: Ensure funds are in the correct wallet within
                the exchange.
              </li>
              <li>
                Automatic Detection: The system automatically detects newly
                deposited base assets and starts trading. No notification to us
                is necessary.
              </li>
              <li>
                Trailing Sell Orders: Absence of visible sell orders may be due
                to trailing sell functionality.
              </li>
              <li>
                Bot Operation: Bots are considered operational when there are
                active orders. If you don't see any active orders, please
                contact support. Note: There's a cooldown period of
                approximately 20 minutes between trades.
              </li>
              <li>
                For spot strategies, do not withdraw or convert the quoted
                asset. Example: If you are profiting in USD by trading against
                BTC, then your quoted asset would be BTC. Please do not withdraw
                the BTC from your balance.
              </li>
              <li>
                Monitor your profits via Cryptobots.io app dashboard and your
                exchange's order history.
              </li>
              <li>
                For derivatives, partial withdrawals above 5% are not
                recommended without stopping the system first. Request a bot
                stop before making large partial withdrawals.
              </li>
              <li>
                Acceptable Partial Withdrawals: Partial withdrawals below 5% are
                acceptable without notification or system halt.
              </li>
              <li>
                Full Withdrawals: We recommend only making full withdrawals
                after stopping the bot.
              </li>
            </ol>
          </div>
        </div>

        <div className="w-full max-w-[550px] flex flex-col gap-8">
          <Input label="API Key" icon="text" setValue={() => {}} value="" />

          <div className="w-full">
            <Input
              label="Secret Phrase"
              icon="text"
              setValue={() => {}}
              value=""
            />
            <Link href="">
              <p className="text-right text-[#006fe3] text-sm font-normal underline mt-4">
                how to create api keys?
              </p>
            </Link>
          </div>

          <div className="h-[18px] justify-start items-center gap-2 inline-flex">
            <input
              type="checkbox"
              className="w-3.5 h-[12.76px] bg-[#d9d9d9] rounded-[3.15px]"
            />
            <div className="text-right text-[#3c3c43]/60 text-sm font-normal">
              Read our terms of service carefully.
            </div>
          </div>

          <div className="w-full rounded-[32px] flex-col justify-start items-start  py-4 bg-[#eaf0f6] gap-6 flex">
            <div className="self-stretch h-[88px] px-4 flex-col justify-center items-start gap-1 flex">
              <p className="text-right text-text-light text-sm font-normal leading-[21px]">
                Risk Disclosure
              </p>
              <div className="self-stretch">
                <span className="text-text-light text-sm font-light leading-[21px]">
                  Before activating this automated trading strategy, it is
                  crucial that you understand and acknowledge the inherent risks
                  associated with cryptocurrency trading and autom...
                </span>
                <span className="text-[#006fe3] text-sm font-normal leading-[21px]">
                  Show More{" "}
                </span>
              </div>
            </div>
          </div>

          <Button
            text="Activate Bot"
            onClick={() => setSelected(null)}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Activate;
