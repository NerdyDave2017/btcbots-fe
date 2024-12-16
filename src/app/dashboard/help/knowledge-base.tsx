import React from "react";
import { SelectedType } from "./page";
import Header from "../components/header";
import { FolderIcon, SearchIcon, ChevronDown } from "@/public/assets/icons";
import Image from "next/image";
import flag from "@/public/assets/images/Circle.svg";

type Props = {
  setSelected: (selected: SelectedType) => void;
};

const KnowledgeBase = ({ setSelected }: Props) => {
  const QuickLinks = [
    "All about cryptobots.io",
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
      <div className="w-full px-[48px] py-4 bg-[#eaf0f6] justify-center items-center inline-flex relative">
        <div className="w-[510px] bg-[#dfeaf5] rounded-xl justify-between items-center inline-flex gap-2">
          <input
            className="text-[#3c3c43]/60 text-base font-normal bg-transparent px-4 py-3 w-full outline-none"
            placeholder="Search for an article"
          />

          <SearchIcon className="mr-4 cursor-pointer transition-all ease-in-out hover:scale-[1.1]" />
        </div>

        <div className="absolute h-[32px] border-[#bec9d5] border-[1px] px-[8px] py-[6px] flex items-center justify-between rounded cursor-pointer right-[48px]">
          <span className="h-full w-full">
            <Image src={flag} alt="Flag" />
          </span>
          <span className="">EN</span>
        </div>
      </div>

      <div className="w-full px-[48px] mt-6">
        <div className="w-full grid grid-cols-2 gap-8 mb-[48px]">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="w-full h-40 py-8 bg-[#eaf0f6] rounded-2xl flex-col justify-center items-start gap-6 inline-flex"
            >
              <div className="self-stretch h-24 px-[18px] flex-col justify-start items-start gap-4 flex">
                {card.icon}
                <div className="self-stretch h-12 flex-col justify-start items-start gap-2 flex">
                  <div className="text-[#090909] text-base font-normal font-['Sora']">
                    {card.title}
                  </div>
                  <div className="self-stretch h-5 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-[#090909] text-sm font-light font-['Sora']">
                      {card.description}
                    </div>
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
                <ChevronDown className="text-primary  -rotate-90 justify-center items-center flex" />

                <div
                  key={index}
                  className="text-[#090909] text-base font-light cursor-pointer hover:text-primary underline"
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
