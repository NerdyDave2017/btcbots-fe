import React from "react";
import Container from "../../components/container";
import { HowBar } from "@/public/assets/icons";
import { useTranslations } from "next-intl";

const How = () => {
  const t = useTranslations("How");
  return (
    <div className="text-text-light py-[70px]">
      <Container>
        <div className=" mx-auto flex flex-col items-center justify-center gap-[50px]">
          <p className="text-main text-[28px] md:text-[32px] xl:text-[40px]">
            {t("0")}
          </p>
          <div className="w-full max-w-[880px] flex flex-col md:flex-row  items:start md:items-center justify-between gap-6">
            <div className="">
              <p className="text-lg md:text-xl xl:text-2xl">
                {t("1")} <br />
                <span className="text-main">{t("2")}</span>
              </p>
            </div>
            <div className="max-w-[540px] text-lg md:text-xl xl:text-2xl">
              <p className=" mb-[24px]">
                {t("3")} <span className="font-bold">{t("4")}</span> {t("5")}
              </p>
              <HowBar />
            </div>
          </div>
          <div className="w-full max-w-[880px] h-[220px] md:h-[400px]  xl:h-[512px] rounded-lg bg-[#D9D9D9]"></div>
        </div>
      </Container>
    </div>
  );
};

export default How;
