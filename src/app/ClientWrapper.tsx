"use client";
import React, { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";
import { useFetchUser } from "@/src/hooks/fetchRequests";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const { data } = useFetchUser();

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

  return <>{children}</>;
};

export default ClientWrapper;
