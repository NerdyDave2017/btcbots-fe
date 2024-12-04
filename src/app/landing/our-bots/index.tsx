import React from "react";
import Container from "../components/container";
import Chart from "@/public/assets/images/Chart.svg";
import robot from "@/public/assets/images/robotic.svg";
import Image from "next/image";

const OurBots = () => {
  return (
    <div className="bg-primary py-[70px] ">
      <Container>
        <Image
          className="absolute -right-[73.46px] top-[84.83px]"
          src={robot}
          alt="Robot Image"
        />
        <Image
          className="absolute top-1/2 left-[20px]"
          src={robot}
          alt="Robot Image"
        />
        <div className="w-[880px] mx-auto flex flex-col items-center justify-center gap-[50px]">
          <p className="text-[40px] text-[#f4f6f8] text-center">
            Our bots buy low, sell high. <br /> It's that simple.
          </p>
          <Image
            className="w-full shadow-[0px_0px_60px_10px_rgba(0,0,0,0.5)]"
            src={Chart}
            alt="Chart"
          />
        </div>
      </Container>
    </div>
  );
};

export default OurBots;
