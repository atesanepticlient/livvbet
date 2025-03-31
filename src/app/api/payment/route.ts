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
    let card;
    let recommended;

    if (admin?.id == user?.refererId) {
      eWallet = await db.adEWallet.findMany({
        where: {},
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

      card = [
        {
          id: "01",
          deposit: null,
          withdraw: null,
          eWallet: {
            walletName: "Paypal Cash",
            image:
              "https://www.finder.com/finder-us/wp-uploads/2019/04/PayPalCashCard_Supplied_450x250.png",
            id: "201",
          },
          isActive: false,
          isRecommended: false,
        },
        {
          id: "02",
          deposit: null,
          withdraw:null,
          eWallet: {
            walletName: "Sonali Bank",
            image:
              "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dfab8174166761.5c24cad31ba21.jpg",
            id: "202",
          },
          isActive: false,
          isRecommended: false,
        },
        {
          id: "03",
          deposit: null,
          withdraw: null,
          eWallet: {
            walletName: "Dutch-Bangla Bank",
            image:
              "https://www.dutchbanglabank.com/images/debit-card/mastercardworld.jpg",
            id: "203",
          },
          isActive: false,
          isRecommended: false,
        },
        {
          id: "04",
          deposit: null,
          withdraw: null,
          eWallet: {
            walletName: "Mutual Trustbank",
            image:
              "https://www.mutualtrustbank.com/wp-content/uploads/2025/03/mastercard-virtual-debit-card.png",
            id: "204",
          },
          isActive: false,
          isRecommended: false,
        },
      ];

      recommended = await db.adEWallet.findMany({
        where: { isRecommended: true },
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
    paymentData.push({ methodName: "Card", wallets: card });

    return Response.json({ payload: paymentData }, { status: 200 });
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
