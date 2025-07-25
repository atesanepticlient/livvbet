import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const user = await findCurrentUser();
    console.log({ user });
    if (!user)
      return Response.json({ message: "User not found" }, { status: 404 });

    const wallet = await db.wallet.findUnique({
      where: {
        userId: user.id,
      },
    });

    return Response.json({ wallet }, { status: 200 });
  } catch (error) {
    console.log("PAYMENT WALLET : ", error);
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
