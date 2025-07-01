import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { generateTrxId } from "@/lib/utils";
import { NextRequest } from "next/server";

// export const POST = async (req: NextRequest) => {
//   try {
//     const { amount, payTo, walletId } = (await req.json()) as MakeWithdrawInput;
//     const user = await findCurrentUser();

//     if (!user) {
//       return Response.json({ message: "User not found" }, { status: 401 });
//     }

//     if (user.isBanned) {
//       return Response.json(
//         { message: "You ware suspended! Contact to support" },
//         { status: 400 }
//       );
//     }

//     const site = await db.site.findFirst({});
//     if (!site) {
//       return Response.json(
//         { message: "Site config not found" },
//         { status: 500 }
//       );
//     }

//     const minWithdraw = Number(site.minWithdraw);
//     const maxWithdraw = Number(site.maxWithdraw);

//     if (amount < minWithdraw) {
//       return Response.json(
//         { message: `Minimum withdraw limit is ${minWithdraw}` },
//         { status: 400 }
//       );
//     }

//     if (amount > maxWithdraw) {
//       return Response.json(
//         { message: `Maximum withdraw limit is ${maxWithdraw}` },
//         { status: 400 }
//       );
//     }

//     // You already check with site limit, so this one is redundant:
//     // if (amount < 1000 || amount > 25000)
//     // But if you want to enforce a hard range:
//     if (amount < 1000) {
//       return Response.json(
//         { message: "Minimum withdraw amount is 1000" },
//         { status: 400 }
//       );
//     }

//     if (amount > 25000) {
//       return Response.json(
//         { message: "Maximum withdraw amount is 25000" },
//         { status: 400 }
//       );
//     }

//     const withdrawWallet = await db.withdrawEWallet.findUnique({
//       where: { id: walletId },
//     });

//     if (!withdrawWallet) {
//       return Response.json(
//         { message: "Try with another payment wallet" },
//         { status: 404 }
//       );
//     }

//     const wallet = await db.wallet.findUnique({
//       where: { userId: user.id },
//     });

//     if (!wallet) {
//       return Response.json({ message: "Wallet not found" }, { status: 404 });
//     }

//     // Convert to float or use `.toNumber()` if it's a Decimal
//     const userBalance =
//       typeof wallet.balance === "object" && "toNumber" in wallet.balance
//         ? wallet.balance.toNumber()
//         : +wallet.balance;

//     if (amount > userBalance) {
//       return Response.json(
//         { message: "You cannot withdraw this amount" },
//         { status: 400 }
//       );
//     }

//     const [withdraw] = await db.$transaction([
//       db.withdraw.create({
//         data: {
//           amount,
//           paymentWalletNumber: payTo,
//           user: { connect: { id: user.id } },
//           withdrawEWallet: { connect: { id: walletId } },
//         },
//       }),
//       db.wallet.update({
//         where: { userId: user.id },
//         data: { balance: { decrement: amount } },
//       }),
//     ]);

//     await createHistory({
//       amount,
//       type: "WITHDRAW",
//       paymentId: withdraw.id,
//     });

//     return Response.json({ message: "Withdrawal successful" }, { status: 201 });
//   } catch (error) {
//     console.error("Withdraw Error:", error);
//     return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
//   }
// };

export const POST = async (req: NextRequest) => {
  try {
    const { account_number, amount, ps } = await req.json();
    console.log({account_number, amount, ps})
    const user = await findCurrentUser();
    if (!user)
      return Response.json(
        { message: "Authentication failed" },
        { status: 401 }
      );

    let data = {};
    switch (ps) {
      case "bkash_a":
        data = { account_email: user.email, account_number };
        break;
      case "nagad_a":
        data = { account_number };
        break;
      case "upay":
        data = { account_email: user.email, account_number };
        break;
    }

    const trx_id = generateTrxId();

    const response = await fetch(
      `${process.env.APAY_DOMAIN}/Remotes/create-withdrawal?project_id=${process.env.APAY_PROJECT_ID}`,
      {
        method: "POST",
        headers: {
          apikey: `${process.env.APAY_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          currency: "BDT",
          payment_system: ps,
          custom_transaction_id: trx_id,
          custom_user_id: user.playerId,
          data,
        }),
      }
    );
    const paymentData = await response.json();
    console.log({ paymentData });
    if (!paymentData.success) {
      return Response.json({ message: "Withdraw Failed" }, { status: 500 });
    }

    await db.aPayWithdraw.create({
      data: {
        orderId: paymentData.order_id,
        trxId: trx_id,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    await db.wallet.update({
      where: {
        userId: user!.id,
      },
      data: {
        balance: {
          decrement: amount,
        },
      },
    });
    await db.message.create({
      data: {
        title: `${amount}BDT Withdraw`,
        description: "Your withdraw under review",
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return Response.json(
      { payload: paymentData, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
