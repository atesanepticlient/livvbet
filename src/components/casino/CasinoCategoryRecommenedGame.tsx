"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import GameCard from "@/components/games/GameCard";
import { nDArrayMaker } from "@/lib/utils";

interface CasinoGameProps {
  label: string;
  image: any;
}

interface CasinoCategoryRecommenedGameProps {
  gameType: string;
  gamesList: CasinoGameProps[];
  allGamesRedirect: string;
}
const CasinoCategoryRecommenedGame = ({
  gameType,
  gamesList,
  allGamesRedirect,
}: CasinoCategoryRecommenedGameProps) => {
  const [dataInTwoDia] = useState(
    nDArrayMaker<CasinoGameProps>([...gamesList], 4)
  );

  return (
    <div className="mb-1 ">
      <div className="flex justify-between items-center py-2 px-1">
        <span className="text-xs md:text-sm text-white font-bold md:font-semibold">
          {gameType}
        </span>
        <Link
          href={allGamesRedirect}
          className="text-xs md:text-sm text-brand-foreground font-semibold"
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
                    image={game.image}
                    label={game.label}
                    redirect=""
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-4 gap-2">
        {gamesList.map((g, i) => (
          <GameCard key={i} image={g.image} label={g.label} redirect="#" />
        ))}
      </div>
    </div>
  );
};

export default CasinoCategoryRecommenedGame;
