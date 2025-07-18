import { Prisma } from "@prisma/client";
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: Prisma.UsersGetPayload<{
      include: { wallet: true; bonusWallet: true };
    }>;
  }

  interface Callbacks {
    session({ token, session });
  }
}
