import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight, MdSportsCricket } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import CricketOddsCard from "./CricketOddsCard";

const cricketOddsData = [
  {
    eventName: "India vs Australia - T20 Series",
    format: "T20",
    teams: {
      team1: {
        name: "India",
        flag: "https://flagcdn.com/w40/in.png",
      },
      team2: {
        name: "Australia",
        flag: "https://flagcdn.com/w40/au.png",
      },
    },
    score: {
      team1: "178/4 (18.3)",
      team2: "165/8 (20)",
    },
    odds: {
      team1: 1.75,
      team2: 2.1,
      draw: 5.0,
    },
    redirectPath: "/match/india-australia-t20",
  },
  {
    eventName: "England vs Pakistan - ODI Series",
    format: "ODI",
    teams: {
      team1: {
        name: "England",
        flag: "https://flagcdn.com/w40/gb-eng.png",
      },
      team2: {
        name: "Pakistan",
        flag: "https://flagcdn.com/w40/pk.png",
      },
    },
    score: {
      team1: "312/7 (50)",
      team2: "280/9 (50)",
    },
    odds: {
      team1: 1.5,
      team2: 2.75,
      draw: 6.0,
    },
    redirectPath: "/match/england-pakistan-odi",
  },
  {
    eventName: "Bangladesh vs South Africa - Test Series",
    format: "Test",
    teams: {
      team1: {
        name: "Bangladesh",
        flag: "https://flagcdn.com/w40/bd.png",
      },
      team2: {
        name: "South Africa",
        flag: "https://flagcdn.com/w40/za.png",
      },
    },
    score: {
      team1: "245 & 198",
      team2: "370 & 80/2",
    },
    odds: {
      team1: 3.2,
      team2: 1.45,
      draw: 2.5,
    },
    redirectPath: "/match/bangladesh-southafrica-test",
  },
  {
    eventName: "New Zealand vs Sri Lanka - T20 World Cup",
    format: "T20",
    teams: {
      team1: {
        name: "New Zealand",
        flag: "https://flagcdn.com/w40/nz.png",
      },
      team2: {
        name: "Sri Lanka",
        flag: "https://flagcdn.com/w40/lk.png",
      },
    },
    score: {
      team1: "190/5 (20)",
      team2: "172/9 (20)",
    },
    odds: {
      team1: 1.65,
      team2: 2.25,
      draw: 4.8,
    },
    redirectPath: "/match/newzealand-srilanka-t20",
  },
];

const CricketSlider = () => {
  return (
    <div className="mt-4 md:my-6   ">
      <div className="flex items-center justify-between bg-secondary-foreground p-2 md:px-3 ">
        <div className="flex gap-1 items-center">
          <MdSportsCricket className="w-4 h-5 md:w-4 md:h-5 text-white" />
          <h4 className="font-semibold md:font-bold text-xs md:text-sm text-white uppercase">
            Live Cricket (720)
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
        <Swiper slidesPerView={"auto"} spaceBetween={5} className="mySwiper">
          {cricketOddsData.map((data, i) => (
            <SwiperSlide className="max-w-[320px] " key={i}>
              <CricketOddsCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CricketSlider;
