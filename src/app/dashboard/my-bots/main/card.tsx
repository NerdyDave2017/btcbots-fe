import React, { useState } from "react";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt from "@/public/assets/icons/usdt.svg";
import Usdc from "@/public/assets/icons/usdc.svg";
import Usdt_Usdc from "@/public/assets/icons/usdt_usdc.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/app/components/tooltips";
import {
  DollarArrowIcon,
  DollarCircleIcon,
  CastIcon,
  InfoIcon,
} from "@/public/assets/icons";
import { motion } from "framer-motion";
import { BotData } from "@/src/hooks/fetchRequests";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import useDisclosure from "@/src/hooks/useDisclosure";
import { toast } from "sonner";
import { useUpdateBot } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";
import Modal from "@/src/app/components/modal";
import { BOT_INTENT } from "@/src/lib";
import Loader from "@/src/app/components/loader";

type Props = {
  data: BotData;
  onClick: () => void;
};

type DataValues = {
  [key: string]: {
    img: StaticImport;
    name: string;
  };
};

const Card = ({ data, onClick }: Props) => {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled(!enabled);

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

  const formatCurrencyDecimal = (value: string) => {
    switch (value) {
      case "usd":
        return 2;
      case "btc":
        return 6;
      case "eth":
        return 4;
      case "sol":
        return 3;
      default:
        return 2;
    }
  };

  const returnSymbol = (value: string) => {
    switch (value) {
      case "usd":
        return "$";
      case "btc":
        return "₿";
      case "eth":
        return "Ξ";
      case "sol":
        return "SOL";
      default:
        return "$";
    }
  };

  const { mutate: UpdateBot, isPending } = useUpdateBot();

  const { isOpen, onClose, onOpen, onToggle, setOpen } = useDisclosure();
  const {
    isOpen: isOpen1,
    onClose: onClose1,
    onOpen: onOpen1,
    onToggle: onToggle1,
    setOpen: setOpen1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onClose: onClose2,
    onOpen: onOpen2,
    onToggle: onToggle2,
    setOpen: setOpen2,
  } = useDisclosure();

  const updateBot = async (intent: string) => {
    // console.log("updating bot", item._id, intent);

    UpdateBot(
      { intent, bot_id: data._id },
      {
        onSuccess: () => {
          toast.success("Bot updated successfully");
        },
        onError: (error: Error) => {
          if (isAxiosError(error)) {
            console.log(error);
            toast.error(error.response?.data.message);
          } else {
            console.error(error);
            toast.error("An unexpected error occurred");
          }
        },
        onSettled: () => {
          onClose();
          onClose1();
          onClose2();
        },
      }
    );
  };

  return (
    <div className="w-[350px] break-inside-avoid mb-[8px] py-4 px-3 bg-[#eaf0f6] rounded-[32px] flex flex-col items-center gap-4">
      <div className="w-full flex items-center gap-4">
        <Image
          src={
            dataValues[
              data.depositCurrency.includes("usd")
                ? "usd"
                : data.depositCurrency
            ].img
          }
          className="w-12 h-12"
          alt=""
        />
        <p className="text-xl text-text-light font-normal">
          {
            dataValues[
              data.depositCurrency.includes("usd")
                ? "usd"
                : data.depositCurrency
            ].name
          }{" "}
          Bot
        </p>
        <div className="px-2.5 py-1.5 bg-main/20 rounded-[90px] justify-center items-center flex">
          <p className="text-main text-sm font-normal">{data.strategy}</p>
        </div>
      </div>

      <div className="w-full flex items-center  px-2 py-2 bg-[#c3dbf5] rounded-lg justify-center gap-6">
        <div className="flex flex-col items-center">
          <p className="text-text-light text-base font-normal mb-2 ">
            Deposit with
          </p>
          <div className="justify-start items-center gap-2 flex">
            <Image
              src={
                dataValues[
                  data.depositCurrency.includes("usd")
                    ? "usd"
                    : data.depositCurrency
                ].img
              }
              className="w-8 h-8"
              alt=""
            />
            <p className="text-text-light text-base font-normal ">
              {data.depositCurrency.includes("usd")
                ? "USD"
                : data.depositCurrency.toUpperCase()}
            </p>
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
            <Image
              src={
                dataValues[
                  data.profitCurrency.includes("usd")
                    ? "usd"
                    : data.profitCurrency
                ].img
              }
              className="w-8 h-8"
              alt=""
            />
            <p className="text-text-light text-base font-normal ">
              {data.profitCurrency.includes("usd")
                ? "USD"
                : data.profitCurrency.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      <div className="justify-center items-center gap-4 inline-flex">
        <p className="text-[#090909] text-base font-normal">Disabled</p>
        <div
          // onClick={toggleSwitch}
          className={`w-[51px] h-[31px] p-0.5  rounded-[100px] ${
            data.status === "ACTIVE"
              ? "justify-end bg-[#34c759]"
              : "justify-start bg-[#d9dde1]"
          } items-center flex`}
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
          <p className="text-[#14ae5c] text-base font-normal">
            {returnSymbol(
              data.profitCurrency.includes("usd") ? "usd" : data.profitCurrency
            )}{" "}
            {data.currentROI}
          </p>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          <p className="text-[#3c3c43]/60 text-sm font-normal">
            Cumulative ROI
          </p>
          <p className="text-[#14ae5c] text-base font-normal">
            ${" "}
            {data.cummulativeROI?.toFixed(
              formatCurrencyDecimal(
                data.profitCurrency.includes("usd")
                  ? "usd"
                  : data.profitCurrency
              )
            )}
          </p>
        </div>
      </div>

      <div className="w-full border border-[#E3E3E3]/50"></div>

      <div className="w-full flex-col justify-center items-start gap-1 inline-flex">
        <p className="text-right text-[#3c3c43]/60 text-sm font-normal">
          Exchange
        </p>

        <div className="px-4 py-2 bg-[#d9dde1] rounded-[90px] justify-start items-center gap-2 flex">
          <p className="text-[#090909] text-sm font-normal">{data.exchange}</p>
        </div>
      </div>

      <div className="w-full border border-[#E3E3E3]/50"></div>

      <TooltipProvider>
        <div className="w-full px-4 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
            <p
              onClick={() => {
                if (data.status === "ACTIVE") {
                  return;
                }
                return onOpen();
              }}
              className="text-main text-base font-normal"
            >
              Resume Bot
            </p>

            <Tooltip>
              <TooltipTrigger>
                <InfoIcon />
              </TooltipTrigger>
              <TooltipContent>
                <span className="">
                  This action will send us a request to activate your bot <br />
                  after being paused or stopped.
                </span>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
            <p
              onClick={() => {
                if (data.status !== "ACTIVE") {
                  return;
                }

                return onOpen2();
              }}
              className="text-main text-base font-normal"
            >
              Force Stop Bot
            </p>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon />
              </TooltipTrigger>
              <TooltipContent>
                <span className="">
                  This action will send us a request to cancel the current{" "}
                  <br />
                  deal immediately, even while incurring losses, and stop the{" "}
                  <br />
                  bot from opening new deals.
                </span>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
            <p
              onClick={() => {
                if (data.status !== "ACTIVE") {
                  return;
                }

                return onOpen1();
              }}
              className="text-main text-base font-normal"
            >
              Soft Stop Bot
            </p>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon />
              </TooltipTrigger>
              <TooltipContent>
                <span className="">
                  This action will send us a request for us to stop the bot{" "}
                  <br />
                  from opening a new deal as soon as the current deal closes.
                </span>
              </TooltipContent>
            </Tooltip>
          </div>
          <div
            onClick={onClick}
            className="self-stretch px-8 py-1 rounded-[90px] justify-center items-center gap-2.5 inline-flex cursor-pointer"
          >
            <CastIcon />
            <p className="text-main text-base font-normal">Display Live data</p>
          </div>
        </div>
      </TooltipProvider>

      <Modal
        closeModal={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
        onToggle={onToggle}
      >
        <div className="p-6 bg-[#eaf0f6] rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4 text-text-">
            Confirm bot resume request
          </h2>
          <p className="text-[#3c3c43]/60 mb-6">
            Are you sure you would like to send a request to resume your bot?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-4 border border-main rounded-full text-main"
            >
              Cancel
            </button>
            <button
              onClick={() => updateBot(BOT_INTENT.RESUME)}
              disabled={isPending}
              className="px-6 py-4 bg-main text-text-dark rounded-full"
            >
              {isPending ? <Loader /> : "Resume"}
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        closeModal={onClose1}
        isOpen={isOpen1}
        onOpen={onOpen1}
        onToggle={onToggle1}
      >
        <div className="p-6 bg-[#eaf0f6] rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4 text-text-">
            Confirm soft bot stop request
          </h2>
          <p className="text-[#3c3c43]/60 mb-6">
            Are you sure you would like to send a request to soft stop your bot?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose1}
              className="px-6 py-4 border border-main rounded-full text-main"
            >
              Cancel
            </button>
            <button
              onClick={() => updateBot(BOT_INTENT.SOFT_STOP)}
              disabled={isPending}
              className="px-6 py-4 bg-main text-text-dark rounded-full"
            >
              {isPending ? <Loader /> : "Soft stop"}
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        closeModal={onClose2}
        isOpen={isOpen2}
        onOpen={onOpen2}
        onToggle={onToggle2}
      >
        <div className=" p-6 bg-[#eaf0f6] rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4 text-text-">
            Confirm hard bot stop request
          </h2>
          <p className="text-[#3c3c43]/60 mb-6">
            Are you sure you would like to send a request to hard stop your bot?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose2}
              className="px-6 py-4 border border-main rounded-full text-main"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                updateBot(BOT_INTENT.HARD_STOP);
              }}
              disabled={isPending}
              className="px-6 py-4 bg-main text-text-dark rounded-full"
            >
              {isPending ? <Loader /> : "Hard stop"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
