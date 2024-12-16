"use client";
import React, { useState } from "react";
import Main from "./main";
import FAQ from "./faq";
import KnowledgeBase from "./knowledge-base";

export type SelectedType = "main" | "faq" | "knowledgebase";

const page = () => {
  const [selected, setSelected] = useState<SelectedType>("main");

  return (
    <div className="w-full overflow-scroll pb-[48px]">
      {selected === "main" && <Main setSelected={setSelected} />}

      {selected === "faq" && <FAQ setSelected={setSelected} />}

      {selected === "knowledgebase" && (
        <KnowledgeBase setSelected={setSelected} />
      )}
    </div>
  );
};

export default page;
