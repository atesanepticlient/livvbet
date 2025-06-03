"use client";
import React from "react";
import GameSectionHeader from "../GameSectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useGames } from "@/lib/store.zustond";
import { GameCard } from "../GameCards";
import { Categories } from "../types/game";

const Hot = () => {
  const { getGames } = useGames((state) => state);

  const games = getGames(Categories.FastGames, undefined, 20);
  return (
    <div>
      <GameSectionHeader seeMore={() => console.log("CLIDED")} title="Hot" />
      <Swiper slidesPerView={"auto"} spaceBetween={5} className="mySwiper">
        {games?.slice(0, 10).map((game, i) => (
          <SwiperSlide key={i} className="max-w-[40.33%] md:max-w-[20%] pb-8">
            <GameCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper slidesPerView={"auto"} spaceBetween={5} className="mySwiper">
        {games?.slice(10, 20).map((game, i) => (
          <SwiperSlide key={i} className="max-w-[40.33%] md:max-w-[20%] pb-8">
            <GameCard game={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hot;
