import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Livvbet - Profile",
  description:
    "Deposit funds securely at Livvbet Companl! Choose from multiple payment methods, enjoy instant transactions, and start betting right away. Fast, safe, and hassle-free deposits!",
};

const DepsitLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default DepsitLayout;
