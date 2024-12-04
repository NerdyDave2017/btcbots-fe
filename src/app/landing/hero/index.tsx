import React from "react";
import Container from "../components/container";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/button";
import Navbar from "./components/Navbar";
import HeroImg from "@/public/assets/images/heroimage.jpeg";
import { HeroCurrencies } from "@/public/assets/icons";

const Hero = () => {
  return (
    <div className="h-[832px] bg-dark-background text-text-dark font-light relative">
      <div className="top-[47.5px] right-[27.2px] absolute w-[86.54px] h-[86.54px] bg-[#006fe3] rounded-full blur-[120px]" />
      <div className="top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 absolute w-[86.54px] h-[86.54px] bg-[#006fe3] rounded-full blur-[120px]" />
      <Container>
        {/* Nav Bar */}
        <Navbar />

        {/* Hero */}
        <div className="h-[calc(832px-80px)] flex items-center justify-between  ">
          <div className="flex-1 flex flex-col gap-[32px]">
            <p className="text-[64px] font-bold">
              The World's Most Trusted Crypto Trading Bot.
            </p>

            <div className="flex flex-col gap-[24px]">
              <p className="text-xl">
                A trading system that empowers you. Retain full <br /> control
                of your funds and pay commissions only on <br />
                successful trades.
              </p>
              <div className="flex items-center justify-start gap-[30px]">
                <Link href="/">
                  <Button text="Go to dashboard" className="font-normal" />
                </Link>
                <Link href="/">
                  <button className="px-[36px] py-[12px] border-[#bec9d5] border-[1px] rounded-full font-normal">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>

            <div className="">
              <span className="text-lg ">We support:</span>
              <HeroCurrencies />
            </div>
          </div>
          <div className="flex-1 relative">
            <Image src={HeroImg} alt="Hero Image" />
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0D14]/[0] to-[#0A0D14]/[1]" />
            <span className="absolute top-0 left-0 w-full h-full  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A0D14]/[0] to-[#0A0D14]/[1] opacity-50" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
