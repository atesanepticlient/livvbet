"use client";
import Footer from "@/components/landing/footer/Footer";
import Header from "@/components/landing/headers/Header";
import Hero from "@/components/landing/hero/Hero";
import TabBar from "./../components/landing/TabBar";
import SitePreLoader from "@/components/loaders/SitePreLoader";
import { useEffect, useState } from "react";
import Casino from "@/components/games/casino/Casino";
import Live from "@/components/games/live/Live";
import CricketSlider from "@/components/sports/CricketSlider";
import FootballSlider from "@/components/sports/FootballSlider";
import CompanyGames from "@/components/landing/CompanyGames";
import FootballFeatures from "@/components/landing/FootballFeatures";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // window.addEventListener("load", () => {
    //   console.log("called")
    //   setPageLoaded(true);
    // });

    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-[#0f324f] min-h-screen">
      <Header />
      <main className="container">
        <Hero />
        <FootballFeatures />
        <CricketSlider />
        <FootballSlider />
        <CompanyGames />
        <Casino />
        <Live />
        <Footer />
      </main>
      <TabBar />

      {!pageLoaded && <SitePreLoader />}
    </div>
  );
}
