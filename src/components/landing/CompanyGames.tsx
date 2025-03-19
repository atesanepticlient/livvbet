import React from "react";

import "swiper/css";
import "swiper/css/pagination";

import { CasinoGameSlider } from "../games/casino/Casino";

import crash from "@/../public/assets/images/casino/company-games/crash.jpg";
import crystal from "@/../public/assets/images/casino/company-games/crystal.jpg";
import tomb from "@/../public/assets/images/casino/company-games/tomb.jpg";
import vegas from "@/../public/assets/images/casino/company-games/vegas.jpg";

const games = [
  {
    Id: 5,
    GameName: "crash",
    GameNameDisplay: "Crash",
    ImageUrl: crash,
    ImageName: "crash",
    GameType: "1xgames",
    SubGameType: "1xgames",
    IsHot: false,
    IsNew: false,
  },
  {
    Id: 4,
    GameName: "crystal",
    GameNameDisplay: "Crystal",
    ImageUrl: crystal,
    ImageName: "crystal",
    GameType: "1xgames",
    SubGameType: "1xgames",
    IsHot: false,
    IsNew: false,
  },
  {
    Id: 3,
    GameName: "treasuretomb",
    GameNameDisplay: "Treasure Tomb",
    ImageUrl: tomb,
    ImageName: "tomb",
    GameType: "1xgames",
    SubGameType: "1xgames",
    IsHot: false,
    IsNew: false,
  },
  {
    Id: 2,
    GameName: "lasvegas",
    GameNameDisplay: "Las Vegas",
    ImageUrl: vegas,
    ImageName: "vegas",
    GameType: "1xgames",
    SubGameType: "1xgames",
    IsHot: false,
    IsNew: false,
  },
];

const CompanyGames = () => {
  return (
    <CasinoGameSlider
      gameList={games}
      gameType="1xGames"
      allGamesRedirect="/casino"
    />
  );
};

export default CompanyGames;
