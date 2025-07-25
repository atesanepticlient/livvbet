"use client";

import React from "react";

import DefalutGames from "./defalut-games";
import FilteredGames from "./filteredGames";
import { useGamesFilter } from "@/lib/store.zustond";
import TabBar from "@/components/landing/TabBar";

const Casino = () => {
  const { search, category, provider } = useGamesFilter((state) => state);

  const filtering = !!search || !!category || !!provider;

  return (
    <>
      {!filtering ? (
        <div>
          <DefalutGames />
        </div>
      ) : (
        <FilteredGames />
      )}
      <TabBar />
    </>
  );
};

export default Casino;
