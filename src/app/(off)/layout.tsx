import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "1xBet - Sports",
  description:
    "Bet on your favorite sports with 1xBet Companl! Get the best odds on football, basketball, tennis, and more. Live betting, fast payouts, and exciting promotions await. Join now!",
};

const SportsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SportsLayout;
