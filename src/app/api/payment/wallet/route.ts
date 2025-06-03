import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const user = await findCurrentUser();
    if (!user)
      return Response.json({ message: "User not found" }, { status: 404 });

    const wallet = await db.wallet.findUnique({
      where: {
        userId: user.id,
      },
    });

    return Response.json({ wallet }, { status: 200 });
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
