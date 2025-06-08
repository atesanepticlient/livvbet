"use server";

import { INTERNAL_SERVER_ERROR } from "@/error";
import { cashWithdrawScehma } from "@/schema";
import zod from "zod";

import { db } from "@/lib/db";
import { findCurrentUser } from "@/data/user";

import jwt from "jsonwebtoken";
import { generateCode } from "@/lib/utils";

export const cashWithdraw = async (
  data: zod.infer<typeof cashWithdrawScehma>
) => {
  try {
    const { address, amount } = data;
    const user = await findCurrentUser();

    const site = await db.site.findFirst({ where: {} });

    if (+amount > +site!.maxWithdraw!) {
      return { error: `Maximum withdraw limit ${site?.maxWithdraw}` };
    }

    if (+amount < +site!.minWithdraw!) {
      return { error: `Minimum withdraw limit ${site?.maxWithdraw}` };
    }

    if (!user) {
      return { error: "Please reload the page" };
    }
    if (+amount > +user.wallet!.balance) {
      return { error: "Insufficient balance" };
    }

    const addressSegment = address.split(" ");
    const country = addressSegment[0];
    const city = addressSegment[1];
    const postOffice = addressSegment[2];
    const storeName = addressSegment[3];

    const token = jwt.sign(
      {
        country: country.toLowerCase(),
        city: city.toLowerCase(),
        postOffice: postOffice.toLowerCase(),
        storeName: storeName.toLowerCase(),
      },
      process.env.JWT_SECRET!,
      {
        noTimestamp: true,
      }
    );

    const userAgent = await db.users.findUnique({
      where: { id: user.id },
      include: { agent: { include: { withdrawAddress: true } } },
    });

    if (!userAgent?.agent) {
      return {
        error: "You can withdraw only same payment gateway you used to deposit",
      };
    }

    if (token !== userAgent.agent.withdrawAddress?.token) {
      return {
        error: "You can withdraw only same payment gateway you used to deposit",
      };
    }

    if (storeName !== userAgent.agent.withdrawAddress.storeName) {
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
            id: userAgent.id,
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
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};
