"use client";
import React from "react";
import Header from "@/components/landing/headers/Header";
import TabBar from "@/components/landing/TabBar";
import { IoIosSearch } from "react-icons/io";
import CasinoCategories from "@/components/casino/CasinoCategory";

import PageHeader from "@/components/PageHeader";
import CasinoSearch from "@/components/casino/CasinoSearch";
import { useCasinoSearch } from "@/store/useStore";

const CasinoPage = () => {
  const { isSearchShow, setSearchShow } = useCasinoSearch((state) => state);
  return (
    <div className="bg-[#0B2B44] min-h-screen pb-24 md:pb-32">
      <Header />

      <main className="container">
        <div className="relative">
          <PageHeader
            label="My Messages"
            rightIcon={<IoIosSearch className="text-white w-5 h-5" />}
            rightAction={() => setSearchShow(true)}
          />
          {isSearchShow && <CasinoSearch />}
        </div>

        <CasinoCategories />
        {/* <CasinoGamesFeatursSlider /> */}
      </main>

      <TabBar />
    </div>
  );
};

export default CasinoPage;
