import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Message",
  description:
    "Stay updated with all your messages! Access your complete message history, including notifications, alerts, and communications, all in one secure and organized place.",
};

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MessagesLayout;
