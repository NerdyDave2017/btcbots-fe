import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Image from "next/image";
import Bitcoin from "@/public/assets/icons/bitcoin.svg";
import Button from "../../../components/button";
import Dropdown from "../../../components/dropdown/dropdown";
import Chart from "@/public/assets/icons/performance-chart.svg";
import { Bar } from "react-chartjs-2";
import ChartJs from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { SelectedType } from "../page";
import {
  useFetchStrategy,
  useFetchHistogramData,
} from "@/src/hooks/fetchRequests";
import { isAxiosError } from "axios";
import { toast } from "sonner";
import { CardDetails } from "@/src/types";
import { useRouter } from "next/navigation";

ChartJs.register(CategoryScale);

type Props = {
  details: CardDetails;
  setSelected: (value: SelectedType) => void;
};

type Data = {
  strategy_id: string;
  month: string;
  year: number;
  strategy_direction: string;
  deals_completed: number;
  performance: string;
  maximum_days_in_a_deal: number;
  average_days_in_a_deal: number;
  max_price_deviation: string;
  trading_view_link: string;
};

const Performance = ({ details, setSelected }: Props) => {
  const router = useRouter();

  const [strategyData, setStrategyData] = useState({} as Data);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("chart");
  const [chartData, setChartData] = useState({
    labels: [].map((data) => data),
    datasets: [
      {
        label: "2023",
        data: [].map((data: Data) => data?.performance.replace("%", "")),
        backgroundColor: ["#006FE3"],
        borderColor: "#006FE3",
        borderWidth: 1,
      },
      {
        label: "2024",
        data: [].map((data: Data) => data?.performance.replace("%", "")),
        backgroundColor: ["#FFFFFF"],
        borderColor: "#006FE3",
        borderWidth: 1,
      },
    ],
  });

  const { mutate: FetchStrategy, data: StrategyData } = useFetchStrategy();
  const { mutate: FetchHistogramData, data: HistogramData } =
    useFetchHistogramData();

  const fetchData = async () => {
    if (year === "Histogram") {
      setStrategyData({} as Data);
      fetchHistogram();
      return;
    }

    if (!year || !month) {
      toast.error("Please select a year and month");
      return;
    }

    FetchStrategy(
      {
        strategy: details.strategy.name,
        year,
        month,
      },
      {
        onSuccess: (res) => {
          if (
            !res.performance ||
            !res.deals_completed ||
            !res.average_days_in_a_deal ||
            !res.maximum_days_in_a_deal
          ) {
            setStrategyData({} as Data);
            toast.error("Data Unavailable Currently", {
              position: "top-center",
            });
            return;
          }

          setStrategyData(res);
          toast.success("Data fetched successfully");
        },
        onError: (error: Error) => {
          setStrategyData({} as Data);
          if (isAxiosError(error)) {
            if (
              error.response?.data.message ===
              "No data available for this period"
            ) {
              toast.error(
                "No data is available for this time period. Either the strategy was not available or the requested date is in the future."
              );
            } else {
              toast.error(error.response?.data.message);
            }
          } else {
            toast.error("Unable to fetch data", {
              position: "top-center",
            });
          }
        },
      }
    );
  };

  const fetchHistogram = async () => {
    FetchHistogramData(details.strategy.name, {
      onSuccess: (res) => {
        const monthOrder: Record<string, any> = {
          January: 0,
          February: 1,
          March: 2,
          April: 3,
          May: 4,
          June: 5,
          July: 6,
          August: 7,
          September: 8,
          October: 9,
          November: 10,
          December: 11,
        };

        res.year1.sort(
          (a: Data, b: Data) => monthOrder[a.month] - monthOrder[b.month]
        );
        res.year2.sort(
          (a: Data, b: Data) => monthOrder[a.month] - monthOrder[b.month]
        );

        setStrategyData({} as Data);
        setChartData({
          labels: res.year1.map((data: Data) => data?.month),
          datasets: [
            {
              label: "2023",
              data: res.year1.map((data: Data) =>
                data?.performance.replace("%", "")
              ),
              backgroundColor: ["#006FE3"],
              borderColor: "#006FE3",
              borderWidth: 1,
            },
            {
              label: "2024",
              data: res.year2.map((data: Data) =>
                data?.performance.replace("%", "")
              ),
              backgroundColor: ["#FFFFFF"],
              borderColor: "#006FE3",
              borderWidth: 1,
            },
          ],
        });
        toast.success("Data fetched successfully", {
          position: "top-center",
        });
      },
      onError: (error: Error) => {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message);
        } else {
          console.error(error);
          toast.error("Unable to fetch data");
        }
      },
    });
  };

  // useEffect(() => {
  //   if (details && year && month) fetchData();
  // }, [details, year, month]);

  const data = [
    {
      title: "Market Strategy",
      value: strategyData?.strategy_direction ?? "",
    },
    {
      title: "Average",
      value: strategyData?.average_days_in_a_deal ?? "",
    },
    {
      title: "Maximum",
      value: strategyData?.maximum_days_in_a_deal ?? "",
    },
    {
      title: "Max Price Deviation",
      value: strategyData?.max_price_deviation ?? "",
    },
    {
      title: "Profits",
      value: strategyData?.performance ?? "",
    },
    {
      title: "Completed trades",
      value: strategyData?.deals_completed ?? "",
    },
  ];

  return (
    <div className="w-full pb-[48px]">
      <Header
        text="Performance Data"
        showArrow
        onClick={() => setSelected("Main")}
      />

      <div className="bg-[#eaf0f6] mb-10 mx-5 p-6 lg:mx-[48px] h-full py-8 rounded-2xl min-h-[55vh] scrollbar-hide overflow-scroll ">
        {strategyData?.trading_view_link && (
          <Image
            width={100}
            height={100}
            alt="Trading view chart"
            className="w-full h-full"
            src={strategyData?.trading_view_link ?? null}
            unoptimized
          />
        )}
        {chartData && !strategyData.trading_view_link && (
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "",
                },
              },
            }}
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row w-full justify-center gap-[48px] px-5">
        <div className="flex-1 w-full max-w-[550px]">
          <div className="bg-[#c3dbf5] rounded-tl-[32px] rounded-tr-[32px] py-6 px-4 break-inside-avoid flex items-center justify-start gap-4">
            <Image
              src={details.depositCurrencyImg}
              className="w-12 h-12"
              alt=""
            />
            <div className="flex flex-col items-start justify-center gap-3">
              <div className="flex items-center gap-4">
                <p className="text-xl text-text-light font-normal">
                  {details.bot} Bot
                </p>
                <div className="px-2.5 py-1.5 bg-main/20 rounded-[90px] justify-center items-center flex">
                  <p className="text-main text-sm font-normal">
                    {details.strategy.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-4 px-4 bg-[#eaf0f6] rounded-bl-[32px] rounded-br-[32px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="flex-col justify-center items-start gap-4 inline-flex">
                <p className="text-[#3c3c43]/60 text-sm font-normal">Profits</p>

                <p className="text-[#090909] text-base font-normal">
                  {strategyData?.performance ?? ""}{" "}
                  {strategyData?.performance && "%"}
                </p>
              </div>
              <div className="flex-col justify-center items-end gap-4 inline-flex">
                <p className="text-[#3c3c43]/60 text-sm font-normal">
                  Completed trades
                </p>

                <p className="text-[#090909] text-base font-normal">
                  {strategyData?.deals_completed ?? ""}
                </p>
              </div>
            </div>

            <div className="w-full border border-[#E3E3E3]/50"></div>

            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch justify-between items-start inline-flex"
                >
                  <div className="text-[#3c3c43]/60 text-sm font-normal">
                    {item.title}
                  </div>

                  <div
                    className={`text-[#090909] text-base font-normal ${
                      item.title === "Market Strategy"
                        ? item.value === "Long"
                          ? "text-[#14ae5c]"
                          : "text-[#e9362b]"
                        : ""
                    }`}
                  >
                    {item.value}{" "}
                    {item.title === "Profits" &&
                      strategyData.performance &&
                      "%"}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full border border-[#E3E3E3]/50"></div>

            <Button
              onClick={() =>
                router.push(
                  `/dashboard/explorer?strategy=${details.strategy.name}`
                )
              }
              className="w-full"
              text="Activate Bot"
              size="lg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8 w-full max-w-[550px]">
          <Dropdown
            label="Year"
            setValue={setYear}
            value={year}
            options={["", "2020", "2021", "2022", "2023", "2024", "Histogram"]}
          />
          <Dropdown
            label="Month"
            setValue={setMonth}
            value={month}
            options={[
              "",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
          />
          <Button
            onClick={fetchData}
            className="w-full"
            size="lg"
            text="Apply Changes"
          />
        </div>
      </div>
    </div>
  );
};

export default Performance;
