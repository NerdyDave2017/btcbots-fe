import React from "react";
import Container from "../../components/container";
import { HowBar } from "@/public/assets/icons";

const How = () => {
  return (
    <div className="text-text-light py-[70px]">
      <Container>
        <div className="w-[880px] mx-auto flex flex-col items-center justify-center gap-[50px]">
          <p className="text-main text-[26px] md:text-[32px] xl:text-[40px]">
            How it works?
          </p>
          <div className="w-full flex flex-col md:flex-row  items:start md:items-center justify-between gap-6">
            <div className="">
              <p className="text-lg md:text-xl xl:text-2xl">
                Completely <br />
                <span className="text-main">FREE</span>
              </p>
            </div>
            <div className="max-w-[540px] text-lg md:text-xl xl:text-2xl">
              <p className=" mb-[24px]">
                We want to prove to you, our system really works! Thats why
                connecting and using cryptobots.io is simple and completely
                free!
              </p>
              <HowBar />
            </div>
          </div>
          <div className="w-full h-[220px] md:h-[400px]  xl:h-[512px] rounded-lg bg-[#D9D9D9]"></div>
        </div>
      </Container>
    </div>
  );
};

export default How;
