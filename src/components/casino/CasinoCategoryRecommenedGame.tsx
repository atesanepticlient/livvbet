"use client";

import Link from "next/link";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import GameCard from "@/components/games/GameCard";
import { nDArrayMaker } from "@/lib/utils";
import { Game } from "@/provider/type";

interface CasinoCategoryRecommenedGameProps {
  gameType: string;
  gamesList: Game[];
  allGamesRedirect: string;
}
const CasinoCategoryRecommenedGame = ({
  gameType,
  gamesList,
  allGamesRedirect,
}: CasinoCategoryRecommenedGameProps) => {
  const [dataInTwoDia] = useState(nDArrayMaker<Game>([...gamesList], 4));

  return (
    <div className="mb-1 ">
      <div className="flex justify-between items-center py-2 px-1">
        <span className="text-sm md:text-lg text-white font-bold md:font-semibold">
          {gameType}
        </span>
        <Link
          href={allGamesRedirect}
          className="text-sm md:text-lg text-brand-foreground font-semibold"
        >
          All
        </Link>
      </div>

      <div className="md:hidden px-1">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={5}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {dataInTwoDia.map((games, i) => (
            <SwiperSlide key={i} className="w-full pb-8 ">
              <div className="grid grid-cols-2 gap-1">
                {games.map((game, j) => (
                  <GameCard
                    key={j}
                    image={game.ImageUrl}
                    label={game.GameNameDisplay}
                    gameName={game.GameName}
                    gameType={game.GameType}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={5}
          className="mySwiper"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {gamesList.map((g, i) => (
            <SwiperSlide key={i} className="max-w-[20%] pb-8">
              <GameCard
                image={g.ImageUrl}
                label={g.GameNameDisplay}
                gameName={g.GameName}
                gameType={g.GameType}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CasinoCategoryRecommenedGame;
