"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Container from "../components/container";
import MobileNavbar from "./components/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import { useFetchUser } from "@/src/hooks/fetchRequests";

const ChildrenWrapper = ({ children }: { children: ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const [isOpen, setIsOpen] = useState(isTabletOrMobile ? false : true);
  const { data: user, refetch } = useFetchUser();

  useEffect(() => {
    if (!user) {
      refetch();
    }
  });

  useEffect(() => {
    if (isTabletOrMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTabletOrMobile]);

  return (
    <div className="w-full h-screen flex relative overflow-scroll">
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}

      <div className="w-full">
        <MobileNavbar onClick={() => setIsOpen(!isOpen)} />

        {children}
      </div>
    </div>
  );
};

export default ChildrenWrapper;
