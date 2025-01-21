import React from "react";
import Container from "../container";
import Logo from "@/public/assets/images/LOGO.svg";
import MainLogo from "@/public/assets/images/MainLogo.svg";
import { Facebook, Instagram, TikTok, YouTube, X } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // const socials = [
  //   {
  //     name: "Facebook",
  //     icon: Facebook,
  //     link: "https://www.facebook.com/",
  //   },
  //   {
  //     name: "Instagram",
  //     icon: Instagram,
  //     link: "https://www.instagram.com/",
  //   },
  //   {
  //     name: "TikTok",
  //     icon: TikTok,
  //     link: "https://www.tiktok.com/",
  //   },
  //   {
  //     name: "YouTube",
  //     icon: YouTube,
  //     link: "https://www.youtube.com/",
  //   },
  //   {
  //     name: "X",
  //     icon: X,
  //     link: "https://www.X.com/",
  //   },
  // ];

  return (
    <div className="py-[70px] bg-dark-background text-text-dark">
      <Container>
        <div className="w-full flex flex-col md:flex-row items-start justify-between">
          <div className="mb-12">
            <Image className="mt-[5px] w-[130px]" src={MainLogo} alt="Logo" />
          </div>
          <div className="">
            <nav className="flex flex-col md:flex-row justify-center items-start gap-12 text-[#ebeef1] text-lg font-normal">
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
              <div className="flex flex-col gap-6">
                <div className="text-main text-lg font-normal">Learn more</div>
                <div className="flex flex-col gap-4">
                  <Link href="https://usdbots.com">USDbots.com</Link>
                  <Link href="/knowledge-base">Knowledge Base</Link>
                  {/* <Link href="/performance">Performance</Link> */}
                </div>
              </div>
            </nav>
          </div>
          {/* <div className="">
            <p className="text-lg mb-[16px]">Connect with us</p>
            <div className="flex">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4"
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div> */}
        </div>
        <div className="text-center text-[#ebeef1] text-base font-light mt-[60px]">
          <p className="">© 2024 Cryptobots.io LLC Miami Beach, FL 33141</p>{" "}
          <p className="mt-[22px]">All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
