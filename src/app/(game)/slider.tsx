/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Slider = ({
  sliders,
}: {
  sliders: { image: string; link: string }[];
}) => {
  return (
    <div className="mb-3 md:mb-5 lg:mb-8">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        {sliders.map((slider, i) => (
          <SwiperSlide key={i}>
            <a
              href={slider.link}
              style={{
                background: `url(
                  "${slider.image}"
                )`,
              }}
              className="block w-full  md:rounded-sm overflow-hidden"
            >
              <img
                src={slider.image}
                className="w-full min-h-[110px] object-fill aspect-auto select-none"
              />
              {/* <div className="shadow-left w-full h-full flex flex-col justify-center pl-20 md:pl-24"></div> */}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
