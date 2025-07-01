/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { findCurrentUser } from "@/data/user";
// import { INTERNAL_SERVER_ERROR } from "@/error";
// import { db } from "@/lib/db";
// import { NextRequest } from "next/server";

// export const GET = async (req: NextRequest) => {
//   const user = await findCurrentUser();

//   const type = new URL(req.url).searchParams.get("type") as
//     | "withdraw"
//     | "deposit";

//   const withdraw = type === "withdraw";
//   const deposit = type === "deposit";

//   if (type != "withdraw" && type != "deposit") {
//     return Response.json({ message: "Please Request to a valid Route" });
//   }

//   try {
//     const depositData = [];
//     const withdrawData = [];
//     if (type == "deposit") {
//       const eWallet = await db.depositEWallet.findMany({
//         where: { isActive: true },
//       });

//       const card = [
//         {
//           id: "01",
//           deposit: null,
//           withdraw: null,
//           eWallet: {
//             walletName: "Paypal Cash",
//             image:
//               "https://www.finder.com/finder-us/wp-uploads/2019/04/PayPalCashCard_Supplied_450x250.png",
//             id: "201",
//           },
//           isActive: false,
//           isRecommended: false,
//         },
//         {
//           id: "02",
//           deposit: null,
//           withdraw: null,
//           eWallet: {
//             walletName: "Sonali Bank",
//             image:
//               "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dfab8174166761.5c24cad31ba21.jpg",
//             id: "202",
//           },
//           isActive: false,
//           isRecommended: false,
//         },
//         {
//           id: "03",
//           deposit: null,
//           withdraw: null,
//           eWallet: {
//             walletName: "Dutch-Bangla Bank",
//             image:
//               "https://www.dutchbanglabank.com/images/debit-card/mastercardworld.jpg",
//             id: "203",
//           },
//           isActive: false,
//           isRecommended: false,
//         },
//         {
//           id: "04",
//           deposit: null,
//           withdraw: null,
//           eWallet: {
//             walletName: "Mutual Trustbank",
//             image:
//               "https://www.mutualtrustbank.com/wp-content/uploads/2025/03/mastercard-virtual-debit-card.png",
//             id: "204",
//           },
//           isActive: false,
//           isRecommended: false,
//         },
//       ];

//       const recommended = await db.depositEWallet.findMany({
//         where: { isRecommended: true, isActive: true },
//       });
//       depositData.push({ methodName: "Recommended", wallets: recommended });
//       depositData.push({ methodName: "E-Wallet", wallets: eWallet });
//     } else if (type == "withdraw") {
//       const eWallet = await db.withdrawEWallet.findMany({
//         where: { isActive: true },
//       });

//       const recommended = await db.withdrawEWallet.findMany({
//         where: { isRecommended: true, isActive: true },
//       });

//       withdrawData.push({ methodName: "Recommended", wallets: recommended });
//       withdrawData.push({ methodName: "E-Wallet", wallets: eWallet });

//       const agentConnectivity = (
//         await db.users.findUnique({
//           where: {
//             id: user!.id,
//           },
//           select: { agent: true },
//         })
//       )?.agent;

//       if (!agentConnectivity) {
//         withdrawData.push({
//           methodName: "Livvbet Cash",
//           wallets: [
//             {
//               walletName: "Livvbet Cash",
//               type: "cash",
//               isActive: true,
//               walletImage:
//                 "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1749203759/dollars_bhgsma.png",
//             },
//           ],
//         });
//       }
//     }

//     return Response.json(
//       { payload: { deposit: depositData, withdraw: withdrawData } },
//       { status: 200 }
//     );
//   } catch {
//     return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
//   }
// };

import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const user = await findCurrentUser();

  const type = new URL(req.url).searchParams.get("type") as
    | "withdraw"
    | "deposit";

  // const withdraw = type === "withdraw";
  // const deposit = type === "deposit";

  if (type != "withdraw" && type != "deposit") {
    return Response.json({ message: "Please Request to a valid Route" });
  }

  try {
    // const depositData = [];
    // const withdrawData = [];
    // if (type == "deposit") {
    //   const eWallet = await db.depositEWallet.findMany({
    //     where: { isActive: true },
    //   });

    //   const card = [
    //     {
    //       id: "01",
    //       deposit: null,
    //       withdraw: null,
    //       eWallet: {
    //         walletName: "Paypal Cash",
    //         image:
    //           "https://www.finder.com/finder-us/wp-uploads/2019/04/PayPalCashCard_Supplied_450x250.png",
    //         id: "201",
    //       },
    //       isActive: false,
    //       isRecommended: false,
    //     },
    //     {
    //       id: "02",
    //       deposit: null,
    //       withdraw: null,
    //       eWallet: {
    //         walletName: "Sonali Bank",
    //         image:
    //           "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dfab8174166761.5c24cad31ba21.jpg",
    //         id: "202",
    //       },
    //       isActive: false,
    //       isRecommended: false,
    //     },
    //     {
    //       id: "03",
    //       deposit: null,
    //       withdraw: null,
    //       eWallet: {
    //         walletName: "Dutch-Bangla Bank",
    //         image:
    //           "https://www.dutchbanglabank.com/images/debit-card/mastercardworld.jpg",
    //         id: "203",
    //       },
    //       isActive: false,
    //       isRecommended: false,
    //     },
    //     {
    //       id: "04",
    //       deposit: null,
    //       withdraw: null,
    //       eWallet: {
    //         walletName: "Mutual Trustbank",
    //         image:
    //           "https://www.mutualtrustbank.com/wp-content/uploads/2025/03/mastercard-virtual-debit-card.png",
    //         id: "204",
    //       },
    //       isActive: false,
    //       isRecommended: false,
    //     },
    //   ];

    //   const recommended = await db.depositEWallet.findMany({
    //     where: { isRecommended: true, isActive: true },
    //   });
    //   depositData.push({ methodName: "Recommended", wallets: recommended });
    //   depositData.push({ methodName: "E-Wallet", wallets: eWallet });
    // } else if (type == "withdraw") {
    //   const agentConnectivity = (
    //     await db.users.findUnique({
    //       where: {
    //         id: user!.id,
    //       },
    //       select: { agent: true },
    //     })
    //   )?.agent;

    //   // Fetch all active withdraw wallets
    //   const eWallet = await db.withdrawEWallet.findMany({
    //     where: { isActive: true },
    //   });

    //   // Fetch all recommended withdraw wallets
    //   const recommended = await db.withdrawEWallet.findMany({
    //     where: { isRecommended: true, isActive: true },
    //   });

    //   // If user has agent connectivity, set isActive to false for all wallets
    //   if (agentConnectivity) {
    //     const modifiedEWallet = eWallet.map((wallet) => ({
    //       ...wallet,
    //       isActive: false,
    //     }));
    //     console.log({ modifiedEWallet });
    //     const modifiedRecommended = recommended.map((wallet) => ({
    //       ...wallet,
    //       isActive: false,
    //     }));

    //     withdrawData.push({
    //       methodName: "Recommended",
    //       wallets: modifiedRecommended,
    //     });
    //     withdrawData.push({ methodName: "E-Wallet", wallets: modifiedEWallet });

    //     withdrawData.push({
    //       methodName: "Livvbet Cash",
    //       wallets: [
    //         {
    //           walletName: "Livvbet Cash",
    //           type: "cash",
    //           isActive: true,
    //           walletImage:
    //             "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1749203759/dollars_bhgsma.png",
    //         },
    //       ],
    //     });
    //   } else {
    //     withdrawData.push({ methodName: "Recommended", wallets: recommended });
    //     withdrawData.push({ methodName: "E-Wallet", wallets: eWallet });
    //     withdrawData.push({
    //       methodName: "Livvbet Cash",
    //       wallets: [
    //         {
    //           walletName: "Livvbet Cash",
    //           type: "cash",
    //           isActive: false,
    //           walletImage:
    //             "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1749203759/dollars_bhgsma.png",
    //         },
    //       ],
    //     });
    //   }
    // }

    const paymentSystemsData = await fetch(
      `${process.env.APAY_DOMAIN}/Remotes/payment-systems-info?project_id=${process.env.APAY_PROJECT_ID}`,
      {
        headers: {
          apikey: `${process.env.APAY_API_KEY}`,
          Accept: "*/*",
        },
      }
    );

    const paymentSystemsLogos = [
      {
        name: "bkash_a",
        label: "Bkash",
        image:
          "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1751090573/hkip9uxtopspwgnuergo.png",
      },
      {
        name: "nagad_a",
        label: "Nagad",
        image:
          "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1750324929/rlqqxeoqlk3gb3k2nyyr.png",
      },
      {
        name: "upay",
        label: "Upay",
        image:
          "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748973150/mxfaiajz2fawwkzy4l3e.png",
      },
    ];

    let paymentSystemsPayload = await paymentSystemsData.json();
    if (!paymentSystemsPayload.success) {
      throw Error;
    }
    paymentSystemsPayload = paymentSystemsPayload.payment_systems.map(
      (paymentSystem: any) => {
        const logo = paymentSystemsLogos.find(
          (logo) => logo.name == paymentSystem.name
        );

        return {
          ...paymentSystem,
          image: logo?.image,
          isActive: true,
          isRecommended: true,
          label: logo?.label,
        };
      }
    );

    if (type == "withdraw") {
      const agentConnectivity = (
        await db.users.findUnique({
          where: {
            id: user!.id,
          },
          select: { agent: true },
        })
      )?.agent;

      if (agentConnectivity) {
        paymentSystemsPayload = paymentSystemsPayload.map(
          (paymentSystem: any) => {
            return { ...paymentSystem, isActive: false };
          }
        );
        paymentSystemsPayload = [
          ...paymentSystemsPayload,
          {
            name: "Livvbet Cash",
            label: "Livvbet Cash",
            type: "cash",
            isActive: true,
            image:
              "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1749203759/dollars_bhgsma.png",
          },
        ];
      }
    }

    const recommended = paymentSystemsPayload.filter((paymentSystem: any) => {
      return paymentSystem.isRecommended;
    });

    return Response.json(
      {
        payload: {
          deposit: [
            { methodName: "Ewallet", wallets: paymentSystemsPayload },
            { methodName: "Recommended", wallets: recommended },
          ],
          withdraw: [
            { methodName: "Ewallet", wallets: paymentSystemsPayload },
            { methodName: "Recommended", wallets: recommended },
          ],
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log({ error });
    return Response.json({ message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
