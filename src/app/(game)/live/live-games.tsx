"use client";
import { GameCard } from "@/components/GameCards";
import GameSectionHeader from "@/components/GameSectionHeader";
import GameCardLoader from "@/components/loaders/game-card-loader";
import { useGames } from "@/lib/store.zustond";
import { Categories } from "@/types/game";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const LiveGames = () => {
  const [search, setValue] = useState("");

  const getGames = useGames((state) => state.getGames);

  const games = getGames(Categories.LiveDealers, search, undefined);
  console.log({ games });
  return (
    <div className="min-h-screen">
      <div className="w-[220px] md:w-[250px] relative px-2 md:px-2">
        <input
          value={search}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          className="bg-[#141B1F]  outline-none rounded-sm py-2 lg:py-3 pl-9 pr-4 text-sm placeholder:text-[#999999] text-[#999999] border border-[#30353b] w-full"
        />
        <IoSearch className="w-4 h-4 text-white absolute left-3 top-1/2 -translate-y-1/2" />
      </div>

      <GameSectionHeader title="Live Casino" />

      {games && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 px-2 md:px-0">
          {games.map((game, i) => (
            <GameCard game={game} gameType="live" key={i} />
          ))}
        </div>
      )}

      {games && games.length == 0 && (
        <p className="text-sm md:text-base lg:text-lg font-medium text-white text-center tracking-wide py-4 lg:py-6">
          Nothing found
        </p>
      )}

      {!games && (
        <div className="flex items-center justify-center w-full h-[290px] mt-44 md:mt-5 lg:mt-0">
          <GameCardLoader length={10} />
        </div>
      )}
    </div>
  );
};

export default LiveGames;
