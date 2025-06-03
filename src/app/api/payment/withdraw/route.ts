import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { createHistory } from "@/helpers/paymentHistory";
import { db } from "@/lib/db";
import { MakeWithdrawInput } from "@/types/api";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { amount, payTo, walletId } = (await req.json()) as MakeWithdrawInput;

    const user = await findCurrentUser();

    const withdrawWallet = await db.withdrawEWallet.findUnique({
      where: { id: walletId },
    });

    if (!withdrawWallet) {
      return Response.json(
        { message: "Try with another Payment Wallet" },
        { status: 404 }
      );
    }

    if (amount < 1000) {
      return Response.json(
        { message: `Minimum withdraw amount 1000` },
        { status: 400 }
      );
    }

    if (amount > 25000) {
      return Response.json(
        { message: `Miximum withdraw amount 25000` },
        { status: 400 }
      );
    }

    const wallet = await db.wallet.findUnique({
      where: { userId: user!.id },
    });

    if (amount > +wallet!.balance) {
      return Response.json(
        { message: "You cannot withdraw this amount" },
        { status: 400 }
      );
    }

    const resposse = await db.$transaction([
      db.withdraw.create({
        data: {
          amount,
          paymentWalletNumber: payTo,
          user: {
            connect: {
              id: user!.id,
            },
          },
          withdrawEWallet: {
            connect: {
              id: walletId,
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
      type: "WITHDRAW",
      paymentId: resposse[0].id,
    });

    return Response.json(
      { message: "Deposit Successfully Added" },
      { status: 201 }
    );
  } catch (error) {
    console.log({ error });
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
