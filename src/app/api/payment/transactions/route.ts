import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";

export const GET = async () => {
  try {
    const user = await findCurrentUser();

    // const deposits = await db.deposit.findMany({
    //   where: { userId: user!.id },
    //   include: {
    //     ewallet: true,
    //   },
    //   orderBy: {
    //     createdAt: "asc",
    //   },
    // });

    const aPayDeposits = await db.aPayDeposit.findMany({
      where: {
        userId: user!.id,
      },
    });
    const aPayWithdraws = await db.aPayWithdraw.findMany({
      where: {
        userId: user!.id,
      },
    });

    const deposits = [];
    const withdraws = [];
    for (let i = 0; i < aPayDeposits.length; i++) {
      const respone = await fetch(
        `${process.env.APAY_DOMAIN}/Remotes/deposit-info?project_id=${process.env.APAY_PROJECT_ID}&order_id=${aPayDeposits[i].orderId}`,
        {
          method: "GET",
          headers: {
            Accept: "*/*",
            apikey: `${process.env.APAY_API_KEY}`,
          },
        }
      );
      const deposit = await respone.json();
      deposits.push(deposit);
    }

    for (let i = 0; i < aPayWithdraws.length; i++) {
      const respone = await fetch(
        `${process.env.APAY_DOMAIN}/Remotes/withdrawal-info?project_id=${process.env.APAY_PROJECT_ID}&order_id=${aPayWithdraws[i].orderId}`,
        {
          method: "GET",
          headers: {
            Accept: "*/*",
            apikey: `${process.env.APAY_API_KEY}`,
          },
        }
      );
      const withdraw = await respone.json();
      withdraws.push(withdraw);
    }

    return Response.json({ payload: { deposits, withdraws } }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
