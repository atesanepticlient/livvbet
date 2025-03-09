import { db } from "@/lib/db";
import { FundTransferInput, } from "@/types/api";
import { Decimal } from "@prisma/client/runtime/library";
import { NextRequest } from "next/server.js";

export const POST = async (req: NextRequest) => {
  try {
    const {
      userName,
      cur,
      amt,
      requestId,
      cwTransId,
      transType,
      gameType,
      accountDateTime,
    } = (await req.json()) as FundTransferInput;

    if (
      !userName ||
      !cur ||
      !amt ||
      !requestId ||
      !cwTransId ||
      !transType ||
      !gameType ||
      !accountDateTime
    ) {
      return Response.json({
        type: "fundTransferResp",
        err: "1002",
      });
    }

    const playerId = userName.replace("X01", "");

    const user = await db.users.findUnique({
      where: {
        playerId,
      },
      include: {
        wallet: true,
      },
    });

    if (!user) {
      return Response.json({ type: "fundTransferReq", Err: "1000" });
    }

    if (user.isBanned) {
      return Response.json({ type: "fundTransferReq", Err: "1004" });
    }

    if (user.wallet?.currencyCode !== cur) {
      return Response.json({
        type: "fundTransferReq",
        userName,
        cur,
        amt: user.wallet?.balance,
        err: "1001",
      });
    }

    let newBalance = user.wallet.balance;

    switch (transType) {
      case "500":
        if (newBalance < amt) {
          return Response.json({
            type: "fundTransferResp",
            userName,
            cur,
            amt: newBalance,
            err: "1005",
          });
        }

        newBalance = Decimal(+newBalance - +amt);
        break;
      case "510":
        newBalance = Decimal(+newBalance + +amt);
        break;
      case "520":
        newBalance = Decimal(+newBalance - +amt);
        break;
      case "501":
        newBalance = Decimal(+newBalance + +amt);
        break;
      case "502":
        newBalance = Decimal(+newBalance + +amt);
        break;
      case "503":
        newBalance = Decimal(+newBalance + +amt);
        break;
    }

    await db.wallet.update({
      where: {
        userId: user.id,
      },
      data: {
        balance: newBalance,
      },
    });

    return Response.json({
      type: "fundTransferResp",
      userName,
      cur,
      amt: newBalance,
      err: "0",
    });
  } catch {
    return Response.json(
      { type: "fundTransferReq", err: "9999" },
      { status: 500 }
    );
  }
};
