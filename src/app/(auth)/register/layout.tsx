import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "1xBet - Betting Company Online Betting",

  description:
    "Join 1xBet Companl today! Register now to enjoy the best sports betting and casino games with exciting bonuses, fast payouts, and a secure platform. Sign up in seconds!",
};

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;
