"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { cn } from "@/lib/utils";

import {
  MdDashboard,
  MdSportsCricket,
  MdFavorite,
  MdEmojiEvents,
  MdBarChart,
  MdFilterListAlt,
} from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaBasketball } from "react-icons/fa6";

const SportsCategories = () => {
  return (
    <div>
      <div className="bg-[#213f61] px-2 md:px-3 py-1 md:py-2">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper pb-8"
        >
          <SwiperSlide className="max-w-max">
            <SportsCategory
              icon={<MdDashboard className="w-5 h-5 md:w-6 md:wh-6" />}
              label="All sports"
              counter={100}
              action={() => console.log("Clicked on all sports")}
              isActive
            />
          </SwiperSlide>

          <SwiperSlide className="max-w-max">
            <SportsCategory
              icon={<MdSportsCricket className="w-5 h-5 md:w-6 md:wh-6" />}
              label="Cricket"
              counter={80}
              action={() => console.log("Clicked on cricket")}
              isActive={false}
            />
          </SwiperSlide>

          <SwiperSlide className="max-w-max">
            <SportsCategory
              icon={<IoIosFootball className="w-5 h-5 md:w-6 md:wh-6" />}
              label="Football"
              counter={15}
              action={() => console.log("Clicked on Football")}
              isActive={false}
            />
          </SwiperSlide>

          <SwiperSlide className="max-w-max">
            <SportsCategory
              icon={<FaBasketball className="w-5 h-5 md:w-6 md:wh-6" />}
              label="Basketball"
              counter={15}
              action={() => console.log("Clicked on Basketball")}
              isActive={false}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" py-1 md:py-2 flex items-center justify-between  gap-2 md:gap-3">
        <div className="flex-1 flex items-center justify-start">
          <SportsSubCategory
            label="top"
            action={() => console.log("Clicked on top")}
            isActive
            icon={<MdBarChart className="w-3 md-3 md:w-4 md:h-4" />}
          />
          <SportsSubCategory
            label="events"
            action={() => console.log("Clicked on top")}
            isActive={false}
            icon={<MdEmojiEvents className="w-3 md-3 md:w-4 md:h-4" />}
          />
          <SportsSubCategory
            label="Favorites"
            action={() => console.log("Clicked on top")}
            isActive={false}
            icon={<MdFavorite className="w-3 md-3 md:w-4 md:h-4" />}
          />
        </div>
        <button className="px-2 py-1 cursor-pointer bg-[#224063] max-w-max">
          <MdFilterListAlt className="text-white w-4 h-4 md:w-5 md:h-5 " />
        </button>
      </div>
    </div>
  );
};

interface SportsCategoryProps {
  icon: React.ReactNode;
  label: string;
  counter: number | string;
  action: () => void;
  isActive: boolean;
}
const SportsCategory = ({
  icon,
  label,
  counter,
  action,
  isActive,
}: SportsCategoryProps) => {
  const handleClick = () => {
    action();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "p-2 relative max-w-max flex justify-center items-center flex-col ",
        `${!isActive ? "text-[#38658e]" : "text-white"}`
      )}
    >
      {icon}
      <span
        className={cn(
          "text-[9px] md:text-[11px]  uppercase mt-1 block text-center",
          `${!isActive ? "text-[#386a99]" : "text-white"}`
        )}
      >
        {label}
      </span>
      <span className="absolute top-0 right-0 text-[7px] md:text-[8px] text-[#38658e]">
        {counter}
      </span>
    </button>
  );
};

interface SportsSubCategoryProps {
  icon: React.ReactNode;
  label: string;
  action: () => void;
  isActive: boolean;
}
const SportsSubCategory = ({
  icon,
  label,
  action,
  isActive,
}: SportsSubCategoryProps) => {
  const handleClick = () => {
    action();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "p-2 gap-1 flex justify-center items-center   md:max-w-max",
        `${
          !isActive
            ? "text-[#c2d5e3] bg-transparent"
            : "text-white bg-[#224063]"
        }`
      )}
    >
      {icon}
      <span
        className={cn(
          "text-[10px] md:text-[11px] font-bold uppercase  block text-center"
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default SportsCategories;
