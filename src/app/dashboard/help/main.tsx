import React from "react";
import Header from "../components/header";
import { SelectedType } from "./page";
import {
  BookIcon,
  SpeakerIcon,
  MessageIcon,
  ComputerDollarIcon,
  HouseIcon,
  DataIcon,
  MyBotsIcon,
  ApiIcon,
} from "@/public/assets/icons";
import Button from "../../components/button";

type Props = {
  setSelected: (selected: SelectedType) => void;
};

const Main = ({ setSelected }: Props) => {
  const cardData = [
    {
      icon: <BookIcon className="w-8 h-8" />,
      title: "Knowledge Base",
      description:
        "Access detailed documentation about features, services, and common questions. Our comprehensive guides will help you navigate through cryptobots.io efficiently.",
      buttonText: "Browse Articles",
      onClick: () => setSelected("knowledgebase"),
    },
    {
      icon: <SpeakerIcon className="w-8 h-8" />,
      title: "FAQ",
      description:
        "Connect with our AI assistant or support team for immediate help. We're here 24/7 to assist you with any questions or technical issues.",
      buttonText: "Start Chat",
      onClick: () => setSelected("faq"),
    },
  ];

  const links = [
    {
      icon: <MessageIcon />,
      text: "Frequently Asked Questions",
    },
    {
      icon: <ComputerDollarIcon />,
      text: "Strategies",
    },
    {
      icon: <HouseIcon />,
      text: "Exchanges",
    },
    {
      icon: <DataIcon className="text-primary w-6 h-6" />,
      text: "Data Room",
    },
    {
      icon: <MyBotsIcon className="text-primary w-6 h-6" />,
      text: "Automated Trading",
    },
    {
      icon: <ApiIcon />,
      text: "API",
    },
  ];

  return (
    <div className="w-full">
      <Header
        text="Help"
        showArrow={false}
        description="Get the support you need through our comprehensive help resources"
      />

      <div className="px-[48px]">
        <div className="w-full flex justify-center items-center gap-8 flex-">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-[521px] h-[272px] py-8 bg-[#eaf0f6] rounded-2xl flex-col justify-center items-start gap-6 inline-flex"
            >
              <div className="self-stretch h-52 px-[18px] flex-col justify-start items-start gap-4 flex">
                {card.icon}
                <div className="self-stretch h-40 flex-col justify-start items-start gap-2 flex">
                  <p className="text-[#090909] text-base font-normal">
                    {card.title}
                  </p>
                  <p className="self-stretch text-[#090909] text-base font-light">
                    {card.description}
                  </p>
                </div>
                <Button text={card.buttonText} arrow onClick={card.onClick} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="mt-8 flex gap-8">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                {link.icon}
                <span className="text-[#090909] text-base font-light text-wrap">
                  {link.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
