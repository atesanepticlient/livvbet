// "use server";
// import { registerSchema } from "@/schema";
// import zod from "zod";

// import { db } from "@/lib/db";
// import { findUserByEmail } from "@/data/user";
// import bcrypt from "bcryptjs";

// import { playerIdGenerate } from "@/lib/helpers";
// import { INTERNAL_SERVER_ERROR } from "@/error";
// import { SIGNUP_SUCCESS } from "@/success";
// // import { createAccount } from "@/provider/createAccount";
// // import { createSportBookAccount } from "@/provider/createSportbook";

// export const register = async (data: zod.infer<typeof registerSchema>) => {
//   const exitingUser = await findUserByEmail(data.email);
//   if (exitingUser) {
//     return { error: "The Email already has an account" };
//   }

//   const exitingUserWithPhone = await db.users.findFirst({
//     where: { phone: data.phone },
//   });

//   if (exitingUserWithPhone) {
//     return { error: "The Phone already has an account" };
//   }
//   const { email, firstName, lastName, currencyCode, password, promo, phone } =
//     data;

//   try {
//     const hasedPassword = bcrypt.hashSync(password, 10);
//     const playerId = await playerIdGenerate();

//     const newUser = await db.users.create({
//       data: {
//         email,
//         phone,
//         firstName,
//         lastName,
//         password: hasedPassword,
//         casinoPassword: password,
//         playerId: playerId!,
//         turnOver: {},
//         referral: {
//           create: {},
//         },
//         wallet: {
//           create: {
//             balance: 0,
//             currencyCode,
//           },
//         },
//         bonusWallet: {
//           create: {
//             balance: 0,
//             turnOver: 0,
//             currencyCode,
//           },
//         },
//       },
//       include: { wallet: true },
//     });

//     const promoUser = await db.users.findFirst({
//       where: { referId: promo },
//       include: { referral: true },
//     });

//     if (promoUser) {
//       await db.$transaction([
//         db.referral.update({
//           where: { userId: promoUser.id },
//           data: {
//             referredUsers: {
//               connect: {
//                 id: newUser.id,
//               },
//             },
//           },
//         }),
//         db.users.update({
//           where: { id: newUser.id },
//           data: {
//             referral: {
//               connect: { id: promoUser!.referral!.id },
//             },
//           },
//         }),
//       ]);

//       const site = await db.site.findFirst({
//         where: {},
//         select: {
//           referBonuseMainUser: true,
//           referBonuseRefererUser: true,
//           turnover: true,
//         },
//       });

//       await db.bonusWallet.update({
//         where: {
//           userId: newUser.id,
//         },
//         data: {
//           balance: {
//             increment: site!.referBonuseMainUser!,
//           },
//           turnOver: {
//             increment: +site!.referBonuseMainUser! * +site!.turnover!,
//           },
//         },
//       });
//       await db.bonusWallet.update({
//         where: {
//           userId: promoUser.id,
//         },
//         data: {
//           balance: {
//             increment: site!.referBonuseRefererUser!,
//           },
//           turnOver: {
//             increment: +site!.referBonuseRefererUser! * +site!.turnover!,
//           },
//         },
//       });

//       await db.message.create({
//         data: {
//           title: `You have received ${site!.referBonuseMainUser} Bonus`,
//           user: {
//             connect: {
//               id: newUser.id,
//             },
//           },
//         },
//       });

//       await db.message.create({
//         data: {
//           title: `You have received ${
//             site!.referBonuseMainUser
//           }  Bonus from you referred user`,
//           user: {
//             connect: {
//               id: promoUser.id,
//             },
//           },
//         },
//       });
//     }

//     // const casinoAccount = await createAccount({
//     //   consumerId: +process.env.B2B_CONSUMER_ID!,
//     //   userName: newUser.playerId,
//     //   password: newUser.casinoPassword,
//     //   currencyCode: newUser.wallet!.currencyCode,
//     //   firstName: newUser.firstName,
//     //   lastName: newUser.lastName,
//     // });

//     // const sportsBookRes = await createSportBookAccount({
//     //   agent: process.env.SPORTBOOK_AGENT_NAME!,
//     //   secret: process.env.SPORTBOOK_CONSUMER_SECERT!,
//     //   userName: newUser!.playerId,
//     // });

//     // console.log({ sportsBookRes });
//     // console.log({ casinoAccount });

//     return {
//       success: SIGNUP_SUCCESS,
//     };
//   } catch (error) {
//     console.log("Signup error ", error);
//     return { error: INTERNAL_SERVER_ERROR };
//   }
// };

// -----------------------------
"use server";
import { registerSchema } from "@/schema";
import zod from "zod";
import { db } from "@/lib/db";
import { findUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import { playerIdGenerate, referIdGenerate } from "@/lib/helpers";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { SIGNUP_SUCCESS } from "@/success";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (data: zod.infer<typeof registerSchema>) => {
  const exitingUser = await findUserByEmail(data.email);
  if (exitingUser) {
    return { error: "The Email already has an account" };
  }

  const exitingUserWithPhone = await db.users.findFirst({
    where: { phone: data.phone },
  });

  if (exitingUserWithPhone) {
    return { error: "The Phone already has an account" };
  }

  try {
    // Generate OTP and send email
    const token = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(new Date().getTime() + 15 * 60 * 1000); // 15 minutes expiry

    await db.verificationToken.upsert({
      where: { email: data.email },
      update: { token, expires },
      create: {
        email: data.email,
        token,
        expires,
      },
    });

    await sendVerificationEmail(data.email, token);

    return {
      success: "OTP sent to your Email",
      requiresOtp: true,
      email: data.email,
    };
  } catch {
    return { error: INTERNAL_SERVER_ERROR };
  }
};

export const verifyOtpAndRegister = async (
  email: string,
  otp: string,
  userData: zod.infer<typeof registerSchema>
) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { email },
    });

    if (!verificationToken) {
      return { error: "OTP not found. Please request a new one." };
    }

    if (verificationToken.token !== otp) {
      return { error: "Invalid OTP" };
    }

    if (new Date() > verificationToken.expires) {
      return { error: "OTP has expired. Please request a new one." };
    }

    // If OTP is valid, proceed with registration
    const { firstName, lastName, currencyCode, password, promo, phone } =
      userData;

    const hasedPassword = bcrypt.hashSync(password, 10);
    const playerId = await playerIdGenerate();

    const referId = await referIdGenerate(6);

    const newUser = await db.users.create({
      data: {
        email,
        phone,
        firstName,
        lastName,
        password: hasedPassword,
        casinoPassword: password,
        playerId: playerId!,
        referId,

        turnOver: {},
        referral: {
          create: {},
        },

        wallet: {
          create: {
            balance: 0,
            currencyCode,
          },
        },
        bonusWallet: {
          create: {
            balance: 0,
            turnOver: 0,
            currencyCode,
          },
        },
        bettingRecord: {
          create: {
            totalBet: 0,
            totalWin: 0,
          },
        },
      },
      include: { wallet: true },
    });

    const promoUser = await db.users.findFirst({
      where: { referId: promo },
      include: { referral: true },
    });

    if (promoUser) {
      await db.$transaction([
        db.referral.update({
          where: { userId: promoUser.id },
          data: {
            referredUsers: {
              connect: {
                id: newUser.id,
              },
            },
          },
        }),
        db.users.update({
          where: { id: newUser.id },
          data: {
            referral: {
              connect: { id: promoUser!.referral!.id },
            },
          },
        }),
      ]);

      const site = await db.site.findFirst({
        where: {},
        select: {
          referBonuseMainUser: true,
          referBonuseRefererUser: true,
          turnover: true,
        },
      });

      await db.bonusWallet.update({
        where: {
          userId: newUser.id,
        },
        data: {
          balance: {
            increment: site!.referBonuseMainUser!,
          },
          turnOver: {
            increment: +site!.referBonuseMainUser! * +site!.turnover!,
          },
        },
      });
      await db.bonusWallet.update({
        where: {
          userId: promoUser.id,
        },
        data: {
          balance: {
            increment: site!.referBonuseRefererUser!,
          },
          turnOver: {
            increment: +site!.referBonuseRefererUser! * +site!.turnover!,
          },
        },
      });

      await db.message.create({
        data: {
          title: `You have received ${site!.referBonuseMainUser} Bonus`,
          user: {
            connect: {
              id: newUser.id,
            },
          },
        },
      });

      await db.message.create({
        data: {
          title: `You have received ${
            site!.referBonuseMainUser
          }  Bonus from you referred user`,
          user: {
            connect: {
              id: promoUser.id,
            },
          },
        },
      });
    }

    // Delete the verification token after successful registration
    await db.verificationToken.delete({ where: { email } });

    return {
      success: SIGNUP_SUCCESS,
    };
  } catch (error) {
    console.log("Registration error ", error);
    return { error: INTERNAL_SERVER_ERROR };
  }
};
