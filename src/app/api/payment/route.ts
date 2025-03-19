import { findAdmin, findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const type = new URL(req.url).searchParams.get("type") as
    | "withdraw"
    | "deposit";

  const withdraw = type === "withdraw";
  const deposit = type === "deposit";

  if (type != "withdraw" && type != "deposit") {
    return Response.json({ message: "Please Request to a valid Route" });
  }

  try {
    const admin = await findAdmin();
    const user = await findCurrentUser();

    let eWallet;
    let recommended;

    if (admin?.id == user?.refererId) {
      eWallet = await db.adEWallet.findMany({
        where: { isActive: true },
        select: {
          admin: true,
          adminId: true,
          id: true,
          deposit,
          withdraw,
          eWallet: true,
          eWalletId: true,
          isActive: true,
          isRecommended: true,
        },
      });
      recommended = await db.adEWallet.findMany({
        where: { isRecommended: true, isActive: true },
        select: {
          admin: true,
          adminId: true,
          id: true,
          deposit,
          withdraw,
          eWallet: true,
          eWalletId: true,
          isActive: true,
          isRecommended: true,
        },
      });
    } else {
      const agent = await db.agent.findUnique({
        where: { id: user!.refererId },
      });

      eWallet = await db.agEWallet.findMany({
        where: { agentId: agent!.id, isActive: true },
        select: {
          agent: true,
          agentId: true,
          id: true,
          deposit,
          withdraw,
          eWallet: true,
          eWalletId: true,
          isActive: true,
          isRecommended: true,
        },
      });
      recommended = await db.agEWallet.findMany({
        where: { isRecommended: true, agentId: agent!.id, isActive: true },
        select: {
          agent: true,
          agentId: true,
          id: true,
          deposit,
          withdraw,
          eWallet: true,
          eWalletId: true,
          isActive: true,
          isRecommended: true,
        },
      });
    }

    const paymentData = [];

    paymentData.push({ methodName: "Recommended", wallets: recommended });
    paymentData.push({ methodName: "E-Wallet", wallets: eWallet });

    return Response.json({ payload: paymentData }, { status: 200 });
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
