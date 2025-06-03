"use client";
import React from "react";
import PrimaryButton from "./buttons/primary-button";

const GameSectionHeader = ({
  seeMore,
  title,
}: {
  seeMore?: () => void;
  title: string;
}) => {
  return (
    <header className="flex items-center justify-between py-3 md:py-4 lg:py-5 px-2 md:px-0 ">
      <h3 className="relative text-lg md:text-xl uppercase pl-3 font-medium text-[FFCD00] tracking-wide">
        {title}

        <div className="w-[3px] rounded-sm h-full absolute top-0 left-0 bg-[#FFCD00]"></div>
      </h3>

      {seeMore && (
        <PrimaryButton onClick={() => seeMore()}>Show All</PrimaryButton>
      )}
    </header>
  );
};

export default GameSectionHeader;
