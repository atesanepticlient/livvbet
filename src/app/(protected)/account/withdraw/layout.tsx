import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Withdraw Found",
  description:
    "Easily withdraw your winnings from 1xbet company. Fast and secure payouts with multiple withdrawal methods, including bank transfer, e-wallets, and cryptocurrencies. Get your money instantly!",
};

const DepsitLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default DepsitLayout;
