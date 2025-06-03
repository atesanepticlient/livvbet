"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import PrimaryButton from "@/components/buttons/primary-button";

const Featurs = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full slider-1 md:rounded-3xl overflow-hidden">
            <div className="shadow-left w-full h-full flex flex-col justify-center pl-20 md:pl-24">
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                Your 100% welcome bonus
              </h2>
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                up to 1200bdt
              </h2>
              <p className="text-white text-sm uppercase my-4">
                and emotions to the game
              </p>
              <PrimaryButton className="w-max">FIND OUT MORE</PrimaryButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full slider-2 md:rounded-3xl overflow-hidden">
            <div className="shadow-left w-full h-full flex flex-col justify-center pl-20 md:pl-24">
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                Grand slam - grand win
              </h2>

              <p className="text-white text-sm  my-4">Game set, Free</p>
              <PrimaryButton className="w-max">TAKE A PART</PrimaryButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full slider-3 md:rounded-3xl overflow-hidden">
            <div className="w-full slider-2  overflow-hidden">
              <div className="shadow-left w-full h-full flex flex-col justify-center pl-20 md:pl-24">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                  Grand slam - grand win
                </h2>

                <p className="text-white text-sm  my-4">Game set, Free</p>
                <PrimaryButton className="w-max">TAKE A PART</PrimaryButton>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Featurs;
