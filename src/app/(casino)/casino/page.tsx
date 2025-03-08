import React from "react";
import Header from "@/components/landing/headers/Header";
import TabBar from "@/components/landing/TabBar";
import { IoIosSearch } from "react-icons/io";
import CasinoCategories from "@/components/casino/CasinoCategory";
import CasinoGamesFeatursSlider from "@/components/casino/CasinoGamesFeatursSlider";

import game1 from "@/../public/assets/images/casino/slot/game-1.jpg";
import game2 from "@/../public/assets/images/casino/slot/game-2.jpg";
import game3 from "@/../public/assets/images/casino/slot/game-3.jpg";
import game4 from "@/../public/assets/images/casino/slot/game-4.jpg";
import game5 from "@/../public/assets/images/casino/slot/game-5.png";
import game6 from "@/../public/assets/images/casino/slot/game-6.jpg";
import CasinoCategoryRecommenedGame from "@/components/casino/CasinoCategoryRecommenedGame";

const casinoGames = [
  { label: "Lion Gems: Hold & Win", image: game1 },
  { label: "Hit Coins 2 Hold and Spin", image: game2 },
  { label: "Cash Streak", image: game3 },
  { label: "Wolf and Sheep", image: game4 },
  { label: "Fortune Numbers", image: game5 },
  { label: "Golden Crown", image: game6 },
];

const CasinoPage = () => {
  return (
    <div className="bg-[#0B2B44] min-h-screen pb-24 md:pb-32">
      <Header />
      <main className="container">
        <div className="flex bg-[#213f61] items-center justify-between px-2 py-2 ">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-bold md:font-semibold text-white">CASINO</span>
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
            gameType="Casino"
            allGamesRedirect="#"
            gamesList={casinoGames}
          />
          <CasinoCategoryRecommenedGame
            gameType="Live Casino"
            allGamesRedirect="#"
            gamesList={casinoGames}
          />
          <CasinoCategoryRecommenedGame
            gameType="Slots"
            allGamesRedirect="#"
            gamesList={casinoGames}
          />
          <CasinoCategoryRecommenedGame
            gameType="Mines"
            allGamesRedirect="#"
            gamesList={casinoGames}
          />
        </div>
      </main>
      <TabBar />
    </div>
  );
};

export default CasinoPage;
