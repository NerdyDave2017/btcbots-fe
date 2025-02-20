import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/button";
import Navbar from "../../components/navbar";
import HeroImg from "@/public/assets/images/heroimage.jpeg";
import { HeroCurrencies } from "@/public/assets/icons";
import { useAppContext } from "@/src/context";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  const { setIsOpen, isMobile } = useAppContext();
  return (
    <>
      <div className="bg-dark-background text-text-dark font-light relative">
        {!isMobile && (
          <div className="top-[47.5px] right-[27.2px] absolute w-[86.54px] h-[86.54px] bg-[#006fe3] rounded-full blur-[120px]" />
        )}
        <div className="top-1/2 right-0 md:right-1/2 -translate-y-1/2 translate-x-1/2 absolute w-[86.54px] h-[86.54px] bg-[#006fe3] rounded-full blur-[120px]" />
        {/* Nav Bar */}
        <Navbar setIsOpen={setIsOpen} />

        <Container>
          {/* Hero */}
          <div className="xl:min-h-[calc(832px-80px)] flex flex-col lg:flex-row items-center justify-between  xl:pb-12">
            <div className="flex-1 flex flex-col gap-[32px]">
              <p className="text-[44px] md:text-[50px] xl:text-[64px] font-bold">
                {t("0")}
              </p>

              <div className="flex flex-col gap-[24px]">
                <p className="md:w-[90%] text-base  xl:text-xl">{t("1")}</p>
                <div className="w-fit md:w-auto flex flex-col md:flex-row items-center justify-start gap-[30px]">
                  <Link href="/login" className="">
                    <Button text={t("2")} className="font-normal" />
                  </Link>
                  <Link href="/about-us" className="w-full md:w-auto">
                    <button className="w-full md:w-auto px-[36px] py-[12px] h-[47px] border-[#bec9d5] border-[1px] rounded-full font-normal">
                      {t("3")}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start">
                <span className="text-base xl:text-lg ">{t("4")}</span>
                <HeroCurrencies
                  height={isMobile ? 50 : 50}
                  width={isMobile ? 109 : 141}
                  className=""
                />
              </div>
            </div>
            <div className="flex-1 relative my-20">
              <Image src={HeroImg} alt="Hero Image" />
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0D14]/[0] to-[#0A0D14]/[1]" />
              <span className="absolute top-0 left-0 w-full h-full  bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A0D14]/[0] to-[#0A0D14]/[1] opacity-50" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
