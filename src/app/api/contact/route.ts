import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const contact = await db.contact.findFirst({ where: {} });

    return Response.json({ payload: contact }, { status: 200 });
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
