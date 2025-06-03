import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { MakeDepositInput } from "@/types/api";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { amount, transactionId, payFrom, walletId } =
      (await req.json()) as MakeDepositInput;

    const user = await findCurrentUser();

    const depositWallet = await db.depositEWallet.findUnique({
      where: { id: walletId },
    });

    if (!depositWallet) {
      return Response.json(
        { message: "Try with another Payment Wallet" },
        { status: 404 }
      );
    }

    if (amount < +depositWallet.minDeposit) {
      return Response.json(
        { message: `Minimum deposit amount ${depositWallet.minDeposit}` },
        { status: 400 }
      );
    }

    if (amount > +depositWallet.maxDeposit) {
      return Response.json(
        { message: `Miximum deposit amount ${depositWallet.maxDeposit}` },
        { status: 400 }
      );
    }

    await db.deposit.create({
      data: {
        amount,
        payFrom,
        transactionId,
        ewallet: {
          connect: {
            id: walletId,
          },
        },
        user: {
          connect: {
            id: user!.id,
          },
        },
      },
    });

    return Response.json(
      { message: "Deposit Successfully Added" },
      { status: 201 }
    );
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
