"use client";
import React, { ReactNode, useState } from "react";
import Sidebar from "./components/sidebar";
import Container from "../components/container";
import Navbar from "./components/MobileNavbar";
import { useMediaQuery } from "react-responsive";

const ChildrenWrapper = ({ children }: { children: ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [isOpen, setIsOpen] = useState(isTabletOrMobile ? false : true);

  return (
    <div className="w-full h-screen flex relative overflow-scroll">
      {isOpen && <Sidebar />}

      <div className="w-full">
        <Navbar onClick={() => setIsOpen(!isOpen)} />

        {children}
      </div>
    </div>
  );
};

export default ChildrenWrapper;
