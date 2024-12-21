import React from "react";
import Container from "../../components/container";
import { ArrowRight } from "@/public/assets/icons";
import { Checkmark } from "@/public/assets/icons";
import Link from "next/link";
import exchangegif from "@/public/assets/images/Exchange-only-method.gif";
import twostep from "@/public/assets/images/Two-step-method.gif";
import Image from "next/image";

const Trading = () => {
  return (
    <div className="w-full py-[70px] text-text-light">
      <Container>
        <div className="w-full flex items-center justify-between ">
          <div className="">
            <div className="flex flex-col gap-[24px]">
              <div className="relative flex items-start text-main gap-[22px]">
                <p className="text-[40px]">
                  Start trading in <br /> two steps
                </p>
                <ArrowRight className="absolute -right-14 top-5 w-6 h-6" />
              </div>

              <div className="font-light space-y-[20px]">
                <div className="flex items-start gap-2">
                  <Checkmark className="text-main" />
                  <p className="text-lg">Select your currency deposit.</p>
                </div>
                <div className="flex items-start gap-2">
                  <Checkmark className="text-main" />
                  <p className="text-lg">
                    Select the currency you would <br /> like to receive profits
                    in.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col gap-[24px]">
              <div className="relative flex items-start text-main gap-[22px]">
                <p className="text-[40px]">Faster approach</p>
                <ArrowRight className="absolute -right-14 top-5 w-6 h-6" />
              </div>
 
              <div className="font-light space-y-[20px]">
                <div className="flex items-start gap-2">
                  <Checkmark className="text-main" />
                  <p className="text-lg">
                    Simply select your favorite <br /> exchange and see what we
                    have <br /> available for it.{" "}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="">
            <div className="w-[695px] h-[775px] bg-[#8fb8e3] rounded-[32px] relative overflow-clip">
              <Image
                width={475}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20%]"
                src={twostep}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trading;
