import React from "react";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Ethereum from "@/public/assets/icons/ethereum.svg";
import Solana from "@/public/assets/icons/solana.svg";
import Usdt_Usdc from "@/public/assets/icons/usdt_usdc.svg";
import { BalanceType, SelectedType } from "../page";

type Props = {
  balance: Record<BalanceType, number>;
  setSelectedCoin: (value: BalanceType) => void;
  setSelected: (value: SelectedType) => void;
};

const Assets = ({ balance, setSelected, setSelectedCoin }: Props) => {
  const data = [
    {
      name: "Bitcoin",
      balance: `${balance.btc} BTC`,
      icon: <Image className="w-9 h-9" src={Bitcoin} alt="Bitcoin" />,
      coin: "btc",
    },
    {
      name: "Ethereum",
      balance: `${balance.eth} ETH`,
      icon: <Image className="w-9 h-9" src={Ethereum} alt="Ethereum" />,
      coin: "eth",
    },
    {
      name: "Solana",
      balance: `${balance.sol} SOL`,
      icon: <Image className="w-9 h-9" src={Solana} alt="Solana" />,
      coin: "sol",
    },
    {
      name: "USDT/USDC",
      balance: `${balance.usd} USD`,
      icon: <Image className="w-12 h-12" src={Usdt_Usdc} alt="USDT/USDC" />,
      coin: "usd",
    },
  ];

  return (
    <div className="w-full py-4 px-4 bg-[#eaf0f6] rounded-2xl flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-full flex items-center justify-between font-medium px-2 md:px-8">
        <p className="text-text-light flex-1">Asset</p>
        <p className="text-text-light flex-1 text-center">Available Balance</p>
        <p className="text-text-light flex-1"></p>
      </div>
      <div className="w-full overflow-scroll">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between gap-5 text-sm py-4 px-2 md:px-8 border-t border-[#E3E3E3] overflow-scroll"
          >
            <div className="flex items-center flex-1">{item.icon}</div>

            <p className="text-text-light flex-1 text-center font-light">
              {item.balance}
            </p>

            <div className="flex-1 flex justify-end items-center ">
              <button
                onClick={() => {
                  setSelectedCoin(item.coin as BalanceType);
                  setSelected("Withdraw");
                }}
                className="px-4 py-2 rounded-[90px] border border-[#006fe3] justify-center items-center gap-2.5 inline-flex"
              >
                <span className="text-[#006fe3] text-sm font-normal">
                  Withdraw
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
