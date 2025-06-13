"use server";

import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const claimBonus = async (data: { bonus: number }) => {
  try {
    const { bonus } = data;

    if (bonus == 0) {
      return { error: "Invalid input" };
    }

    const user = await findCurrentUser();

    if (
      +user!.bonusWallet!.balance == 0 ||
      +user!.bonusWallet!.turnOver !== 0
    ) {
      return { error: "Bonus Claim failed" };
    }

    await db.$transaction([
      db.wallet.update({
        where: {
          userId: user!.id,
        },
        data: {
          balance: {
            increment: bonus,
          },
        },
      }),

      db.bonusWallet.update({
        where: {
          userId: user!.id,
        },
        data: {
          balance: {
            decrement: bonus,
          },
        },
      }),
    ]);

    return { success: true };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};
