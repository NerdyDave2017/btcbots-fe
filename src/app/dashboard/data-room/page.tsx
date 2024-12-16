"use client";
import React, { useState } from "react";
import Main from "./main";
import Performance from "./performance";

export type SelectedType = "Main" | "Performance";

const page = () => {
  const [selected, setSelected] = useState<SelectedType>("Main");

  return (
    <div className="w-full text-text-light font-light overflow-scroll">
      {selected === "Main" && <Main setSelected={setSelected} />}

      {selected === "Performance" && <Performance setSelected={setSelected} />}
    </div>
  );
};

export default page;
