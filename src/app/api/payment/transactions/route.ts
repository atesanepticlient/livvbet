import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const user = await findCurrentUser();

    const transactions = await db.paymentHistory.findMany({
      where: { userId: user!.id },
      include: { withdraw: true, deposit: true },
    });
    console.log({ transactions });
    return Response.json({ payload: transactions }, { status: 200 });
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
