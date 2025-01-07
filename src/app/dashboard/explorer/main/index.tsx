import React, { useEffect } from "react";
import { MultiDataIcon, HouseIcon } from "@/public/assets/icons";
import { CoinsType, ExchangesType, type SelectedType } from "../page";
import Header from "../../components/header";

type Props = {
  selected: SelectedType;
  setProfitCoin: (value: CoinsType) => void;
  setDepositCoin: (value: CoinsType) => void;
  setSelectedExchange: (value: ExchangesType) => void;
  setSelected: (value: SelectedType) => void;
};

const Main = ({
  setProfitCoin,
  setDepositCoin,
  setSelectedExchange,
  selected,
  setSelected,
}: Props) => {
  const options = [
    {
      key: "coin",
      icon: <MultiDataIcon />,
      title: "Trade your Desired Cryptocurrency",
      description:
        "Choose this option to select your preferred asset and profit target.",
    },
    {
      key: "exchange",
      icon: <HouseIcon />,
      title: "Trade on Top Exchanges",
      description:
        "Select this option to leverage our bots on leading cryptocurrency exchanges.",
    },
  ];

  useEffect(() => {
    setDepositCoin(null);
    setProfitCoin(null);
    setSelectedExchange(null);
  }, []);

  return (
    <div className="px-5">
      <Header
        text="Get Started: Choose Your Preferred Method"
        showArrow={false}
      />
      {/* <div className="w-full">
        <p className="text-2xl font-normal text-center">
          Get Started: Choose Your Preferred Method
        </p>
      </div> */}

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 xl:gap-[76px] ">
        {options.map((option) => (
          <div
            key={option.key}
            className={`w-full md:w-[366px] h-[237px] py-8 px-[18px] bg-[#eaf0f6] rounded-2xl flex-col justify-center items-start gap-6 inline-flex hover:border hover:border-main cursor-pointer border border-transparent box-border transition-all ease-in-out duration-200 ${
              selected === option.key && "border border-main"
            }`}
            onClick={() => setSelected(option.key as SelectedType)}
          >
            {option.icon}

            <div className="flex-col justify-start items-start gap-2 flex">
              <p className="text-base font-normal font-['Sora']">
                {option.title}
              </p>
              <p className="self-stretch text-sm md:text-base font-light font-['Sora']">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
