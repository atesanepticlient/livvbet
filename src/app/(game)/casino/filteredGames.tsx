"use client";
import { GameCard } from "@/components/GameCards";
import GameSectionHeader from "@/components/GameSectionHeader";
import GamesLoader from "@/components/loaders/games-loader";
import { useGames, useGamesFilter } from "@/lib/store.zustond";
import React from "react";

const FilteredGames = ({
  categoryParams = "",
}: {
  categoryParams?: string;
}) => {
  const { search, category, provider } = useGamesFilter((state) => state);
  const { getGames } = useGames((state) => state);

  const gamesList = getGames(
    categoryParams || category,
    search,
    undefined,
    provider
  );

  return (
    <div>
      {" "}
      <GameSectionHeader title="All" />
      {gamesList && (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {gamesList.map((game, i) => (
            <GameCard game={game} key={i} />
          ))}
        </div>
      )}
      {gamesList && gamesList.length == 0 && (
        <p className="text-sm md:text-base lg:text-lg font-medium text-white text-center tracking-wide py-4 lg:py-6">
          Nothing found
        </p>
      )}
      {!gamesList && (
        <div className="flex items-center justify-center w-full h-[290px]">
          <GamesLoader />
        </div>
      )}
    </div>
  );
};

export default FilteredGames;
