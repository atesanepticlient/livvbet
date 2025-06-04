"use client";
import GameSectionHeader from "@/components/GameSectionHeader";
import { useGames, useGamesFilter } from "@/lib/store.zustond";
import { Categories, NetEnt } from "@/types/game";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { chunkIntoPairs } from "@/lib/helpers";
import { GameCard } from "@/components/GameCards";
import GameCardLoader from "@/components/loaders/game-card-loader";

const DefalutGames = () => {
  const { getGames } = useGames((state) => state);
  const setCategory = useGamesFilter((state) => state.setCategory);

  const slotsChunk = getGames(Categories.Slots, undefined, 20);
  const popularsChunk = getGames("popular", undefined, 20);

  const slots = chunkIntoPairs<NetEnt>(slotsChunk || []);
  const populars = chunkIntoPairs<NetEnt>(popularsChunk || []);

  return (
    <div className="space-y-6 md:space-y-8">
      {popularsChunk && (
        <div>
          <GameSectionHeader
            seeMore={() => setCategory("popular")}
            title="Popular"
          />
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={"auto"}
            spaceBetween={10}
          >
            {populars?.map((games, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[40%] md:max-w-[20%] flex flex-col space-y-2"
              >
                {games[0] && <GameCard game={games[0]} />}
                {games[1] && <GameCard game={games[1]} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {!popularsChunk && (
        <div className="flex items-center justify-center w-full h-[220px]">
          <GameCardLoader length={10} />
        </div>
      )}

      {slotsChunk && (
        <div>
          <GameSectionHeader
            seeMore={() => setCategory(Categories.Slots)}
            title="3d slots"
          />
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={"auto"}
            spaceBetween={10}
          >
            {slots?.map((games, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[40%] md:max-w-[20%] flex flex-col space-y-2"
              >
                {games[0] && <GameCard game={games[0]} />}
                {games[1] && <GameCard game={games[1]} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {!slotsChunk && (
        <div className="flex items-center justify-center w-full h-[220px]">
          <GameCardLoader length={10} />
        </div>
      )}

      {slotsChunk && (
        <div>
          <GameSectionHeader
            seeMore={() => setCategory(Categories.Slots)}
            title="Slots"
          />
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={"auto"}
            spaceBetween={10}
          >
            {slots?.map((games, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[40%] md:max-w-[20%] flex flex-col space-y-2"
              >
                {games[0] && <GameCard game={games[0]} />}
                {games[1] && <GameCard game={games[1]} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {!slotsChunk && (
        <div className="flex items-center justify-center w-full h-[220px]">
          <GameCardLoader length={10} />
        </div>
      )}

      {slotsChunk && (
        <div>
          <GameSectionHeader
            seeMore={() => setCategory(Categories.Slots)}
            title="Classical slots"
          />
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={"auto"}
            spaceBetween={10}
          >
            {slots?.map((games, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[40%] md:max-w-[20%] flex flex-col space-y-2"
              >
                {games[0] && <GameCard game={games[0]} />}
                {games[1] && <GameCard game={games[1]} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {!slotsChunk && (
        <div className="flex items-center justify-center w-full h-[220px]">
          <GameCardLoader length={10} />
        </div>
      )}
    </div>
  );
};

export default DefalutGames;
