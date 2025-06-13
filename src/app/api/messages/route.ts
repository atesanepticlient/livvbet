import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    const user = await findCurrentUser();
    const messages = await db.message.findMany({
      where: { userId: user!.id },
      orderBy: { createdAt: "asc" },
    });

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

export const DELETE = async (req: NextRequest) => {
  try {
    const { messagesId } = await req.json();

    const user = await findCurrentUser();
    if (!user)
      return Response.json({ message: "User Not found" }, { status: 404 });

    await db.message.deleteMany({ where: { id: { in: messagesId } } });

    return Response.json({ message: "Messages deleted" }, { status: 200 });
  } catch {
    Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
