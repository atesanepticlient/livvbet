import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const user = await findCurrentUser();
    const messages = await db.message.findMany({ where: { userId: user!.id } });

    return Response.json({ payload: messages }, { status: 200 });
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};

export const PUT = async () => {
  try {
    const user = await findCurrentUser();

    await db.message.updateMany({
      where: { userId: user!.id, seen: false },
      data: { seen: true },
    });

    return Response.json({ message: "Messages updated" }, { status: 200 });
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
