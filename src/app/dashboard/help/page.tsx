"use client";
import React, { useState } from "react";
import Main from "./main";

export type SelectedType = "main" | "faq" | "knowledgebase";

const page = () => {
  const [selected, setSelected] = useState<SelectedType>("main");

  return (
    <div className="w-full overflow-scroll">
      {selected === "main" && <Main setSelected={setSelected} />}
    </div>
  );
};

export default page;
