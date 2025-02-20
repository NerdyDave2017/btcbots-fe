import React from "react";
import Container from "../../components/container";
import Slider from "./slider";
import { SleepDollar, Discount, MoneyNotFound } from "@/public/assets/icons";
import { useTranslations } from "next-intl";

const Exchanges = () => {
  const t = useTranslations("Exchanges");

  return (
    <div className="bg-[#F4F6F8] text-text-light py-[70px]">
      <Container>
        <p className="text-base md:text-xl xl:text-2xl text-center mb-[24px]">
          {t("0")}
        </p>

        <div className="mb-10">
          <Slider />
        </div>

        <div className="w-full flex flex-col md:flex-row  items-center justify-center gap-[40px]">
          <div className="w-[284px] h-[221px] md:h-[287px] bg-[#e8f0f7] rounded-lg px-[32px] py-[50px] flex flex-col items-center justify-center text-center gap-[16px]">
            <SleepDollar className="w-9 h-9 md:w-auto md:h-auto" />
            <span className="text-base md:text-xl xl:text-2xl">{t("1")}</span>
          </div>
          <div className="w-[284px] h-[221px] md:h-[342px] bg-[#e8f0f7] rounded-lg px-[32px] py-[50px] flex flex-col items-center justify-center text-center gap-[16px]">
            <Discount className="w-9 h-9 md:w-auto md:h-auto" />
            <span className="text-base md:text-xl xl:text-2xl">{t("2")}</span>
          </div>
          <div className="w-[284px] h-[221px] md:h-[287px] bg-[#e8f0f7] rounded-lg px-[32px] py-[50px] flex flex-col items-center justify-center text-center gap-[16px]">
            <MoneyNotFound className="w-9 h-9 md:w-auto md:h-auto" />
            <span className="text-base md:text-xl xl:text-2xl">{t("3")}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Exchanges;
