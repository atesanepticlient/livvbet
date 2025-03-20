import React from "react";

import "swiper/css";
import "swiper/css/pagination";

import { CasinoGameSlider } from "../games/casino/Casino";
import { companyGames } from "@/data/game";

const CompanyGames = () => {
  return (
    <CasinoGameSlider
      gameList={companyGames}
      gameType="1xGames"
      allGamesRedirect="/casino"
    />
  );
};

export default CompanyGames;
