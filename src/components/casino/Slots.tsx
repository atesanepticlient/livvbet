"use client";
import React from "react";
import GameSectionHeader from "../GameSectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useGames } from "@/lib/store.zustond";
import { GameCard } from "../GameCards";
import { Categories } from "../types/game";
import { redirect } from "next/navigation";
import GamesLoader from "../loaders/games-loader";

const Slots = () => {
  const { getGames } = useGames((state) => state);

  const games = getGames(Categories.Slots, undefined, 20);
  return (
    <div>
      <GameSectionHeader seeMore={() => redirect("/casino")} title="Slots" />

      {games && (
        <>
          <Swiper slidesPerView={"auto"} spaceBetween={5} className="mySwiper">
            {games?.slice(0, 10).map((game, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[40.33%] md:max-w-[20%] pb-8"
              >
                <GameCard game={game} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper slidesPerView={"auto"} spaceBetween={5} className="mySwiper">
            {games?.slice(10, 20).map((game, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[40.33%] md:max-w-[20%] pb-8"
              >
                <GameCard game={game} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      {!games && <GamesLoader />}
    </div>
  );
};

export default Slots;
