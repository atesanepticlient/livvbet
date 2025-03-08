import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "1xBet - Bet Splip",
  description: "Your Bet Slip. Please Complete your all bets",
};

const BetSlipLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default BetSlipLayout;
