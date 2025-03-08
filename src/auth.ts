import NextAuth from "next-auth";
import { db } from "./lib/db";
import { findUserById } from "./data/user";
import authConfig from "./auth.config";

export const { signIn, signOut, auth, handlers } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token }) {
      const user = await findUserById(token.sub!);
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        const user = await db.users.findUnique({
          where: { id: token.sub },
          include: { wallet: true },
        });

        if (user?.password) {
          user.password = "";
        }

        if (user) {
          session.user = { ...user, emailVerified: new Date() };
        }
      }
      return session;
    },
  },
});
