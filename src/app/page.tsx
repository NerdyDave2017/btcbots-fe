"use client";
import Hero from "./landing/hero";
import Exchanges from "./landing/exchanges";
import How from "./landing/how";
import OurBots from "./landing/our-bots";
import Trading from "./landing/trading";
import Statistics from "./landing/statistics";
import Affiliate from "./landing/affiliate";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Exchanges />
      <How />
      <OurBots />
      <Trading />
      <Statistics />
      <Affiliate />
      <Footer />
    </>
  );
}
