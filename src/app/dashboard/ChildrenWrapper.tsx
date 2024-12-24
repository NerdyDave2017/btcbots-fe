"use client";
import React, { ReactNode, useState } from "react";
import Sidebar from "./components/sidebar";
import Container from "../components/container";
import Navbar from "./components/MobileNavbar";
import motion from ""

const ChildrenWrapper = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-screen flex relative overflow-scroll">
      {isOpen && <Sidebar />}
      <div className="w-full">
        <Navbar onClick={()=> setIsOpen(!isOpen)} />

        {children}
      </div>
    </div>
  );
};

export default ChildrenWrapper;
