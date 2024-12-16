"use client";
import React, { useState } from "react";

import Main from "./main";
import Withdraw from "./withdraw";

export type SelectedType = "Main" | "Withdraw";

const page = () => {
  const [selected, setSelected] = useState<SelectedType>("Main");

  return (
    <div className="w-full  pb-[48px]">
      {selected === "Main" && <Main setSelected={setSelected} />}

      {selected === "Withdraw" && <Withdraw setSelected={setSelected} />}
    </div>
  );
};

export default page;
