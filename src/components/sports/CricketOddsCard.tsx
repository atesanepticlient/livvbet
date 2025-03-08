/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdSportsCricket } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { CricketOddsCardProps } from "../types";

const CricketOddsCard = ({ data }: CricketOddsCardProps) => {
  const { eventName, format, teams, score, odds, redirectPath } = data;
  return (
    <Link
      href={redirectPath}
      className="bg-white  rounded-md block p-2 md:p-3 shadow-sm"
    >
      <div className="flex justify-between items-center border-b border-b-border pb-2">
        <div className="flex items-center gap-2 ">
          <MdSportsCricket className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          <span className="text-accent text-sm md:text-base">
            Event in progress / {format}
          </span>
        </div>
        <HiDotsVertical className="w-4 h-4 md:w-5 md:h-5 text-accent" />
      </div>

      <div>
        <span className="text-xs text-accent">{eventName}</span>
        <div className="py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                src={teams.team1.flag}
                alt={teams.team1.name}
                className="max-w-[15px]  object-cover"
              />
              <span className="text-sm font-semibold text-accent">
                {teams.team1.name}
              </span>
            </div>
            <span className="text-sm font-semibold text-accent ">
              {score.team1}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                src={teams.team2.flag}
                alt={teams.team2.name}
                className="max-w-[15px]  object-cover"
              />
              <span className="text-sm font-semibold text-accent">
                {teams.team2.name}
              </span>
            </div>
            <span className="text-sm font-semibold text-accent">
              {score.team2}
            </span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <button className="flex-1 py-1 rounded-sm bg-[#E9EEF2] font-medium  flex flex-col items-center justify-center text-accent text-[10px] md:text-sm">
            <span className="opacity-50 font-normal">W1</span> {odds.team1}
          </button>
          <button className="flex-1 py-1 rounded-sm bg-[#E9EEF2] font-medium flex flex-col items-center justify-center text-accent text-[10px] md:text-sm">
            <span className="opacity-50 font-normal">Draw</span> {odds.draw}
          </button>
          <button className="flex-1 py-1 rounded-sm bg-[#E9EEF2] font-medium flex flex-col items-center justify-center text-accent text-[10px] md:text-sm">
            <span className="opacity-50 font-normal">W2</span> {odds.team2}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CricketOddsCard;
