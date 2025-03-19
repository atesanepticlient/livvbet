/* eslint-disable @typescript-eslint/no-explicit-any */
import { findAdmin, findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { createHistory } from "@/helpers/paymentHistory";
import { db } from "@/lib/db";
import { MakeWithdrawInput } from "@/types/api";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { amount, payTo, walletId } = (await req.json()) as MakeWithdrawInput;

    const user = await findCurrentUser();
    const admin = await findAdmin();

    let withdrawWallet;
    if (user?.refererId == admin?.id) {
      withdrawWallet = await db.adEWallet.findUnique({
        where: { id: walletId },
        include: { eWallet: true },
      });
    } else {
      withdrawWallet = await db.agEWallet.findUnique({
        where: { id: walletId },
        include: { eWallet: true },
      });
    }

    if (!withdrawWallet) {
      return Response.json({ message: "Try with another Payment Wallet" });
    }

    const withdraw: any = withdrawWallet.withdraw;

    if (amount < +withdraw.min) {
      return Response.json(
        { message: `Minimum withdraw amount ${withdraw.min}` },
        { status: 400 }
      );
    }

    if (amount > +withdraw.max) {
      return Response.json(
        { message: `Miximum withdraw amount ${withdraw.max}` },
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
          payTo,
          methodName: withdrawWallet!.eWallet.walletName,
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
