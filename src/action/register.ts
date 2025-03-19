"use server";
import { registerSchema } from "@/schema";
import zod from "zod";

import { db } from "@/lib/db";
import { findUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

import { playerIdGenerate } from "@/lib/helpers";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { SIGNUP_SUCCESS } from "@/success";
import { createAccount } from "@/provider/createAccount";

export const register = async (data: zod.infer<typeof registerSchema>) => {
 
  const exitingUser = await findUserByEmail(data.email);
  if (exitingUser) {
    return { error: "The Email already has an account" };
  }

  const { email, firstName, lastName, currencyCode, password, promo, phone } =
    data;

  try {
    const hasedPassword = bcrypt.hashSync(password, 10);
    const playerId = await playerIdGenerate();

    const admin = await db.admin.findFirst({
      where: {},
      select: { id: true, promo: true },
    });
    const agentWithPromo = await db.agent.findFirst({
      where: { promo: promo || "" },
      select: { id: true },
    });

    let refererType = "ad_ctrl";
    let refererId = admin!.id;

    if (promo && !agentWithPromo && promo !== admin?.promo) {
      return { error: "Promo code is not valid" };
    }

    if (agentWithPromo && agentWithPromo.id) {
      refererType = "ag_ctr";
      refererId = agentWithPromo.id;
    }

    const newUsers = await db.users.create({
      data: {
        email,
        phone,
        firstName,
        lastName,
        password: hasedPassword,
        casinoPassword: password,
        playerId: playerId!,
        refererId,
        refererType,
        wallet: {
          create: {
            balance: 0,
            currencyCode,
          },
        },
      },
      include: { wallet: true },
    });

     await createAccount({
      consumerId: +process.env.B2B_CONSUMER_ID!,
      userName: newUsers.playerId,
      password: newUsers.casinoPassword,
      currencyCode: newUsers.wallet!.currencyCode,
      firstName: newUsers.firstName,
      lastName: newUsers.lastName,
    });
    
    return {
      success: SIGNUP_SUCCESS,
    };
  } catch  {

    return { error: INTERNAL_SERVER_ERROR };
  }
};
