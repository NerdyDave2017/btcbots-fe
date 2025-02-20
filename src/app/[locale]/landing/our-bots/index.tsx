import React from "react";
import Container from "../../components/container";
import Chart from "@/public/assets/images/Chart.svg";
import robot from "@/public/assets/images/robotic.svg";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { useTranslations } from "next-intl";

const OurBots = () => {
  const t = useTranslations("Bots");
  return (
    <div className="bg-main py-[70px] overflow-clip">
      <Container>
        <Image
          className="hidden md:block absolute -right-[73.46px] 2xl:right-0 top-[84.83px]"
          src={robot}
          alt="Robot Image"
        />
        <Image
          className="hidden lg:block absolute top-1/2 left-[20px] 2xl:left-0"
          src={robot}
          alt="Robot Image"
        />

        <div className=" mx-auto flex flex-col items-center justify-center  md:gap-[50px]">
          <p className="text-[28px] md:text-[32px] xl:text-[40px] text-[#f4f6f8] text-center">
            {t("0")} <br /> {t("1")}
          </p>{" "}
          <CardContainer className="w-full h-full">
            <CardBody className="w-full h-full">
              <CardItem translateZ="50" className="w-full">
                <Image
                  className="w-full shadow-[0px_0px_60px_10px_rgba(0,0,0,0.5)]"
                  src={Chart}
                  alt="Chart"
                />{" "}
              </CardItem>
            </CardBody>
          </CardContainer>
          <p className=" text-lg font-light text-[#f4f6f8] text-center">
            {t("2")} <span className="font-bold">{t("3")}</span> {t("4")}
          </p>{" "}
        </div>
      </Container>
    </div>
  );
};

export default OurBots;
