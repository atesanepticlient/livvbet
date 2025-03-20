import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TiStar } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import game1 from "@/../public/assets/images/casino/live/game-1.jpg";
import game2 from "@/../public/assets/images/casino/live/game-2.jpg";
import game3 from "@/../public/assets/images/casino/live/game-3.jpg";
import game4 from "@/../public/assets/images/casino/live/game-4.jpg";
import game5 from "@/../public/assets/images/casino/live/game-5.jpg";
import game6 from "@/../public/assets/images/casino/live/game-6.jpg";
import game7 from "@/../public/assets/images/casino/live/game-7.jpg";
import game8 from "@/../public/assets/images/casino/live/game-8.jpeg";

import GameCard from "@/components/games/GameCard";

const liveGames = [
  { label: "Mega Sic Bo X", image: game6 },
  { label: "Dragon Tiger", image: game7 },
  { label: "Mega Wheel", image: game1 },
  { label: "Football Auto Roulette", image: game2 },
  { label: "Roulette", image: game3 },
  { label: "Blackjack VIP 1", image: game4 },
  { label: "Dragon Tiger D60", image: game5 },
  { label: "Las Vegas Roulette", image: game8 },
];

const Live = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#214061] p-2 md:px-3 ">
        <div className="flex gap-1 items-center">
          <TiStar className="w-4 h-5 md:w-4 md:h-5 text-white" />
          <h4 className="font-semibold md:font-bold text-xs md:text-sm text-white uppercase">
            Live
          </h4>
        </div>
        <Link
          href="/casino"
          className="text-sm md:text-base text-white flex items-center gap-1"
        >
          <MdKeyboardDoubleArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>
      <div className="p-3">
        <Swiper
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={5}
          className="mySwiper"
        >
          {liveGames.map((game, i) => (
            <SwiperSlide className="max-w-[50%] md:max-w-[20%] pb-8" key={i}>
              <GameCard
                image={game.image}
                label={game.label}
                gameType="live"
                gameName=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Live;
