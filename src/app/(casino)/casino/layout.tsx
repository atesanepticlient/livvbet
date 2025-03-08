import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "1xBet - Casino",
  description:
    "Experience the thrill of casino gaming at 1xBet Companl! Play slots, roulette, blackjack, and live dealer games. Big wins, exciting bonuses, and non-stop entertainment await. Join now!Experience the thrill of casino gaming at 1xBet Companl! Play slots, roulette, blackjack, and live dealer games. Big wins, exciting bonuses, and non-stop entertainment await. Join now!",
};

const CasinoLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default CasinoLayout;
