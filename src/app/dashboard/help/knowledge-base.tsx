import React from "react";
import { SelectedType } from "./page";
import Header from "../components/header";

type Props = {
  setSelected: (selected: SelectedType) => void;
};

const KnowledgeBase = ({ setSelected }: Props) => {
  return (
    <div className="w-full">
      <Header
        text="Knowledge Base"
        showArrow
        onClick={() => setSelected("main")}
      />
    </div>
  );
};

export default KnowledgeBase;
