"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/assets/images/LogoBig.svg";
import MainLogo from "@/public/assets/images/MainLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ExploreIcon,
  MyBotsIcon,
  ProfitIcon,
  AffiliateIcon,
  NotificationIcon,
  DataIcon,
  HelpIcon,
  LogoutIcon,
  UserIcon,
} from "@/public/assets/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { deleteCookie } from "cookies-next";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useFetchUser, useFetchNotifications } from "@/src/hooks/fetchRequests";
import avatar from "@/public/assets/icons/avatar.svg";

const Sidebar = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  const pathname = usePathname();
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  const queryClient = useQueryClient();

  const { data: userData } = useFetchUser();

  const { data: notifications } = useFetchNotifications();

  const navigation = [
    {
      name: "Home",
      icon: HomeIcon,
      link: "/dashboard",
    },
    {
      name: "Explorer",
      icon: ExploreIcon,
      link: "/dashboard/explorer",
    },
    {
      name: "My Bots",
      icon: MyBotsIcon,
      link: "/dashboard/my-bots",
    },
    {
      name: "Profit Share",
      icon: ProfitIcon,
      link: "/dashboard/profit-share",
    },
    {
      name: "Affiliate Center",
      icon: AffiliateIcon,
      link: "/dashboard/affiliate",
    },
    {
      name: "Notifications",
      icon: NotificationIcon,
      link: "/dashboard/notifications",
    },
    {
      name: "Data Room",
      icon: DataIcon,
      link: "/dashboard/data-room",
    },
    {
      name: "Help",
      icon: HelpIcon,
      link: "/dashboard/help",
    },
  ];

  const user = [
    {
      name: "Logout",
      icon: LogoutIcon,
      link: "/",
    },
    {
      name: userData
        ? userData?.name.length! > 20
          ? `${userData?.name.slice(0, 20)}...`
          : `${userData?.name}`
        : "Guest",
      link: "/dashboard/profile",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Close the sidebar
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleSignout = () => {
    deleteCookie("auth_token");
    queryClient.clear();
    queryClient.invalidateQueries();
    // setIsAuthenticated(false);
    // setUser(null);
    router.push("/login");
    toast.success("Logout successful");
  };

  return (
    <AnimatePresence mode="wait">
      {isTabletOrMobile && (
        <div className="w-[100vw] h-[100vh]  bg-[#00000048] fixed lg:absolute z-50 top-0 bottom-0"></div>
      )}
      <motion.div
        ref={isTabletOrMobile ? ref : null}
        initial={{
          x: isTabletOrMobile ? -300 : 0,
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: -300,
        }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
          type: "spring",
          bounce: 0.25,
        }}
        className="min-w-[288px] lg:min-w-[230px] xl:min-w-[288px] bg-[#e8f0f7] flex flex-col justify-between px-[16px] py-[40px] text-text-light fixed lg:sticky z-50 top-0 bottom-0"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <Link href="/">
            <Image className="w-[150px]" src={MainLogo} alt="Logo" />
          </Link>

          <div className="w-full space-y-[32px] mt-[36px]">
            {navigation.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`${
                  pathname.endsWith(item.link) && "bg-main rounded-full"
                } flex items-center gap-[8px] py-[12px] px-[16px]`}
              >
                <item.icon
                  className={`${
                    pathname.endsWith(item.link)
                      ? "text-[#f4f6f8]"
                      : "text-main"
                  } `}
                />
                <span
                  className={`${
                    pathname.endsWith(item.link) && "text-[#f4f6f8]"
                  } text-base font-normal`}
                >
                  {item.name}
                </span>

                {notifications?.unread! > 0 &&
                  item.name === "Notifications" && (
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E9362B] border-2 border-[#fff]"></span>
                    </span>
                  )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {user.map((item, index) => (
            <button
              onClick={() =>
                item.name === "Logout"
                  ? handleSignout()
                  : router.push(item.link ?? "")
              }
              key={index}
              className={`flex items-center gap-[8px] py-[12px] px-[16px] ${
                index === 1 && "bg-[#f4f6f8] rounded-full"
              } `}
            >
              {item.name !== "Logout" ? (
                <Image
                  alt=""
                  className="w-[25px]  rounded-full"
                  src={(userData ? userData!.avatar : avatar) || avatar}
                  width={100}
                  height={100}
                />
              ) : (
                item.icon && <item.icon />
              )}
              <span
                className={`text-base font-normal ${index === 1 && "text-sm"} `}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
