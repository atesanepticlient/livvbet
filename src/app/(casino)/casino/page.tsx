"use client";
import React from "react";
import Header from "@/components/landing/headers/Header";
import TabBar from "@/components/landing/TabBar";
import { IoIosSearch } from "react-icons/io";
import CasinoCategories from "@/components/casino/CasinoCategory";
import CasinoGamesFeatursSlider from "@/components/casino/CasinoGamesFeatursSlider";

import CasinoCategoryRecommenedGame from "@/components/casino/CasinoCategoryRecommenedGame";
import { useFetchGamesListQuery } from "@/lib/features/gamesApiSlice";

const CasinoPage = () => {
  const { data, isLoading } = useFetchGamesListQuery();
  const payload = data?.payload;
  const getGameCategory = (gameType: string, length: number) => {
    return payload?.games
      .filter((game) => game.GameType == gameType)
      .splice(0, length);
  };

  return (
    <div className="bg-[#0B2B44] min-h-screen pb-24 md:pb-32">
      <Header />
      {!isLoading && data && (
        <main className="container">
          <div className="flex bg-[#213f61] items-center justify-between px-2 py-2 ">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-bold md:font-semibold text-white">
                CASINO
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 cursor-pointer">
                <IoIosSearch className="text-white w-5 h-5 " />
              </button>
            </div>
          </div>
          <CasinoCategories />
          <CasinoGamesFeatursSlider />

          <div>
            <CasinoCategoryRecommenedGame
              gameType="Slots"
              allGamesRedirect="#"
              gamesList={getGameCategory("Slots", 10)!}
            />
            <CasinoCategoryRecommenedGame
              gameType="Bingo"
              allGamesRedirect="#"
              gamesList={getGameCategory("Bingo", 10)!}
            />
            <CasinoCategoryRecommenedGame
              gameType="Mines"
              allGamesRedirect="#"
              gamesList={getGameCategory("Mines", 10)!}
            />
            <CasinoCategoryRecommenedGame
              gameType="Rng"
              allGamesRedirect="#"
              gamesList={getGameCategory("Rng", 10)!}
            />
          </div>
        </main>
      )}

      <TabBar />
    </div>
  );
};

export default CasinoPage;
