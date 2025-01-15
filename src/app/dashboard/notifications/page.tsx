"use client";
import React, { useEffect } from "react";
import Header from "../components/header";
import { useFetchUser, useFetchNotifications } from "@/src/hooks/fetchRequests";
import { useReadNotifications } from "@/src/hooks/postRequests";
import { isAxiosError } from "axios";
import { getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { formatDate } from "@/src/lib";
import NotificationSkeleton from "./notification-skeleton";

const page = () => {
  const token = getCookie("auth_token");
  const { data } = useFetchUser();
  const {
    data: notifications,
    isSuccess,
    isError,
    isRefetching,
    isLoading,
    error,
  } = useFetchNotifications();

  const { mutate } = useReadNotifications();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!!token && data) {
      mutate(data?._id as string, {});
    }
  }, [pathname, router, token, data]);

  useEffect(() => {
    // if (isSuccess) {
    //   toast.success("Notifications fetched successfully");
    // }

    if (isError) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        console.error(error);
        toast.error("An unexpected error occurred");
      }
    }
  }, [isSuccess, isError]);

  const transactions = [
    {
      type: "Trade Executed Successfully",
      message: "Your buy order for 1 BTC at $20,000 has been filled.",
      date: "28th November, 2024",
    },
    {
      type: "Order Failed",
      message:
        "Your order could not be filled due to insufficient funds. Please deposit more funds to your account.",
      date: "28th November, 2024",
    },
  ];
  return (
    <div className="w-full ">
      <Header text="Notifications" showArrow={false} />

      <div className="w-full px-5 lg:px-[48px]">
        {isLoading && <NotificationSkeleton />}
        {!isLoading && (
          <div className="w-full  flex-col justify-center items-start gap-4 inline-flex">
            {notifications?.notifications.map((notification, index) => (
              <div
                key={index}
                className="self-stretch bg-[#eaf0f6] rounded-2xl py-4 md:py-8 px-[18px] flex-col justify-start items-start gap-4 flex"
              >
                <div className="text-[#090909] text-base font-medium font-['Sora']">
                  {/* {transaction.type} */}
                </div>
                <div className="self-stretch text-[#090909] text-sm font-light font-['Sora']">
                  {notification.message}
                </div>
                <div className="self-stretch text-right text-[#3c3c43]/60 text-xs font-light font-['Sora']">
                  {formatDate(
                    notification.createdAt.toISOString(),
                    "MMM DD, YYYY. h:mm a"
                  )}
                </div>
              </div>
            ))}
            {notifications?.notifications.length === 0 && (
              <div className="w-full bg-[#eaf0f6] rounded-2xl py-4 md:py-8 px-[18px] flex-col justify-center items-center gap-4 flex">
                <p className="text-[#090909] text-base font-normal font-['Sora']">
                  No notifications
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
