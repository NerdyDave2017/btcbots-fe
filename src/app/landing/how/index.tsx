import React from "react";
import Container from "../../components/container";
import { HowBar } from "@/public/assets/icons";

const How = () => {
  return (
    <div className="text-text-light py-[70px]">
      <Container>
        <div className="w-[880px] mx-auto flex flex-col items-center justify-center gap-[50px]">
          <p className="text-main text-[40px]">How it works?</p>
          <div className="w-full flex items-center justify-between">
            <div className="">
              <p className="text-2xl">
                Completely <br />
                <span className="text-main">FREE</span>
              </p>
            </div>
            <div className="w-[540px] text-2xl">
              <p className=" mb-[24px]">
                We want to prove to you, our system really works! Thats why
                connecting and using cryptobots.io is simple and completely
                free!
              </p>
              <HowBar />
            </div>
          </div>
          <div className="w-full h-[512px] rounded-lg bg-[#D9D9D9]"></div>
        </div>
      </Container>
    </div>
  );
};

export default How;
