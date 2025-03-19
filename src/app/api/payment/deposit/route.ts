/* eslint-disable @typescript-eslint/no-explicit-any */
import { findAdmin, findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { createHistory } from "@/helpers/paymentHistory";
import { db } from "@/lib/db";
import { MakeDepositInput } from "@/types/api";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { amount, transactionId, payFrom, payTo, walletId } =
      (await req.json()) as MakeDepositInput;

    const user = await findCurrentUser();
    const admin = await findAdmin();

    let depositWallet;
    if (user?.refererId == admin?.id) {
      depositWallet = await db.adEWallet.findUnique({
        where: { id: walletId },
        include: { eWallet: true },
      });
    } else {
      depositWallet = await db.agEWallet.findUnique({
        where: { id: walletId },
        include: { eWallet: true },
      });
    }

    if (!depositWallet) {
      return Response.json({ message: "Try with another Payment Wallet" });
    }

    const depositData: any = depositWallet.deposit;

    if (amount < +depositData.min) {
      return Response.json(
        { message: `Minimum deposit amount ${depositData.min}` },
        { status: 400 }
      );
    }

    if (amount > +depositData.max) {
      return Response.json(
        { message: `Miximum deposit amount ${depositData.max}` },
        { status: 400 }
      );
    }

    const deposit = await db.deposit.create({
      data: {
        amount,
        payFrom,
        payTo,
        transactionId,
        methodName: depositWallet.eWallet.walletName,
        user: {
          connect: {
            id: user!.id,
          },
        },
      },
    });

    await createHistory({
      amount,
      type: "DEPOSIT",
      paymentId: deposit.id,
    });

    return Response.json(
      { message: "Deposit Successfully Added" },
      { status: 201 }
    );
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
