import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const user = await findCurrentUser();

    const deposits = await db.deposit.findMany({
      where: { userId: user!.id },
      include: {
        ewallet: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    const withdraws = await db.withdraw.findMany({
      where: { userId: user!.id },
      include: {
        withdrawEWallet: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return Response.json({ payload: { deposits, withdraws } }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
