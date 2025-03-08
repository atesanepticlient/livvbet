/* eslint-disable @typescript-eslint/no-unused-vars */
import AccountNavigation from "@/components/account/AccountNavigation";
import Footer from "@/components/landing/footer/Footer";
import { Metadata } from "next";
import React from "react";
import Header from "@/components/landing/headers/Header";
export const metadata: Metadata = {
  title: "1xBet - Account",
  description:
    "Manage your 1xBet Companl account with ease! Check your balance, update details, track bets, and enjoy seamless withdrawals and deposits. Secure and fast access anytime. Log in now!",
};

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#0B2B44]  ">
      {/* <Header />
      <div className="hidden md:block relative overflow-hidden">
        <div className="grid grid-cols-[18%,_82%]">
          <AccountNavigation />
          <div className="">{children}</div>
        </div>
      </div>
      <div className="md:hidden">{children}</div>
      <Footer /> */}
      hello
    </div>
  );
};

export default AccountLayout;
