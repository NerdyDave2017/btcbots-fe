"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/assets/images/LogoBig.svg";
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

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

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
    },
    {
      name: "Jordan Great",
      icon: UserIcon,
      link: "/dashboard/profile",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          x: -300,
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
            <Image src={Logo} alt="Logo" />
          </Link>

          <div className="w-full space-y-[32px] mt-[36px]">
            {navigation.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`${
                  pathname === item.link && "bg-main rounded-full"
                } flex items-center gap-[8px] py-[12px] px-[16px]`}
              >
                <item.icon
                  className={`${
                    pathname === item.link ? "text-[#f4f6f8]" : "text-main"
                  } `}
                />
                <span
                  className={`${
                    pathname === item.link && "text-[#f4f6f8]"
                  } text-base font-normal`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {user.map((item, index) => (
            <button
              onClick={() => router.push(item.link ?? "")}
              key={index}
              className={`flex items-center gap-[8px] py-[12px] px-[16px] ${
                index === 1 && "bg-[#f4f6f8] rounded-full"
              } `}
            >
              <item.icon className="" />
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
