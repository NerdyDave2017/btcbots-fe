import React, { useState } from "react";
import { ArrowRight } from "@/public/assets/icons";
import { CoinsType, ExchangesType, SelectedType } from "../page";
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
import Header from "../../components/header";
import { CardDetails } from "@/src/types";
import Strategy from "../strategy/index";
import { useCreateBot } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

type Props = {
  strategy: CardDetails;
  depositCoin: CoinsType;
  profitCoin: CoinsType;
  setSelected: (value: SelectedType) => void;
  setSelectedExchange: (value: ExchangesType) => void;
  selectedExchange: ExchangesType;
};

const Activate = ({
  strategy,
  depositCoin,
  profitCoin,
  setSelected,
  setSelectedExchange,
  selectedExchange,
}: Props) => {
  const cardData = [
    {
      title: "Avg. Monthly Return",
      value: strategy.strategy.return,
    },
    {
      title: "Safety Net",
      value: strategy.strategy.safety_net,
    },
    {
      title: "Minimum Deposit",
      value: strategy.strategy.minimum_deposit,
    },
    {
      title: "Market Type",
      value: strategy.strategy.market_type,
    },
    {
      title: "Strategy Direction",
      value: strategy.strategy.direction,
    },
    {
      title: "Leverage Used",
      value: strategy.strategy.leverage,
    },
  ];

  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [apiPassphrase, setApiPassphrase] = useState("");
  const [agree, setAgree] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate: CreateBot, isPending } = useCreateBot();

  const checkCoin = (coin: string) => {
    if (!coin) return "";
    if (coin.includes("usd")) return "usdt";
    return coin;
  };

  const activateBot = async () => {
    CreateBot(
      {
        strategy: strategy.strategy.name,
        profitCurrency:
          checkCoin(profitCoin!) || checkCoin(strategy.strategy.profit_coin),
        depositCurrency:
          checkCoin(depositCoin!) || checkCoin(strategy.strategy.deposit_coin),
        exchange: selectedExchange!,
        apiKey,
        apiSecret,
        apiPassphrase,
      },
      {
        onSuccess: (res) => {
          toast.success(res.message, {
            position: "top-center",
          });
          router.push("/dashboard/my-bots");
        },
        onError: (error) => {
          if (isAxiosError(error)) {
            toast.error(error.response?.data.message, {
              position: "top-center",
            });
          } else {
            toast.error("An unexpected error occurred", {
              position: "top-center",
            });
          }
        },
      }
    );
  };

  const handleValidation = () => {
    toast.info("Handle Validation");
    console.log("got Here");
    if (!selectedExchange) {
      console.log("APi got Here");
      console.error("Please select an exchange network");
      toast.error("Please select an exchange network", {
        position: "top-center",
      });

      console.log("After toast");
      return;
    }

    console.log("API got Here 1");

    if (!apiKey) {
      console.log("APi got Here");
      toast.error("Please select an exchange network");
      toast.error("Api key required", {
        position: "top-center",
      });
      return;
    }

    if (!apiSecret) {
      toast.error("Api secret required", {
        position: "top-center",
      });
      return;
    }

    if ([, "okx", "bitget"].includes(selectedExchange) && !apiPassphrase) {
      toast.error("Passphrase is required.", {
        position: "top-center",
      });
      return;
    }

    if (!agree) {
      toast.error(
        "Please read carefully & agree to our terms of service below.",
        {
          position: "top-center",
        }
      );
      return;
    }

    activateBot();
  };

  return (
    <div className="w-full font-normal mb-[48px]">
      <Header
        text="Activate your bot"
        showArrow={true}
        onClick={() => setSelected("strategy")}
      />

      {/* <div className=" px-[48px] w-full relative mb-[48px]">
        <ArrowRight
          onClick={() => setSelected("strategy")}
          className="absolute rotate-180 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <p className="text-2xl font-normal text-center">Activate your bot</p>
      </div> */}

      <div className="w-full px-5 lg:px-[48px] flex flex-col lg:flex-row justify-center gap-[48px]">
        <div className="w-full">
          <div className="w-full">
            <div className="bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px]  py-6 px-4 break-inside-avoid flex items-center justify-start gap-4">
              <Image
                src={strategy.depositCurrencyImg}
                className="w-12 h-12"
                alt=""
              />
              <div className="flex flex-col items-start justify-center gap-3">
                <div className="flex items-center gap-4">
                  <p className="text-xl text-text-light font-normal">
                    {strategy.bot}
                  </p>
                  <div className="px-2.5 py-1.5 bg-main/20 rounded-[90px] justify-center items-center flex">
                    <p className="text-main text-sm font-normal">
                      {strategy.strategy.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-sm text-text-light font-normal flex-1">
                    {strategy.strategy.market_type}
                  </p>
                  <div className="">
                    {(strategy.strategy.direction.includes("LONG") ||
                      strategy.strategy.direction.includes("BULL")) && (
                      <span className="text-[#14ae5c] text-sm font-normal">
                        {strategy.strategy.direction.split("/")[0]}
                      </span>
                    )}
                    {strategy.strategy.direction.includes("/") && (
                      <span className="text-[#090909] text-sm font-normal">
                        {" "}
                        /{" "}
                      </span>
                    )}
                    {(strategy.strategy.direction.includes("SHORT") ||
                      strategy.strategy.direction.includes("BEAR")) && (
                      <span className="text-[#e9362b] text-sm font-normal">
                        {strategy.strategy.direction.includes("/")
                          ? strategy.strategy.direction.split("/")[1]
                          : strategy.strategy.direction}
                      </span>
                    )}
                  </div>
                  <InfoIcon className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="py-4 px-4 bg-[#eaf0f6] rounded-bl-[32px] rounded-br-[32px] flex-col justify-start items-center gap-6 flex">
              <div className="w-full flex items-center justify-between">
                <div className="">
                  <p className="text-text-light text-base font-normal mb-2 ">
                    Deposit with
                  </p>
                  <div className="px-4 py-2 bg-[#d0e0f1] rounded justify-start items-center gap-2 flex">
                    <Image
                      src={strategy.depositCurrencyImg}
                      className="w-8 h-8"
                      alt=""
                    />
                    <p className="text-text-light text-base font-normal ">
                      {strategy.strategy.deposit_coin.toUpperCase()}
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
                    <Image
                      src={strategy.profitCurrencyImg}
                      className="w-8 h-8"
                      alt=""
                    />
                    <p className="text-text-light text-base font-normal ">
                      {strategy.strategy.profit_coin.toUpperCase()}
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
                        {(item.value.includes("LONG") ||
                          item.value.includes("BULL")) && (
                          <span className="text-[#14ae5c] text-sm font-normal">
                            {item.value.split("/")[0]}
                          </span>
                        )}
                        {item.value.includes("/") && (
                          <span className="text-[#090909] text-sm font-normal">
                            {" "}
                            /{" "}
                          </span>
                        )}
                        {(item.value.includes("SHORT") ||
                          item.value.includes("BEAR")) && (
                          <span className="text-[#e9362b] text-sm font-normal">
                            {item.value.includes("/")
                              ? item.value.split("/")[1]
                              : item.value}
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
              {selectedExchange && (
                <div className="w-full justify-start items-center gap-2 inline-flex">
                  <div className="px-4 py-2 bg-[#d9dde1] rounded-[90px] justify-start items-center gap-2 flex">
                    <p className="text-text-light text-sm font-normal">
                      {selectedExchange}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <SelectExchange
              setSelectedExchange={setSelectedExchange}
              selectedExchange={selectedExchange}
            />
          </div>
          <div className="w-full max-w-[500px] mt-[40px] mb-[48px]">
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

        <div className="w-full flex flex-col gap-8">
          <Input
            label="API Key"
            icon="text"
            setValue={setApiKey}
            value={apiKey}
          />
          {["OKX", "Bitget"].includes(selectedExchange!) && (
            <Input
              label="Passphrase"
              icon="text"
              setValue={setApiPassphrase}
              value={apiPassphrase}
            />
          )}

          <div className="w-full">
            <Input
              label="Secret Phrase"
              icon="text"
              setValue={setApiSecret}
              value={apiSecret}
            />
            <Link href="">
              <p className="text-right text-[#006fe3] text-sm font-normal underline mt-4">
                how to create api keys?
              </p>
            </Link>
          </div>

          <div className="h-[18px] justify-start items-center gap-2 inline-flex">
            <input
              onChange={() => setAgree(!agree)}
              type="checkbox"
              className="w-3.5 h-[12.76px] bg-[#d9d9d9] rounded-[3.15px]"
              checked={agree}
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
            onClick={handleValidation}
            size="lg"
            loading={isPending}
          />
        </div>
      </div>
    </div>
  );
};

export default Activate;
