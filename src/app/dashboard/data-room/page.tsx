"use client";
import React, { useState } from "react";
import Main from "./main";
import Performance from "./performance";
import { CardDetails } from "@/src/types";

export type SelectedType = "Main" | "Performance";

const page = () => {
  const [selected, setSelected] = useState<SelectedType>("Main");
  const [strategy, setStrategy] = useState<CardDetails | null>(null);

  return (
    <div className="w-full  text-text-light font-light overflow-scroll">
      {selected === "Main" && (
        <Main setStrategy={setStrategy} setSelected={setSelected} />
      )}

      {selected === "Performance" && <Performance setSelected={setSelected} />}
    </div>
  );
};

export default page;
