"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider1 from "@/../public/assets/images/casino/features/slider-1.jpg";
import slider2 from "@/../public/assets/images/casino/features/slider-2.jpg";
import slider3 from "@/../public/assets/images/casino/features/slider-3.jpg";

const CasinoGamesFeatursSlider = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper pb-8"
      >
        <SwiperSlide>
          <Image
            src={slider1}
            alt="Slider"
            className="w-full aspect-[10/3] object-cover"
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2}
            alt="Slider"
            className="w-full aspect-[10/3] object-cover"
            placeholder="blur"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            alt="Slider"
            className="w-full aspect-[10/3] object-cover"
            placeholder="blur"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CasinoGamesFeatursSlider;
