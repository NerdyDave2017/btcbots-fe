import React from "react";
import Container from "../components/container";
import Image from "next/image";
import Logo from "@/public/assets/images/LOGO.svg";
import flag from "@/public/assets/images/Circle.svg";
import Link from "next/link";
import Button from "../../components/button";
import Navbar from "./components/Navbar";

const Hero = () => {
  return (
    <div className="h-[832px] bg-dark-background text-text-dark font-light relative">
      <div className="top-[47.5px] right-[27.2px] absolute w-[86.54px] h-[86.54px] bg-[#006fe3] rounded-full blur-[100px]" />
      <Container>
        {/* Nav Bar */}
        <Navbar />

        {/* Hero */}
        <div className=""></div>
      </Container>
    </div>
  );
};

export default Hero;
