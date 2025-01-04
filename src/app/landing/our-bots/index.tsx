import React from "react";
import Container from "../../components/container";
import Chart from "@/public/assets/images/Chart.svg";
import robot from "@/public/assets/images/robotic.svg";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import LogoGreyscale from "@/public/assets/images/LogoGreyscale.svg";

const OurBots = () => {
  return (
    <div className="bg-main py-[70px] overflow-clip">
      <Container>
        <Image
          className="absolute -right-[73.46px] 2xl:right-0 top-[84.83px]"
          src={robot}
          alt="Robot Image"
        />
        <Image
          className="absolute top-1/2 left-[20px] 2xl:left-0"
          src={robot}
          alt="Robot Image"
        />

        <div className="w-[880px] mx-auto flex flex-col items-center justify-center gap-[50px]">
          <p className="text-[40px] text-[#f4f6f8] text-center">
            Our bots buy low, sell high. <br /> It's that simple.
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
        </div>
      </Container>
    </div>
  );
};

export default OurBots;
