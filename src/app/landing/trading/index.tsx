import React, { useState, useRef, useEffect } from "react";
import Container from "../../components/container";
import { ArrowRight } from "@/public/assets/icons";
import { Checkmark } from "@/public/assets/icons";
import Link from "next/link";
import exchangegif from "@/public/assets/images/Exchange-only-method.gif";
import twostep from "@/public/assets/images/Two-step-method.gif";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const Trading = () => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latest > 0.5 ? setActive("faster") : setActive("start");
  });

  const [active, setActive] = useState<"start" | "faster">("start");

  return (
    <div ref={ref} className="w-full h-[200vh] text-text-light relative">
      <div className="w-full h-[100vh] flex items-center justify-center sticky top-0">
        <div className="flex-1">
          <Container>
            <div className="w-full flex items-center justify-between ">
              <div className="relative">
                <div className="absolute w-1 h-[80px] top-3 -left-14">
                  <motion.div className="w-full h-full bg-main rounded-[10px] bg-opacity-30 absolute"></motion.div>
                  <motion.div
                    className="w-full h-full  bg-main rounded-[10px] bg-opacity-100  top-0 transform left-0"
                    style={{ scaleY: scrollYProgress }}
                  />
                </div>
                <motion.div className="flex flex-col gap-[24px] ">
                  <motion.div
                    className={`${
                      active === "start"
                        ? "text-main"
                        : "text-[#989898] scale-[0.85]"
                    }   relative flex items-start  gap-[22px] transition-transform duration-150 ease-in`}
                  >
                    <p className="text-[40px]">
                      Start trading in <br /> two steps
                    </p>
                    <ArrowRight
                      className={`${
                        active !== "start" && "rotate-90"
                      }  absolute -right-14 top-5 w-6 h-6 `}
                    />
                  </motion.div>

                  {active === "start" && (
                    <motion.div className="font-light space-y-[20px] layout">
                      <div className="flex items-start gap-2">
                        <Checkmark className="text-main" />
                        <p className="text-lg">Select your currency deposit.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Checkmark className="text-main" />
                        <p className="text-lg">
                          Select the currency you would <br /> like to receive
                          profits in.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                <div className="w-full border-[0.5px] border-main my-8"></div>

                <motion.div className="flex flex-col gap-[24px] ">
                  <motion.div
                    className={`${
                      active === "faster"
                        ? "text-main"
                        : "text-[#989898] scale-[0.85]"
                    }  relative flex items-start text-main gap-[22px] transition-transform duration-150 ease-in`}
                  >
                    <p className="text-[40px] ">Faster approach</p>
                    <ArrowRight
                      className={` ${
                        active !== "faster" && "rotate-90"
                      }  absolute -right-14 top-5 w-6 h-6 `}
                    />
                  </motion.div>
                  {active === "faster" && (
                    <motion.div className="font-light space-y-[20px] layout">
                      <div className="flex items-start gap-2">
                        <Checkmark className="text-main" />
                        <p className="text-lg">
                          Simply select your favorite <br /> exchange and see
                          what we have <br /> available for it.{" "}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <div className="">
                <div className="w-[695px] h-[775px] bg-[#8fb8e3] rounded-[32px] relative overflow-clip">
                  {active === "start" && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ y: 100, x: 112.5, opacity: 0 }}
                        animate={{ y: 112.5, x: 112.5, opacity: 1 }}
                        exit={{ y: -100, x: 112.5, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          default: { ease: "easeInOut" },
                        }}
                        className=""
                      >
                        <Image
                          width={475}
                          // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20%]"
                          src={twostep}
                          alt=""
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                  {active === "faster" && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ y: 100, x: 112.5, opacity: 0 }}
                        animate={{ y: 112.5, x: 112.5, opacity: 1 }}
                        exit={{ y: -100, x: 112.5, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          default: { ease: "easeInOut" },
                        }}
                        className=""
                      >
                        <Image
                          width={475}
                          // className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20%]"
                          src={exchangegif}
                          alt=""
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Trading;
