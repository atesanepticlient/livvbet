import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { createHistory } from "@/helpers/paymentHistory";
import { db } from "@/lib/db";
import { MakeDepositInput } from "@/types/api";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { amount, transactionId, payFrom, payTo } =
      (await req.json()) as MakeDepositInput;

    const user = await findCurrentUser();

    await db.deposit.create({
      data: {
        amount,
        payFrom,
        payTo,
        transactionId,
        user: {
          connect: {
            id: user!.id,
          },
        },
      },
    });

    await createHistory({
      amount,
      description: "Your Desposit Request was successfully submited",
      type: "DEPOSIT",
      title: "Desposit Added",
    });

    return Response.json(
      { message: "Deposit Successfully Added" },
      { status: 201 }
    );
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
