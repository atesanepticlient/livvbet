/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import { registerSchema } from "@/schema";
import zod from "zod";

import { db } from "@/lib/db";
import { findUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
export const config = {
  runtime: "nodejs",
};
import { playerIdGenerate } from "@/lib/helpers";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { SIGNUP_SUCCESS } from "@/success";

export const register = async (data: zod.infer<typeof registerSchema>) => {
  console.log("called");
  const exitingUser = await findUserByEmail(data.email);
  if (exitingUser) {
    return { error: "The Email already has an account" };
  }

  const {
    email,
    firstName,
    lastName,
    currencyCode,
    password,
    referCode,
    phone,
  } = data;

  try {
    const hasedPassword = bcrypt.hashSync(password, 10);
    const playerId = await playerIdGenerate();

    await db.users.create({
      data: {
        email,
        phone,
        firstName,
        lastName,
        password: hasedPassword,
        playerId: playerId!,
        wallet: {
          create: {
            balance: 0,
            currencyCode,
          },
        },
      },
    });

    return {
      success: SIGNUP_SUCCESS,
    };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};
