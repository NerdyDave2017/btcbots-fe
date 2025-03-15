import React, { useState, useRef, useEffect } from "react";
import Container from "../../components/container";
import { ArrowRight } from "@/public/assets/icons";
import { Checkmark } from "@/public/assets/icons";
import { Link } from "@/src/i18n/routing";
import exchangegif from "@/public/assets/images/Exchange-only-method.gif";
import twostep from "@/public/assets/images/Two-step-method.gif";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useAppContext } from "@/src/context";
import { useTranslations } from "next-intl";

const Trading = () => {
  const t = useTranslations("Trading");

  const ref = useRef(null);

  const { isMobile } = useAppContext();
  const gifContainerRef = useRef<HTMLDivElement>(null);

  const gifImageRef = useRef<HTMLImageElement>(null);

  const gifContainerLgRef = useRef<HTMLDivElement>(null);
  const gifImageLgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    latest > 0.5 ? setActive("faster") : setActive("start");
  });

  const [active, setActive] = useState<"start" | "faster">("start");
  const [gifContainerHeight, setGifContainerHeight] = useState(0);
  const [gifContainerWidth, setGifContainerWidth] = useState(0);
  const [gifImageWidth, setGifImageWidth] = useState(0);

  useEffect(() => {
    if (!isMobile) return;
    if (!gifContainerRef.current) return;
    if (!gifImageRef.current) return;

    setGifContainerHeight(gifContainerRef.current.clientHeight);
    setGifContainerWidth(gifContainerRef.current.clientWidth);

    setGifImageWidth(gifImageRef.current.clientWidth);

    return () => {
      setGifContainerHeight(0);
      setGifContainerWidth(0);
      setGifImageWidth(0);
    };
  }, [gifContainerRef, gifImageRef]);

  useEffect(() => {
    if (isMobile) return;
    if (!gifContainerLgRef.current) return;
    if (!gifImageLgRef.current) return;

    setGifContainerHeight(gifContainerLgRef.current.clientHeight);
    setGifContainerWidth(gifContainerLgRef.current.clientWidth);

    setGifImageWidth(gifImageLgRef.current.clientWidth);

    return () => {
      setGifContainerHeight(0);
      setGifContainerWidth(0);
      setGifImageWidth(0);
    };
  }, [gifContainerLgRef, gifImageLgRef]);

  return (
    <div ref={ref} className="w-full lg:h-[200vh] text-text-light relative">
      <div className="w-full lg:h-[100vh] flex items-center justify-center lg:sticky lg:top-0">
        <div className="flex-1">
          <Container>
            <div className=" w-full hidden lg:flex items-center justify-between ">
              <div className="relative">
                <div className="absolute w-1 h-[80px] top-3 -left-5 xl:-left-14">
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
                    <p className="md:text-[32px] xl:text-[40px]">
                      {t("0")} <br /> {t("1")}
                    </p>
                    <ArrowRight
                      className={`${
                        active !== "start" && "rotate-90"
                      }  absolute -right-14 top-3 xl:top-5 w-6 h-6 `}
                    />
                  </motion.div>

                  {active === "start" && (
                    <motion.div className="font-light space-y-[20px] layout">
                      <div className="flex items-start gap-2">
                        <Checkmark className="text-main" />
                        <p className="text-lg">{t("2")}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Checkmark className="text-main" />
                        <p className="text-lg">
                          {t("3")} <br /> {t("4")}
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
                    }  relative flex items-start gap-[22px] transition-transform duration-150 ease-in`}
                  >
                    <p className="md:text-[32px] xl:text-[40px]">{t("5")}</p>
                    <ArrowRight
                      className={` ${
                        active !== "faster" && "rotate-90"
                      }  absolute -right-14 top-3 xl:top-5 w-6 h-6 `}
                    />
                  </motion.div>
                  {active === "faster" && (
                    <motion.div className="font-light space-y-[20px] layout">
                      <div className="flex items-start gap-2">
                        <Checkmark className="text-main" />
                        <p className="text-lg">
                          {t("6")} <br /> {t("7")} <br /> {t("8")}{" "}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
              <div className="">
                <div
                  ref={gifContainerLgRef}
                  className="lg:w-[500px] lg:h-[600px] xl:w-[695px] xl:max-h-[775px] bg-[#8fb8e3] rounded-[32px] relative overflow-clip"
                >
                  {active === "start" && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{
                          y: 100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        animate={{
                          y: 112.5,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 1,
                        }}
                        exit={{
                          y: -100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          default: { ease: "easeInOut" },
                        }}
                        className=""
                      >
                        <Image
                          ref={gifImageLgRef}
                          // width={300}
                          className="lg:w-[390px] xl:w-[430px]"
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
                        initial={{
                          y: 100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        animate={{
                          y: 112.5,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 1,
                        }}
                        exit={{
                          y: -100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          default: { ease: "easeInOut" },
                        }}
                        className=""
                      >
                        <Image
                          ref={gifImageLgRef}
                          // width={300}
                          className="lg:w-[390px] xl:w-[430px]"
                          src={exchangegif}
                          alt=""
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </div>

            <div className=" lg:hidden w-full overflow-clip py-10">
              <div className="">
                <div
                  onClick={() => setActive("start")}
                  className={`${
                    active === "start"
                      ? "text-main mb-[54px]"
                      : "text-[#989898] scale-[0.85]"
                  }   relative flex items-center justify-between  gap-[22px] transition-transform duration-150 ease-in `}
                >
                  <p className="text-[28px]">
                    Start trading in <br /> two steps
                  </p>
                  <ArrowRight
                    className={`${
                      active !== "start" && "rotate-90"
                    }   w-6 h-6 `}
                  />
                </div>
                {active === "start" && (
                  <div className="font-light space-y-[20px] mb-8">
                    <div className="flex items-start gap-2 ">
                      <Checkmark className="text-main" />
                      <p className="text-base">Select your currency deposit.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Checkmark className="text-main" />
                      <p className="text-base">
                        Select the currency you would <br /> like to receive
                        profits in.
                      </p>
                    </div>
                  </div>
                )}
                {active === "start" && (
                  <div
                    ref={gifContainerRef}
                    className="bg-[#8fb8e3] w-full h-[440px] md:h-[600px]  overflow-clip"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{
                          y: 100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        animate={{
                          y: 112.5,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 1,
                        }}
                        exit={{
                          y: -100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          default: { ease: "easeInOut" },
                        }}
                        className=""
                      >
                        <Image
                          ref={gifImageRef}
                          // width={300}
                          className=""
                          src={twostep}
                          alt=""
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </div>
              <div className="w-full border-[0.5px] border-main my-8"></div>
              <div className="">
                <div
                  onClick={() => setActive("faster")}
                  className={`${
                    active === "faster"
                      ? "text-main mb-[54px]"
                      : "text-[#989898] scale-[0.85]"
                  }  relative flex items-center justify-between gap-[22px] transition-transform duration-150 ease-in `}
                >
                  <p className="md:text-[32px] text-[28px]">Faster approach</p>
                  <ArrowRight
                    className={` ${
                      active !== "faster" && "rotate-90"
                    }  w-6 h-6 `}
                  />
                </div>
                {active === "faster" && (
                  <motion.div className="font-light space-y-[20px] mb-8">
                    <div className="flex items-start gap-2">
                      <Checkmark className="text-main" />
                      <p className="text-base">
                        Simply select your favorite <br /> exchange and see what
                        we have <br /> available for it.{" "}
                      </p>
                    </div>
                  </motion.div>
                )}
                {active === "faster" && (
                  <div
                    ref={gifContainerRef}
                    className="bg-[#8fb8e3] w-full h-[440px] md:h-[600px] overflow-clip"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{
                          y: 100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        animate={{
                          y: 112.5,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 1,
                        }}
                        exit={{
                          y: -100,
                          x: (gifContainerWidth - gifImageWidth) / 2,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.6,
                          default: { ease: "easeInOut" },
                        }}
                        className=""
                      >
                        <Image
                          ref={gifImageRef}
                          // width={300}
                          className=""
                          src={exchangegif}
                          alt=""
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Trading;
