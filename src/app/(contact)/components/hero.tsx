import React from "react";
import robobot from "@/public/assets/icons/robo-image.svg";
import Image from "next/image";
import Container from "../../components/container";

type Props = {
  title: string;
};

const Hero = ({ title }: Props) => {
  return (
    <div className="w-full  bg-[#0A0E12]">
      <Container>
        <div className="flex flex-col md:flex-row w-full items-center justify-between py-[20px]">
          <p className="text-[32px] md:text-[44px] xl:text-[64px] font-bold text-text-dark">
            {title}
          </p>

          <Image src={robobot} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
