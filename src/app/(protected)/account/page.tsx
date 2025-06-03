import React from "react";
import TabBar from "@/components/landing/TabBar";
import Wallet from "@/components/account/Wallet";
import AccountMenu from "@/components/account/AccountMenu";

const AccountPage = () => {
  return (
    <div className=" min-h-screen pb-24 md:pb-32">
      <main className="">
        <div className="md:hidden">
          <Wallet />
          <AccountMenu />
        </div>
        <div className="hidden md:block "></div>
      </main>
      <TabBar />

      
    </div>
  );
};

export default AccountPage;
