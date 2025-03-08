"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/LOGO.svg";
import MainLogo from "@/public/assets/images/btcbots.svg";
import MainLogoBlack from "@/public/assets/images/btcbots1.svg";
import flag from "@/public/assets/images/Circle.svg";
import Link from "next/link";
import Button from "../button";
import Container from "../container";
import { useFetchUser } from "@/src/hooks/fetchRequests";
import { MenuIcon } from "@/public/assets/icons";
import { useTranslations } from "next-intl";
import LocaleDropdown from "../../landing/hero/components/localeDropdown";

const Navbar = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("Nav");

  const { data: user } = useFetchUser();

  const links = [
    {
      name: t("0"),
      href: "/",
    },
    {
      name: t("1"),
      href: "/about-us",
    },
    {
      name: t("2"),
      href: "/contact-us",
    },
  ];
  console.log(pathname);
  return (
    <Container>
      <div className="w-full h-[80px] flex items-center justify-between text-base font-normal">
        <div className="flex items-center gap-[48px]">
          <Link href="/">
            <Image
              className="w-[130px] lg:w-[180px]"
              src={
                pathname.match(new RegExp(`^/(en|es)$`))
                  ? MainLogo
                  : MainLogoBlack
              }
              alt="Logo"
            />
          </Link>

          <ul className="hidden lg:inline-flex gap-5">
            {links.map((item, index) => (
              <Link
                className={`${
                  pathname.match(
                    new RegExp(
                      `^/(en|es)${item.href === "/" ? "$" : item.href}`
                    )
                  ) && "text-touch"
                } hover:text-touch group relative transition-colors ease-in-out`}
                href={item.href}
                key={index}
              >
                <li>{item.name}</li>
                <span
                  className={`absolute left-0 -translate-x-0 bottom-0 w-0 h-[1.5px] ${
                    pathname.match(
                      new RegExp(
                        `^/(en|es)${item.href === "/" ? "$" : item.href}`
                      )
                    ) && "w-1/2 bg-touch"
                  } bg-touch transition-all duration-300 ease-in-out group-hover:w-1/2`}
                ></span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-[20px]">
          <LocaleDropdown />
          {/* <div className="h-[32px] border-[#bec9d5] border-[1px] px-[8px] py-[6px] flex items-center justify-between rounded cursor-pointer">
            <span className="h-full w-full">
              <Image src={flag} alt="Flag" />
            </span>
            <span className="">EN</span>
          </div> */}

          {!user && (
            <Link href="/signup" className="hidden lg:inline-flex">
              {t("3")}
            </Link>
          )}

          {!user && (
            <Link href="/login" className="hidden lg:inline-flex">
              <Button text={t("4")} className="font-normal text-text-dark" />
            </Link>
          )}
          {user && (
            <Link href="/dashboard" className="hidden lg:inline-flex">
              <Button text={t("5")} className="font-normal text-text-dark" />
            </Link>
          )}

          <MenuIcon
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-6 h-6"
          />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
