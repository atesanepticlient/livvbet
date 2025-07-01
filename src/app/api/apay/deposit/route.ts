import { NextRequest } from "next/server";
import { generateSignature } from "@/lib/utils";
import { db } from "@/lib/db";
export const POST = async (req: NextRequest) => {
  try {
    const { access_key, signature, transactions } = await req.json();

    if (!access_key || !signature || !transactions) {
      return Response.json({ status: "Rejected" }, { status: 500 });
    }

    const private_key = process.env.APAY_PRIVATE_KEY!;

    const newGeneratedSignature = generateSignature(
      access_key,
      private_key,
      transactions
    );

    if (signature !== newGeneratedSignature) {
      return Response.json({ status: "Rejected" }, { status: 502 });
    }

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].status !== "Success") {
        continue;
      }
      const user = await db.users.findUnique({
        where: { playerId: transactions[i].custom_user_id },
      });
      await db.users.update({
        where: {
          playerId: transactions[i].custom_user_id,
        },
        data: {
          wallet: {
            update: {
              balance: {
                increment: transactions[i].amount,
              },
            },
          },
        },
      });
      await db.message.create({
        data: {
          title: `${transactions[i].amount} BDT Deposited to your account`,
          user: {
            connect: {
              id: user!.id,
            },
          },
        },
      });
    }

    return Response.json({ status: "Success" }, { status: 200 });
  } catch {
    return Response.json({ status: "Failed" }, { status: 401 });
  }
};
