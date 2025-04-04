"use server";

import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { loginBingo } from "@/provider/loginBingo";
import { loginCrash } from "@/provider/loginCrash";
import { loginMines } from "@/provider/loginMines";
import { loginSlots } from "@/provider/loginSlots";

export const logInCasino = async (data: {
  gameType: string;
  gameName: string;
}) => {
  try {
    const { gameType, gameName } = data;

    const user = await findCurrentUser();
  
    let response;
    if (gameType == "Slots") {
      response = await loginSlots({
        consumerId: +process.env.B2B_CONSUMER_ID!,
        culture: "en-US",
        gameid: `${gameName}@`,
        password: user!.casinoPassword,
        userName: `LBD${user!.playerId}`,
      });
    } else if (gameType == "Bingo") {
      response = await loginBingo({
        consumerId: +process.env.B2B_CONSUMER_ID!,
        culture: "en-US",
        gameid: `${gameName}@`,
        password: user!.casinoPassword,
        userName: `LBD${user!.playerId}`,
        isMobile: true,
      });
    } else if (gameType == "Mines") {
      response = await loginMines({
        consumerId: +process.env.B2B_CONSUMER_ID!,
        culture: "en-US",
        gameid: `${gameName}@`,
        password: user!.casinoPassword,
        userName: `LBD${user!.playerId}`,
        isMobile: true,
      });
    } else if (gameType == "Crash") {
      response = await loginCrash({
        consumerId: +process.env.B2B_CONSUMER_ID!,
        culture: "en-US",
        gameid: `${gameName}@`,
        password: user!.casinoPassword,
        userName: `LBD${user!.playerId}`,
        isMobile: true,
      });
    }

   
    if (response?.error === "0") {
      return { error: INTERNAL_SERVER_ERROR };
    }

    return { success: true, url: response?.url };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};
