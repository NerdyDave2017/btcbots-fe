"use client";
import React, { ReactNode, Suspense, useEffect, useState } from "react";
import AuthSidebar from "./components/auth-sidebar";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useAppContext } from "@/src/context";
import Sidebar from "../components/sidebar";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/loader";

const ChildrenWrapper = ({ children }: { children: ReactNode }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isTabletOrMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }, [isTabletOrMobile]);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [isTabletOrMobile]);
  return (
    <div className={`w-full relative  overflow-scroll `}>
      {/* Sidebar */}
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}

      <div className="">
        <div className="w-full shadow text-text-light">
          <Navbar setIsOpen={setIsOpen} />
        </div>
        <div className="w-full flex ">
          <AuthSidebar />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ChildrenWrapper;
