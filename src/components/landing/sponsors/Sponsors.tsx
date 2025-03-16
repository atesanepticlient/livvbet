import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import laliga from "@/../public/assets/images/sponsors/sports/laliga.png";
import psg from "@/../public/assets/images/sponsors/sports/paris-saint-germain.png";
import barcelona from "@/../public/assets/images/sponsors/sports/barcelona.png";
import caf from "@/../public/assets/images/sponsors/sports/caf.png";
import dallas from "@/../public/assets/images/sponsors/sports/dallas-open.png";

import esl from "@/../public/assets/images/sponsors/e-spots/esl.png";
import aurora from "@/../public/assets/images/sponsors/e-spots/aurora.png";
import bestia from "@/../public/assets/images/sponsors/e-spots/bestia.png";
import mibrWhite from "@/../public/assets/images/sponsors/e-spots/mibr_white.png";
import mongolz from "@/../public/assets/images/sponsors/e-spots/mongolz.png";

import Link from "next/link";

const sponsors = {
  sports: [
    {
      redirect: "#",
      image: laliga,
      name: "Laliga",
    },
    {
      redirect: "#",
      image: psg,
      name: "Psg",
    },
    {
      redirect: "#",
      image: barcelona,
      name: "Barcelona",
    },
    {
      redirect: "#",
      image: caf,
      name: "Caf",
    },
    {
      redirect: "#",
      image: dallas,
      name: "Dallas",
    },
  ],

  esports: [
    {
      redirect: "#",
      image: esl,
      name: "Esl",
    },
    {
      redirect: "#",
      image: aurora,
      name: "Aurora",
    },
    {
      redirect: "#",
      image: bestia,
      name: "Bestia",
    },
    {
      redirect: "#",
      image: mibrWhite,
      name: "MibrWhite",
    },
    {
      redirect: "#",
      image: mongolz,
      name: "Mongolz",
    },
  ],
};

const Sponsors = () => {
  return (
    <div className="mb-6 md:mb-8 bg-secondary-foreground px-5 md:px-8 py-6 md:py-8 shadow-sm">
      <div className="flex flex-col justify-center mb-3 md:mb-4">
        <h4 className="text-white text-base md:text-lg font-bold text-center my-3">
          Our Sports Sponsors
        </h4>
        <Swiper
          slidesPerView={"auto"}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sponsors.sports.map((s, i) => (
            <SwiperSlide key={i} className="pb-8 max-w-[25%] md:max-w-[250px]">
              <Link
                href={s.redirect}
                className="bg-secondary h-[60px] py-1  rounded-md flex items-center"
                title={s.name}
              >
                <Image
                  className="w-[35px] md:w-[50px] object-cover mx-auto"
                  src={s.image}
                  placeholder="blur"
                  alt={s.name}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="text-white text-base md:text-lg font-bold text-center my-3">
          Our E- Sports Sponsors
        </h4>
        <Swiper
          slidesPerView={"auto"}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sponsors.esports.map((s, i) => (
            <SwiperSlide key={i} className="pb-8 max-w-[25%] md:max-w-[250px]">
              <Link
                href={s.redirect}
                key={i}
                title={s.name}
                className="bg-secondary h-[60px] py-1  rounded-md flex items-center"
              >
                <Image
                  className="w-[35px] md:w-[50px] object-cover mx-auto"
                  src={s.image}
                  alt={s.name}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="grid sponsor-grid gap-2 md:gap-3 grid-cols-[repeat(3,_minmax(0,1fr))] md:grid-cols-[repeat(5,_minmax(0,1fr))]  items-start justify-center"></div>
      </div>
    </div>

  );
};

export default Sponsors;
