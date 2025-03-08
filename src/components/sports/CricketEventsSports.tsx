import React from "react";
import { MdSportsCricket } from "react-icons/md";
import { MdFavoriteBorder, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CricketOddsCardProps } from "../types";
import CricketOddsCard from "./CricketOddsCard";

interface CricketEventsSportsProps {
  eventName: string;
  makeFavorit: () => void;
  nextAction: () => void;
  matchData: CricketOddsCardProps[];
}

const CricketEventsSports = ({
  eventName,
  matchData,
}: CricketEventsSportsProps) => {
  return (
    <div className="pb-3 md:pb-5">
      <div className="p-1 bg-[#c2d5e3] flex items-center justify-between mb-1">
        <div className="gap-1 flex items-center">
          <MdSportsCricket className="w-3 h-3 md:w-4 md:h-4 text-accent" />
          <span className="max-w-[250px] md:max-w-[320px] text-xs  md:text-sm text-accent font-bold">
            {eventName}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 ">
            <MdFavoriteBorder className="w-4 h-4 md:w-4 md:h-4 text-accent" />
          </button>

          <button className="p-2 ">
            <MdKeyboardDoubleArrowRight className="w-4 h-4 md:w-4 md:h-4 text-accent" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {matchData.map((match, i) => (
          <CricketOddsCard data={match.data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CricketEventsSports;
