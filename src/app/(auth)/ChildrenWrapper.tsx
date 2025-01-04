"use client";
import React, { ReactNode } from "react";
import AuthSidebar from "./components/auth-sidebar";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Container from "../components/container";

const ChildrenWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <div className="w-full shadow text-text-light">
        <Navbar />
      </div>
      <div className="w-full flex">
        <AuthSidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ChildrenWrapper;
