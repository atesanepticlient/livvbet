"use server";

import zod from "zod";
import { db } from "@/lib/db";
import {
  nameChangeSchema,
  passwordChangeSchema,
  phoneNumberChangeSchema,
} from "@/schema";
import bcrypt from "bcryptjs";
export const config = {
  runtime: "nodejs",
};
import { findCurrentUser } from "@/data/user";
import { CURRENT_ICORRECT_PASSOWRD, INTERNAL_SERVER_ERROR } from "@/error";
import { NAME_CHANGED, PASSWORD_CHANGED, PHONE_CHANGED } from "@/success";

export const passageChange = async (
  data: zod.infer<typeof passwordChangeSchema>
) => {
  const { currentPassword, password } = data;

  const user = await findCurrentUser();

  try {
    const currentPasswordIsMatch = await bcrypt.compare(
      currentPassword,
      user!.password
    );

    if (!currentPasswordIsMatch) {
      return { error: CURRENT_ICORRECT_PASSOWRD };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.users.update({
      where: {
        id: user!.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return { success: PASSWORD_CHANGED };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};

export const nameChange = async (data: zod.infer<typeof nameChangeSchema>) => {
  const { firstName, lastName } = data;

  try {
    const user = await findCurrentUser();

    await db.users.update({
      where: {
        id: user!.id,
      },
      data: {
        firstName,
        lastName,
      },
    });

    return { success: NAME_CHANGED };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};

export const phoneChange = async (
  data: zod.infer<typeof phoneNumberChangeSchema>
) => {
  const { password, phone } = data;

  try {
    const user = await findCurrentUser();

    const isPasswordMatch = await bcrypt.compare(password, user!.password);

    if (!isPasswordMatch) {
      return { error: CURRENT_ICORRECT_PASSOWRD };
    }

    await db.users.update({
      where: {
        id: user!.id,
      },
      data: {
        phone,
      },
    });

    return { success: PHONE_CHANGED };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};
