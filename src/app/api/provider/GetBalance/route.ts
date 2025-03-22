import { db } from "@/lib/db";
import { GetBalanceInput } from "@/types/api";
import { NextRequest } from "next/server.js";

export const GET = async (req: NextRequest) => {
  try {
    const { userName, cur } = (await req.json()) as GetBalanceInput;

    if(!userName || !cur){
      return Response.json({
        type: "getBalanceResp",
        err: "1002",
      });
    }

    const playerId = userName.replace("TB8", "");

    const user = await db.users.findUnique({
      where: {
        playerId,
      },
      include: {
        wallet: {
          select: {
            currencyCode: true,
            balance: true,
          },
        },
      },
    });

    if (!user) {
      return Response.json({ type: "getBalanceResp", err: "1000" });
    }

    if (user.isBanned) {
      return Response.json({ type: "getBalanceResp", err: "1004" });
    }
    if (user.wallet?.currencyCode !== cur) {
      return Response.json({
        type: "fundTransferResp",
        userName,
        cur,
        amt: user.wallet?.balance,
        err: "1001",
      });
    }
    return Response.json({
      type: "getBalanceResp",
      userName,
      cur: user?.wallet?.currencyCode,
      amt: user?.wallet?.balance,
      Err: "0",
    });
  } catch {
    return Response.json(
      { type: "getBalanceResp", err: "9999" },
      { status: 500 }
    );
  }
};
