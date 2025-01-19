import { Checkmark } from "@/public/assets/icons";
import React from "react";
import Container from "../../components/container";
import Button from "../../components/button";

const Affiliate = () => {
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
                Affiliate partner <br /> program
              </p>
              <div className="flex items-start gap-2">
                <Checkmark className="text-main" />
                <p className="text-lg">
                  Earn Passive Income with Our Referral <br /> Program. Refer
                  friends, and receive a 25% <br /> commission on their profit
                  share, directly <br /> deposited to your account.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Checkmark className="text-main" />
                <p className="text-lg">
                  No active trading required. Simply register <br /> and start
                  earning.
                </p>
              </div>

              <Button
                className="text-text-dark font-normal"
                text="Getting Started"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Affiliate;
