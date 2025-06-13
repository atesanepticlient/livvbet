import { currencies } from "@/data/currency";
import { findUserPlayerId } from "@/data/user";
import { db } from "./db";

export const playerIdGenerate = async () => {
  let id;
  let hasUser = true;
  while (hasUser) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    id = ((array[0] % 9000000000) + 1000000000).toString();

    const alreadyExist = await findUserPlayerId(id);

    if (!alreadyExist) {
      hasUser = false;
    }
  }

  return id?.toString();
};

export const referIdGenerate = async (length: number = 6) => {
  let result = "";
  let hasUser = true;
  while (hasUser) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    const alreadyExist = await db.users.findFirst({
      where: { referId: result },
    });

    if (!alreadyExist) {
      hasUser = false;
    }
  }

  return result;
};

export const countryNameFinder = (currencyCode: string) => {
  const name = currencies.find((c) => c.currency == currencyCode);

  return name?.country;
};

export function chunkIntoPairs<T>(arr: T[]): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr.slice(i, i + 2));
  }
  return result;
}

export const reduceTurnOver = async (amount: number, userId: string) => {
  try {
    await db.bonusWallet.update({
      where: {
        userId: userId,
      },
      data: {
        turnOver: {
          decrement: amount,
        },
      },
    });
  } catch {
    return null;
  }
};
