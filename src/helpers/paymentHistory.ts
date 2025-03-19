/* eslint-disable @typescript-eslint/no-explicit-any */
import { findCurrentUser } from "@/data/user";
import { db } from "@/lib/db";
import { PaymentHistoryType, Prisma } from "@prisma/client";

export const createHistory = async (data: {
  type: PaymentHistoryType;
  paymentId: string;
  amount: number;
}) => {
  const { amount, type, paymentId } = data;
  const user = await findCurrentUser();

  const paymentRelation: Prisma.PaymentHistoryCreateInput | any = {};

  if (type == "DEPOSIT") {
    paymentRelation.deposit = {
      connect: {
        id: paymentId,
      },
    };
  } else if (type == "WITHDRAW") {
    paymentRelation.withdraw = {
      connect: {
        id: paymentId,
      },
    };
  }
  await db.paymentHistory.create({
    data: {
      ...paymentRelation,
      amount,
      type,
      user: { connect: { id: user!.id } },
    },
  });
};
