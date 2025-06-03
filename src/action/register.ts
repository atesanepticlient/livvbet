"use server";
import { registerSchema } from "@/schema";
import zod from "zod";

import { db } from "@/lib/db";
import { findUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

import { playerIdGenerate } from "@/lib/helpers";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { SIGNUP_SUCCESS } from "@/success";
// import { createAccount } from "@/provider/createAccount";
// import { createSportBookAccount } from "@/provider/createSportbook";

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

    const newUser = await db.users.create({
      data: {
        email,
        phone,
        firstName,
        lastName,
        password: hasedPassword,
        casinoPassword: password,
        playerId: playerId!,
        referral: {
          create: {},
        },
        wallet: {
          create: {
            balance: 0,
            currencyCode,
          },
        },
      },
      include: { wallet: true },
    });

    const promoUser = await db.users.findFirst({
      where: { referId: promo },
      include: { referral: true },
    });

    if (promoUser) {
      await db.$transaction([
        db.referral.update({
          where: { userId: promoUser.id },
          data: {
            referredUsers: {
              connect: {
                id: newUser.id,
              },
            },
          },
        }),
        db.users.update({
          where: { id: newUser.id },
          data: {
            referral: {
              connect: { id: promoUser!.referral!.id },
            },
          },
        }),
      ]);
    }

    // const casinoAccount = await createAccount({
    //   consumerId: +process.env.B2B_CONSUMER_ID!,
    //   userName: newUser.playerId,
    //   password: newUser.casinoPassword,
    //   currencyCode: newUser.wallet!.currencyCode,
    //   firstName: newUser.firstName,
    //   lastName: newUser.lastName,
    // });

    // const sportsBookRes = await createSportBookAccount({
    //   agent: process.env.SPORTBOOK_AGENT_NAME!,
    //   secret: process.env.SPORTBOOK_CONSUMER_SECERT!,
    //   userName: newUser!.playerId,
    // });

    // console.log({ sportsBookRes });
    // console.log({ casinoAccount });

    return {
      success: SIGNUP_SUCCESS,
    };
  } catch (error) {
    console.log("Signup error ", error);
    return { error: INTERNAL_SERVER_ERROR };
  }
};
