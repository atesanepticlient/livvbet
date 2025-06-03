import React from "react";
import SearchGame from "./search-game";
import FilterOpenButton from "./filter-open-button";
import FilterCasino from "./filter-casino";
import Slider from "../slider";

const SlotsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="">
        <main className=" ">
          <Slider
            sliders={[
              {
                image: "./assets/images/features/casino/casino-bonus.jpg",
                link: "#",
              },
              {
                image:
                  "./assets/images/features/casino/casino-vip-cashback.jpg",
                link: "#",
              },
            ]}
          />
          <div className=" flex items-start">
            <div className="hidden md:block md:w-[35%] ">
              <FilterCasino />
            </div>
            <div className="p-2 md:p-3 lg:p-5 w-full md:w-[75%] min-h-[50vh] casino">
              <div className="flex items-center justify-between mb-8 md:mb-2">
                <SearchGame />
                <FilterOpenButton />
              </div>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SlotsLayout;
