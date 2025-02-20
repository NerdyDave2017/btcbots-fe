import { Checkmark } from "@/public/assets/icons";
import React from "react";
import Container from "../../components/container";
import Button from "../../components/button";
import { useTranslations } from "next-intl";

const Affiliate = () => {
  const t = useTranslations("Affiliate");

  return (
    <div className="pt-[20px] pb-[70px] ">
      <Container>
        <div className=" flex flex-col lg:flex-row lg:gap-[80px]">
          <div className="flex-1">
            <div className="w-full lg:w-[470px] xl:w-[720px] h-[220px] md:h-[400px]  xl:h-[512px] bg-[#D9D9D9] rounded-lg -translate-y-[80px] lg:absolute -top- md:-top-[100px] xl:-top-[148px] z-50"></div>
          </div>
          <div className="">
            <div className="font-light space-y-[20px]">
              <p className="text-[28px] md:text-[32px] xl:text-[40px] text-main">
                {t("0")} <br /> {t("1")}
              </p>
              <div className="flex items-start gap-2">
                <Checkmark className="text-main" />
                <p className="text-lg">
                  {t("2")}l <br /> {t("3")} <br /> {t("4")} <br /> {t("5")}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Checkmark className="text-main" />
                <p className="text-lg">
                  {t("6")} <br /> {t("7")}
                </p>
              </div>

              <Button className="text-text-dark font-normal" text={t("8")} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Affiliate;
