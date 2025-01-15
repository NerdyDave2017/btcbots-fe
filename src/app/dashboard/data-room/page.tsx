"use client";
import React, { useEffect, useState } from "react";
import Main from "./main";
import Performance from "./performance";
import { CardDetails } from "@/src/types";
import { useSearchParams, useRouter } from "next/navigation";
import {
  CB001,
  CB002,
  CB003,
  CB004,
  CB005,
  CB006,
  CB007,
  CB008,
  CB009,
  CB010,
  CB011,
  SOLBTC,
  SOLETH,
} from "../data";
const CardData = [
  CB001,
  CB002,
  CB003,
  SOLBTC,
  CB004,
  CB005,
  CB006,
  SOLETH,
  CB007,
  CB008,
  CB009,
  CB010,
  CB011,
];

export type SelectedType = "Main" | "Performance";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const strategyQuery = searchParams.get("strategy");

  const [selected, setSelected] = useState<SelectedType>("Main");
  const [strategy, setStrategy] = useState<CardDetails | null>(null);

  useEffect(() => {
    if (strategyQuery) {
      setSelected("Performance");
      setStrategy(
        CardData.find((item) => item.strategy.name === strategyQuery) || null
      );
    }
  }, [strategyQuery]);

  return (
    <div className="w-full  text-text-light font-light overflow-scroll">
      {selected === "Main" && (
        <Main setStrategy={setStrategy} setSelected={setSelected} />
      )}

      {selected === "Performance" && (
        <Performance details={strategy!} setSelected={setSelected} />
      )}
    </div>
  );
};

export default page;
