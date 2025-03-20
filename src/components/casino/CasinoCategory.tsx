/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CasinoCategoryRecommenedGame from "./CasinoCategoryRecommenedGame";

import { useFetchGamesListQuery } from "@/lib/features/gamesApiSlice";
import { useCasinoSearch } from "@/store/useStore";
import { companyGames, liveGames } from "@/data/game";

import { FadeLoader } from "react-spinners";

const CasinoCategories = () => {
  const { setGameType, gameType, search } = useCasinoSearch((state) => state);

  const { data, isLoading } = useFetchGamesListQuery();
  const payload = data?.payload;

  const [casinoGames, setCasinoGames] = useState<any>();

  const companyGameFilter = () => {
    if (gameType == "1xGames" && search) {
      return companyGames.filter(
        (game) => game.GameNameDisplay.match(search) !== null
      );
    }
    return companyGames;
  };

  const liveGameFilter = () => {
    if (gameType == "1xGames" && search) {
      return liveGames.filter(
        (game) => game!.GameNameDisplay.match(search) !== null
      );
    }
    return liveGames;
  };

  const getCasinoGameCategory = useCallback(
    (gameType: string, length: number) => {
      return casinoGames
        ?.filter((game: any) => game.GameType == gameType)
        .splice(0, length);
    },
    [casinoGames]
  );

  useEffect(() => {
    if (payload?.games) {
      setCasinoGames(payload.games);
    }
  }, [payload]);

  useEffect(() => {
    if (search && gameType == "casino") {
      setCasinoGames((state: any) => {
        const newS = state?.filter(
          (game: any) => game.GameNameDisplay.match(search) !== null
        );

        return newS;
      });
    }
  }, [search]);

  useEffect(() => {
    console.log({ casinoGames });
  }, [casinoGames]);

  return (
    <Tabs defaultValue="casino" onValueChange={(value) => setGameType(value)}>
      <TabsList className="flex items-center bg-[#0f324f]">
        <TabsTrigger
          value="casino"
          className="flex-1 uppercase data-[state=active]:!bg-transparent data-[state=active]:!text-[#88bf2a] data-[state=active]:!border-b data-[state=active]:!border-b-[#88bf2a]"
        >
          Casino
        </TabsTrigger>
        <TabsTrigger
          value="live-casino"
          className="flex-1 uppercase data-[state=active]:!bg-transparent data-[state=active]:!text-[#88bf2a] data-[state=active]:!border-b data-[state=active]:!border-b-[#88bf2a]"
        >
          Live Casino
        </TabsTrigger>
        <TabsTrigger
          value="1xGames"
          className="flex-1 uppercase data-[state=active]:!bg-transparent data-[state=active]:!text-[#88bf2a] data-[state=active]:!border-b data-[state=active]:!border-b-[#88bf2a]"
        >
          1xGames
        </TabsTrigger>
      </TabsList>

      <TabsContent value="casino">
        {data && !isLoading && casinoGames && (
          <div>
            <CasinoCategoryRecommenedGame
              gameType="Slots"
              allGamesRedirect="/casino/Slots"
              gamesList={getCasinoGameCategory("Slots", 10)!}
            />
            <CasinoCategoryRecommenedGame
              gameType="Bingo"
              allGamesRedirect="/casino/Bingo"
              gamesList={getCasinoGameCategory("Bingo", 10)!}
            />
            <CasinoCategoryRecommenedGame
              gameType="Mines"
              allGamesRedirect="/casino/Mines"
              gamesList={getCasinoGameCategory("Mines", 10)!}
            />
            <CasinoCategoryRecommenedGame
              gameType="Rng"
              allGamesRedirect="/casino/Rng"
              gamesList={getCasinoGameCategory("Rng", 10)!}
            />
          </div>
        )}
        {!data ||
          isLoading ||
          (!casinoGames && (
            <div className="w-full my-4">
              <FadeLoader color="#fff" className="w-8 h-8 mx-auto" />
            </div>
          ))}
      </TabsContent>
      <TabsContent value="live-casino">
        <div>
          <CasinoCategoryRecommenedGame
            gameType="Live Casino"
            allGamesRedirect="#"
            gamesList={liveGameFilter()}
          />
        </div>
      </TabsContent>
      <TabsContent value="1xGames">
        <div>
          <CasinoCategoryRecommenedGame
            gameType="1xGames"
            allGamesRedirect="#"
            gamesList={companyGameFilter()}
          />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CasinoCategories;
