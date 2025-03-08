import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdCasino } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import game1 from "@/../public/assets/images/casino/slot/game-1.jpg";
import game2 from "@/../public/assets/images/casino/slot/game-2.jpg";
import game3 from "@/../public/assets/images/casino/slot/game-3.jpg";
import game4 from "@/../public/assets/images/casino/slot/game-4.jpg";
import game5 from "@/../public/assets/images/casino/slot/game-5.png";
import game6 from "@/../public/assets/images/casino/slot/game-6.jpg";
import GameCard from "@/components/games/GameCard";
const casinoGames = [
  { label: "Lion Gems: Hold & Win", image: game1 },
  { label: "Hit Coins 2 Hold and Spin", image: game2 },
  { label: "Cash Streak", image: game3 },
  { label: "Wolf and Sheep", image: game4 },
  { label: "Fortune Numbers", image: game5 },
  { label: "Golden Crown", image: game6 },
];

const Casino = () => {
  return (
    <div className="mt-4 md:my-6 ">
      <div className="flex items-center justify-between bg-secondary-foreground p-2 md:px-3 ">
        <div className="flex gap-1 items-center">
          <MdCasino className="w-4 h-5 md:w-4 md:h-5 text-white" />
          <h4 className="font-semibold md:font-bold text-xs md:text-sm text-white uppercase">
            Casino
          </h4>
        </div>
        <Link
          href="#"
          className="text-sm md:text-base text-white flex items-center gap-1"
        >
          <MdKeyboardDoubleArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>

      <div className="p-4">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={5}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {casinoGames.map((game, i) => (
            <SwiperSlide className="max-w-[50%] md:max-w-[20%] pb-8" key={i}>
              <GameCard image={game.image} label={game.label} redirect="#" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Casino;
