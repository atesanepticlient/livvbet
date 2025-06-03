"use client";
import Footer from "@/components/landing/footer/Footer";
import Header from "@/components/landing/headers/Header";
import Hero from "@/components/landing/hero/Hero";
import Live from "@/components/casino/live";
// import CricketSlider from "@/components/sports/CricketSlider";
// import FootballSlider from "@/components/sports/FootballSlider";
import Slots from "@/components/casino/Slots";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Header />
      <main className="container">
        <Hero />
        {/* <CricketSlider />
        <FootballSlider /> */}
        <Slots />
        <Live />
        {/* <Casino />
        <Live /> */}
        <Footer />
      </main>
    </div>
  );
}
