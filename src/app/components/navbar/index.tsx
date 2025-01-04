"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/LOGO.svg";
import MainLogo from "@/public/assets/images/MainLogo.svg";
import flag from "@/public/assets/images/Circle.svg";
import Link from "next/link";
import Button from "../button";
import Container from "../container";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Bots",
      href: "/bots",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Feature",
      href: "/feature",
    },
    {
      name: "Performance",
      href: "/performance",
    },
    {
      name: "Help",
      href: "/help",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <Container>
      <div className="w-full h-[80px] flex items-center justify-between text-base font-normal">
        <div className="flex items-center gap-[48px]">
          <Link href="/">
            <Image className="w-[130px]" src={MainLogo} alt="Logo" />
          </Link>

          <ul className="hidden lg:inline-flex gap-5">
            {links.map((item, index) => (
              <Link
                className={`${
                  pathname === item.href && "text-touch"
                } hover:text-touch group relative transition-colors ease-in-out`}
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

        <div className="flex items-center gap-[20px]">
          <div className="h-[32px] border-[#bec9d5] border-[1px] px-[8px] py-[6px] flex items-center justify-between rounded cursor-pointer">
            <span className="h-full w-full">
              <Image src={flag} alt="Flag" />
            </span>
            <span className="">EN</span>
          </div>

          <Link href="/signup" className="">
            Sign Up
          </Link>

          <Link href="/login" className="">
            <Button text="Login" className="font-normal text-text-dark" />
          </Link>
          {/* <Button
            onClick={() => router.push("/login")}
            text="Login"
            className="font-normal text-text-dark"
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
