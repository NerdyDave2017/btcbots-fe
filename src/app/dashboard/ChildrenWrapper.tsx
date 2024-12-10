import React, { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import Container from "../components/container";

const ChildrenWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen flex relative">
      <Sidebar />
      {children}
    </div>
  );
};

export default ChildrenWrapper;
