import { findCurrentUser } from "@/data/user";
import { db } from "@/lib/db";
import { PaymentHistoryType } from "@prisma/client";

export const createHistory = async (data: {
  type: PaymentHistoryType;
  title: string;
  description: string;
  amount: number;
}) => {
  const { description, title, amount, type } = data;
  const user = await findCurrentUser();
  await db.paymentHistory.create({
    data: {
      description,
      title,
      amount,

      type,
      user: { connect: { id: user!.id } },
    },
  });
};
