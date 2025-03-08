"use client";
import Link from "next/link";
import React from "react";
import { MdSportsCricket } from "react-icons/md";
import { IoFootballSharp } from "react-icons/io5";
import { FaBasketball } from "react-icons/fa6";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
interface BetSlipCardProps {
  data: {
    eventName: string;
    sports: string;
    teams: {
      team1: {
        name: string;
        flag: string;
      };
      team2: {
        name: string;
        flag: string;
      };
    };
    odds: {
      team1: string;
      odd: number;
    };
    redirectPath: string;
    deleteAction: () => void;
  };
}
const BetSlipCard = ({ data }: BetSlipCardProps) => {
  const { eventName, teams, odds, redirectPath, sports, deleteAction } = data;
  return (
    <Link
      href={redirectPath}
      className="p-2 border-l border-l-primary bg-white/90 rounded-sm shadow-sm"
    >
      <span className="flex items-center gap-1 text-accent text-sm md:text-sm font-normal mb-1">
        {sports == "cricket" ? (
          <MdSportsCricket className="w-3 h-3 md:w-4 md:h-4 " />
        ) : sports == "football" ? (
          <IoFootballSharp className="w-3 h-3 md:w-4 md:h-4 " />
        ) : (
          <FaBasketball className="w-3 h-3 md:w-4 md:h-4 " />
        )}
        {eventName}
      </span>
      <div className="flex items-center justify-between mb-2 ">
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <Image
              src={teams.team1.flag}
              alt={teams.team1.name}
              width={15}
              height={10}
              className="max-w-[15px]"
            />
            <span className="text-xs md:text-sm font-semibold text-accent">
              {teams.team1.name}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              width={15}
              height={10}
              src={teams.team2.flag}
              alt={teams.team2.name}
              className="max-w-[15px]"
            />
            <span className="text-xs md:text-sm font-semibold text-accent">
              {teams.team2.name}
            </span>
          </div>
        </div>
        <button className="p-2" onClick={deleteAction}>
          <RiDeleteBin6Fill className="w-3 h-3 md:w-4 md:h-4 text-accent" />
        </button>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-xs md:text-sm font-semibold  text-primary">
          {odds.team1}
        </span>
        <span className="text-xs md:text-sm font-semibold  text-primary">
          {odds.odd}
        </span>
      </div>
    </Link>
  );
};

export default BetSlipCard;
