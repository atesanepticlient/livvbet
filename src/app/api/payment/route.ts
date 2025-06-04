/* eslint-disable @typescript-eslint/no-unused-vars */
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
    const depositData = [];
    const withdrawData = [];
    if (type == "deposit") {
      const eWallet = await db.depositEWallet.findMany({
        where: { isActive: true },
      });

      const card = [
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
          withdraw: null,
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

      const recommended = await db.depositEWallet.findMany({
        where: { isRecommended: true, isActive: true },
      });
      depositData.push({ methodName: "Recommended", wallets: recommended });
      depositData.push({ methodName: "E-Wallet", wallets: eWallet });
      depositData.push({ methodName: "Card", wallets: card });
    } else if (type == "withdraw") {
      const eWallet = await db.withdrawEWallet.findMany({
        where: { isActive: true },
      });

      const card: never[] = [
        // {
        //   id: "01",
        //   deposit: null,
        //   withdraw: null,
        //   eWallet: {
        //     walletName: "Paypal Cash",
        //     image:
        //       "https://www.finder.com/finder-us/wp-uploads/2019/04/PayPalCashCard_Supplied_450x250.png",
        //     id: "201",
        //   },
        //   isActive: false,
        //   isRecommended: false,
        // },
        // {
        //   id: "02",
        //   deposit: null,
        //   withdraw: null,
        //   eWallet: {
        //     walletName: "Sonali Bank",
        //     image:
        //       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dfab8174166761.5c24cad31ba21.jpg",
        //     id: "202",
        //   },
        //   isActive: false,
        //   isRecommended: false,
        // },
        // {
        //   id: "03",
        //   deposit: null,
        //   withdraw: null,
        //   eWallet: {
        //     walletName: "Dutch-Bangla Bank",
        //     image:
        //       "https://www.dutchbanglabank.com/images/debit-card/mastercardworld.jpg",
        //     id: "203",
        //   },
        //   isActive: false,
        //   isRecommended: false,
        // },
        // {
        //   id: "04",
        //   deposit: null,
        //   withdraw: null,
        //   eWallet: {
        //     walletName: "Mutual Trustbank",
        //     image:
        //       "https://www.mutualtrustbank.com/wp-content/uploads/2025/03/mastercard-virtual-debit-card.png",
        //     id: "204",
        //   },
        //   isActive: false,
        //   isRecommended: false,
        // },
      ];

      const recommended = await db.withdrawEWallet.findMany({
        where: { isRecommended: true, isActive: true },
      });

      withdrawData.push({ methodName: "Recommended", wallets: recommended });
      withdrawData.push({ methodName: "E-Wallet", wallets: eWallet });
      withdrawData.push({ methodName: "Card", wallets: card });
    }

    return Response.json(
      { payload: { deposit: depositData, withdraw: withdrawData } },
      { status: 200 }
    );
  } catch {
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
