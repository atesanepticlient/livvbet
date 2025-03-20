"use server";

import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { loginSportBookAccount } from "@/provider/loginSportsBook";

export const loginSportBook = async () => {
  try {
    const user = await findCurrentUser();

    const res = await loginSportBookAccount({
      agent: process.env.SPORTBOOK_AGENT_NAME!,
      secret: process.env.SPORTBOOK_CONSUMER_SECERT!,
      userName: user!.playerId,
      language: "en-US",
    });
    console.log("sportbook login response", res);
    if (res.errorCode !== "") {
      return { error: INTERNAL_SERVER_ERROR };
    }

    return { success: true, url: res.loginUrl };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};
