import React from "react";

import Image from "next/image";
import { IoGameController } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import game1 from "@/../public/assets/images/casino/company-games/game-1.jpg";
import game2 from "@/../public/assets/images/casino/company-games/game-2.webp";
import game3 from "@/../public/assets/images/casino/company-games/game-3.webp";
import game4 from "@/../public/assets/images/casino/company-games/game-4.webp";
import game5 from "@/../public/assets/images/casino/company-games/game-5.webp";
import game6 from "@/../public/assets/images/casino/company-games/game-6.webp";
import game7 from "@/../public/assets/images/casino/company-games/game-7.webp";
import game8 from "@/../public/assets/images/casino/company-games/game-8.webp";
import game9 from "@/../public/assets/images/casino/company-games/game-9.webp";
import game10 from "@/../public/assets/images/casino/company-games/game-10.webp";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const games = [
  {
    image: game1,
    name: "Crash",
  },
  {
    image: game2,
    name: "21",
  },
  {
    image: game3,
    name: "Solitaire",
  },
  {
    image: game4,
    name: "Western slot",
  },
  {
    image: game5,
    name: "Scratch Card",
  },

  {
    image: game6,
    name: "Crystal",
  },
  {
    image: game7,
    name: "Gems Odyssey",
  },
  {
    image: game8,
    name: "Burning Hot",
  },
  {
    image: game9,
    name: "Plinko",
  },
  {
    image: game10,
    name: "Midgard Zombies",
  },
];

const CompanyGames = () => {
  return (
    <div className="mt-4 md:my-6">
      <div className="flex items-center justify-between bg-secondary-foreground p-2 md:px-3 ">
        <div className="flex gap-1 items-center">
          <IoGameController className="w-4 h-5 md:w-4 md:h-5 text-white" />
          <h4 className="font-semibold md:font-bold text-xs md:text-sm text-white uppercase">
            1xbet games
          </h4>
        </div>
        <Link
          href="#"
          className="text-sm md:text-base text-white flex items-center gap-1"
        >
          <MdKeyboardDoubleArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>
      <div className="p-3">
        <Swiper slidesPerView={"auto"} spaceBetween={15} className="mySwiper">
          {games.map((data, i) => (
            <SwiperSlide className="max-w-max md:max-w-max" key={i}>
              <Image
                src={data.image}
                alt={data.name}
                unoptimized
                className="w-[45px] rounded-full md:w-[60px] mx-auto aspect-square"
              />
              <span className="block text-center mt-1 text-white text-xs md:text-sm">
                {data.name}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanyGames;
