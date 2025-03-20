"use client";
import GameCard from "@/components/games/GameCard";
import { useFetchGamesListQuery } from "@/lib/features/gamesApiSlice";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FadeLoader } from "react-spinners";

const GameType = () => {
  const params = useSearchParams();
  const gameType = params.get("game-type");

  const { data, isLoading } = useFetchGamesListQuery();
  const payload = data?.payload;

  const getGameCategory = (gameType: string, length: number) => {
    return payload?.games
      ?.filter((game) => game.GameType == gameType)
      .splice(0, length);
  };
  return (
    <div>
      {!data ||
        (isLoading && (
          <div className="w-full my-4">
            <FadeLoader color="#fff" className="w-8 h-8 mx-auto" />
          </div>
        ))}
      {data && !isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {getGameCategory(gameType!, 10)?.map((game, i) => (
            <GameCard
              key={i}
              gameName={game.GameName}
              gameType={game.GameType}
              image={game.ImageName}
              label={game.GameNameDisplay}
            />
          ))}
        </div>
      )}
      {data && !isLoading && getGameCategory(gameType!, 10)?.length == 0 && (
        <p className="text-sm text-white text-center">No Games Found</p>
      )}
    </div>
  );
};

export default GameType;
