import { findAdmin, findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const admin = await findAdmin();
    const user = await findCurrentUser();

    let eWallet;
    let recommended;

    if (admin?.id == user?.refererId) {
      eWallet = await db.adEWallet.findMany({
        where: {},
        include: { eWallet: true },
      });
      recommended = await db.adEWallet.findMany({
        where: { isRecommended: true },
        include: { eWallet: true },
      });
    } else {
      const agent = await db.agent.findUnique({
        where: { id: user!.refererId },
      });

      eWallet = await db.agEWallet.findMany({
        where: { agentId: agent!.id },
        include: { eWallet: true },
      });
      recommended = await db.agEWallet.findMany({
        where: { isRecommended: true, agentId: agent!.id },
        include: { eWallet: true },
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
