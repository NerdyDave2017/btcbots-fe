"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/assets/images/LogoBig.svg";
import MainLogo from "@/public/assets/images/MainLogo.svg";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
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
import { useFetchUser } from "@/src/hooks/fetchRequests";
import Button from "../button";

const Sidebar = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  const pathname = usePathname();

  const ref = useRef<HTMLDivElement>(null);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  const { data: userData } = useFetchUser();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact Us",
      href: "/contact",
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
        className="min-w-[300px]  bg-[#090909] flex flex-col justify-between px-[16px] py-[40px] text-text-light fixed  z-50 top-0 bottom-0"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <Link href="/">
            <Image className="w-[150px]" src={MainLogo} alt="Logo" />
          </Link>

          <div className="w-full space-y-[32px] mt-[36px]">
            <ul className="flex flex-col gap-8 text-text-dark">
              {links.map((item, index) => (
                <Link
                  className={`${
                    pathname === item.href && "text-touch"
                  } hover:text-touch group relative transition-colors ease-in-out w-fit`}
                  href={item.href}
                  key={index}
                >
                  <li>{item.name}</li>
                  <span
                    className={`absolute left-0 -translate-x-0 bottom-0 w-0 h-[1.5px] ${
                      pathname === item.href && "w-1/2 bg-touch"
                    } bg-touch transition-all duration-300 ease-in-out group-hover:w-1/2`}
                  ></span>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-[20px]">
          {!userData && (
            <Link href="/signup" className="w-full text-center text-text-dark">
              Sign Up
            </Link>
          )}

          {!userData && (
            <Link href="/login" className="w-full">
              <Button
                text="Login"
                className="w-full font-normal text-text-dark"
              />
            </Link>
          )}
          {userData && (
            <Link href="/dashboard" className="w-full">
              <Button
                text="Dashboard"
                className="w-full font-normal text-text-dark"
              />
            </Link>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
