import React from "react";
import { SelectedType } from "./page";
import Header from "../components/header";
import { FolderIcon, ChevronDown } from "@/public/assets/icons";
import SearchBar from "./components/searchbar";

type Props = {
  setSelected: (selected: SelectedType) => void;
};

const KnowledgeBase = ({ setSelected }: Props) => {
  const QuickLinks = [
    "All about btcbots.us",
    "Step-by-step guide to get started",
    "Exchanges",
    "API Keys",
    "Data Room",
    "Trading etiquette, profit statistics, and billing.",
    "Affiliate program",
    "Legal",
  ];

  const CardData = [
    {
      icon: <FolderIcon className="w-8 h-8" />,
      title: "Frequently Asked Questions",
      description: "50 Articles",
    },
    {
      icon: <FolderIcon className="w-8 h-8" />,
      title: "Explore our Strategies",
      description: "13 Articles",
    },
    {
      icon: <FolderIcon className="w-8 h-8" />,
      title: "API Keys creation guides",
      description: "9 Articles",
    },
    {
      icon: <FolderIcon className="w-8 h-8" />,
      title: "Help",
      description: "11 Articles",
    },
    {
      icon: <FolderIcon className="w-8 h-8" />,
      title: "USDBOTS.COM",
      description: "1 Articles",
    },
  ];

  return (
    <div className="w-full">
      <Header
        text="Knowledge Base"
        showArrow
        onClick={() => setSelected("main")}
      />

      <SearchBar />

      <div className="w-full px-5 lg:px-[48px] mt-6">
        <div className="w-full grid grid-cols-2 gap-3 md:gap-8 mb-[48px]">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="w-full py-5 md:py-8 px-5 gap-3 bg-[#eaf0f6] rounded-2xl flex-col justify-center items-start inline-flex"
            >
              {card.icon}
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="text-[#090909] text-base font-normal ">
                  {card.title}
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-[#090909] text-sm font-light ">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <p className="text-[#090909] text-xl font-normal mb-[18px]">
            Quick Links
          </p>
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            {QuickLinks.map((link, index) => (
              <div className="flex gap-1 items-center" key={index}>
                <ChevronDown className="text-main  -rotate-90 justify-center items-center flex" />

                <div
                  key={index}
                  className="text-[#090909] text-base font-light cursor-pointer hover:text-main underline"
                >
                  {link}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
