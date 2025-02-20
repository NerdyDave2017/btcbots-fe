"use client";
import React, { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";
import { useFetchUser } from "@/src/hooks/fetchRequests";
import { useAppContext } from "../../context";
import Sidebar from "./components/sidebar";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const { data } = useFetchUser();

  const { isTabletOrMobile, isOpen, setIsOpen } = useAppContext();

  useEffect(() => {
    if (isTabletOrMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }, [isTabletOrMobile]);

  useEffect(() => {
    if (data) {
      Intercom({
        app_id: "xd17lti9",
        user_hash: data.intercom,
        name: data?.name,
        email: data?.email,
        created_at: new Date(data?.createdAt as string).getTime(),
      });
    } else {
      Intercom({
        app_id: "xd17lti9",
      });
    }
  }, [data]);

  return (
    <div
      className={`w-full  relative ${isTabletOrMobile && "overflow-scroll"} `}
    >
      {/* Sidebar */}
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      {children}
    </div>
  );
};

export default ClientWrapper;
