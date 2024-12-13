import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { formatDate } from "@/src/lib";

Chart.register(CategoryScale);

type BarChartType = {
  date: string;
  profit: number;
};

const data: BarChartType[] = [
  { date: "2023-01-01", profit: 100 },
  { date: "2023-01-02", profit: 200 },
  { date: "2023-01-03", profit: 150 },
  { date: "2023-01-04", profit: 300 },
  { date: "2023-01-05", profit: 250 },
  { date: "2023-01-06", profit: 400 },
  { date: "2023-01-07", profit: 350 },
];

const BarChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: [].map((data: any) => data?.date),
    datasets: [
      {
        label: "Summary profit",
        data: [].map((data: any) => data?.usd_profit),
        backgroundColor: ["#006FE3"],
        borderColor: "#006FE3",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: data.map((data: any) => formatDate(data?.date, "MMM DD, YYYY")),
      datasets: [
        {
          label: "Summary profit",
          data: data.map((data: any) => data?.profit),
          backgroundColor: ["#006FE3"],
          borderColor: "#006FE3",
          borderWidth: 2,
        },
      ],
    });
  }, []);

  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Bot 7-Days Profit",
            font: {
              size: 14,
              family: "Sora",
              weight: "normal",
            },
          },
        },
      }}
    />
  );
};

export default BarChartComponent;
