import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Transaction",
  description:
    "Track all your betting transactions in one place! View your complete history of deposits and withdrawals with real-time updates, secure payments, and seamless fund management.",
};
const TransactionLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default TransactionLayout;
