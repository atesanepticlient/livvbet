import React from "react";

import football from "@/../public/assets/images/features/sm/football.png";
import placeholder from "@/../public/assets/images/features/sm/placeholder.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import { IoIosArrowBack } from "react-icons/io";
const data = [
  {
    name: "EPL",
    placeHolderImage: placeholder,
  },
  {
    name: "Europa League",
    placeHolderImage: placeholder,
  },
  {
    name: "IPL",
    placeHolderImage: placeholder,
  },
];

const FootballFeatures = () => {
  return (
    <div className="md:hidden">
      <Carousel>
        <CarouselContent>
          {data.map((f, i) => (
            <CarouselItem key={i}>
              <div className="relative bg-[#2C6AA3] px-2 py-1 overflow-hidden max-h-[55px] h-[55px] flex items-center">
                <div className="flex items-center gap-2">
                  <IoIosArrowBack className="w-3 h-3 text-white" />
                  <span className="text-sm font-semibold text-white">
                    {f.name}
                  </span>
                </div>
                <Image
                  unoptimized
                  src={f.placeHolderImage}
                  alt={f.name}
                  className="absolute z-20 bottom-0 right-0 w-[65px] h-auto"
                />
                <Image
                  unoptimized
                  src={football}
                  alt={f.name}
                  className="absolute z-10 bottom-0 top-0 right-0 h-auto w-[45%]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FootballFeatures;
