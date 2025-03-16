import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { createHistory } from "@/helpers/paymentHistory";
import { db } from "@/lib/db";
import { MakeWithdrawInput } from "@/types/api";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { amount, payTo } = (await req.json()) as MakeWithdrawInput;

    const user = await findCurrentUser();

    const wallet = await db.wallet.findUnique({ where: { userId: user!.id } });

    if (amount > +wallet!.balance) {
      return Response.json(
        { message: "You cannot withdraw this amount" },
        { status: 400 }
      );
    }

    await db.$transaction([
      db.withdraw.create({
        data: {
          amount,
          payTo,
          user: {
            connect: {
              id: user!.id,
            },
          },
        },
      }),
      db.wallet.update({
        where: { userId: user!.id },
        data: { balance: { decrement: amount } },
      }),
    ]);

    await createHistory({
      amount,
      description: "Your Withdraw Request was successfully submited",
      type: "WITHDRAW",
      title: "Withdraw Added",
    });

    return Response.json(
      { message: "Deposit Successfully Added" },
      { status: 201 }
    );
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
