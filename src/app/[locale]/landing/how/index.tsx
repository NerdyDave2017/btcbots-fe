import React, { useState, useId, useEffect } from "react";
import Container from "../../components/container";
import { HowBar } from "@/public/assets/icons";
import { useTranslations } from "next-intl";

const How = () => {
  const t = useTranslations("How");

  const [active, setActive] = useState(0);

  const data = [
    {
      id: "1",
      color: "#D9D9D9",
      title1: t("1"),
      title2: t("2"),
      body: t("3"),
      body1: t("4"),
      body2: t("5"),
    },
    {
      id: "2",
      color: "#D9D9",
      title1: t("6"),
      title2: t("7"),
      title3: t("8"),
      body: t("9"),
    },
    {
      id: "3",
      color: "#FF2",
      title1: t("10"),
      title2: t("11"),
      title3: t("12"),
      body: t("13"),
    },
  ];

  const carouselInfiniteScroll = () => {
    const totalSlides = data.length;
    const adjustedActive = active % totalSlides;

    if (adjustedActive === totalSlides - 1) {
      // When reaching the last slide, smoothly transition back to first slide
      setTimeout(() => {
        setActive(0);
      }, 700); // Match this with your transition duration
    } else {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    // console.log(active);
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 4000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="text-text-light py-[70px]">
      <Container>
        <div className=" mx-auto flex flex-col items-center justify-center gap-[50px]">
          <p className="text-main text-[28px] md:text-[32px] xl:text-[40px]">
            {t("0")}
          </p>
          <div className="w-full max-w-[880px] flex flex-col md:flex-row  items:start md:items-center justify-between gap-6">
            <div className="flex overflow-hidden">
              {data.map((item, index) => (
                <div
                  className={`w-full flex-shrink-0 transform transition-all duration-500 ease-in-out -translate-x-[${
                    active * 100
                  }%]`}
                >
                  <p className="text-lg md:text-xl xl:text-2xl">
                    {item.title1}
                    {!Object.keys(item).includes("title3") && <br />}
                    {"  "}
                    <span className="text-main">{item.title2}</span>
                    <br />
                    <span className="">{item.title3}</span>
                  </p>
                </div>
              ))}
            </div>
            <div className="max-w-[540px] ">
              <div className="flex overflow-hidden">
                {data.map((item, index) => (
                  <div
                    className={`text-lg md:text-xl xl:text-2xl flex-shrink-0 w-full transform transition-all duration-1000 ease-in-out -translate-x-[${
                      active * 100
                    }%]`}
                  >
                    <p key={index} className=" mb-[24px]">
                      {item.body}{" "}
                      <span className="font-bold">{item.body1}</span>{" "}
                      {item.body2}
                    </p>
                  </div>
                ))}
              </div>

              {/* <HowBar /> */}

              <div className="flex gap-1 w-[58px] h-[5px]">
                {data.map((_, index) => (
                  <div
                    key={index}
                    className={`h-[4px] rounded-[2px] transition-all duration-300 ease-in-out ${
                      index === active % data.length
                        ? "w-[24px] bg-[#006FE3]"
                        : "w-[13px] bg-[#8FB8E3]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-[880px] flex gap- flex-row overflow-hidden">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`w-full flex-shrink-0 max-w-[880px] h-[220px] md:h-[400px]  xl:h-[512px] rounded-lg bg-[${
                  item.color
                }] transform transition-all duration-700 ease-in-out -translate-x-[${
                  active * 100
                }%]`}
              ></div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default How;
