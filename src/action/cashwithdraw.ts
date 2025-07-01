"use server";

import { INTERNAL_SERVER_ERROR } from "@/error";
import { cashWithdrawScehma } from "@/schema";
import zod from "zod";

import { db } from "@/lib/db";
import { findCurrentUser } from "@/data/user";

import { generateCode } from "@/lib/utils";

export const cashWithdraw = async (
  data: zod.infer<typeof cashWithdrawScehma>
) => {
  try {
    const { address, amount } = data;
    const user = await findCurrentUser();

    if (user!.isBanned) {
      return { error: "You ware suspended! Contact to support" };
    }

    const site = await db.site.findFirst({ where: {} });

    if (+amount > +site!.maxAgWithdraw!) {
      return { error: `Maximum withdraw limit ${site?.maxAgWithdraw}` };
    }

    if (+amount < +site!.minAgWithdraw!) {
      return { error: `Minimum withdraw limit ${site?.minAgWithdraw}` };
    }

    if (!user) {
      return { error: "Please reload the page" };
    }
    if (+amount > +user.wallet!.balance) {
      return { error: "Insufficient balance" };
    }

    const addressSegment = address.split(" ");

    const storeName = addressSegment[3];

    const userAgent = await db.users.findUnique({
      where: { id: user.id },
      include: { agent: { include: { withdrawAddress: true } } },
    });
    console.log("Withdraw address : ", userAgent?.agent?.withdrawAddress);
    console.log({ storeName });
    if (!userAgent?.agent) {
      return {
        error: "You can withdraw only same payment gateway you used to deposit",
      };
    }
    if (!userAgent.agent?.id) {
      return { error: "Agent account not found" };
    }
    // if (token !== userAgent.agent.withdrawAddress?.token) {
    //   return {
    //     error: "You can withdraw only same payment gateway you used to deposit",
    //   };
    // }

    if (storeName !== userAgent!.agent!.withdrawAddress!.storeName) {
      return {
        error: "You can withdraw only same payment gateway you used to deposit",
      };
    }

    await db.wallet.update({
      where: {
        userId: user.id,
      },
      data: {
        balance: {
          decrement: amount,
        },
      },
    });

    await db.message.create({
      data: {
        title: "Your withdraw request is pending",
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    const withdrawCode = generateCode();

    await db.agentWithdrawRecord.create({
      data: {
        amount,
        withdrawCode,
        agent: {
          connect: {
            id: userAgent.agent.id,
          },
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return { success: true, code: withdrawCode };
  } catch (error) {
    console.log("Cashwithdraw error ", error);
    return { error: INTERNAL_SERVER_ERROR };
  }
};
