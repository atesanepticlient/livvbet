import { findCurrentUser } from "@/data/user";
import { db } from "@/lib/db";

export const createMessage = async (data: {
  title: string;
  description?: string;
}) => {
  const { title, description } = data;

  const user = await findCurrentUser();
  await db.message.create({
    data: {
      title,
      description,
      user: { connect: { id: user!.id } },
    },
  });
};

export const messageSeen = async (messageId: string) => {
  await db.message.update({
    where: { id: messageId },
    data: { seen: true },
  });
};
