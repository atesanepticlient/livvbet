"use client";
import React, { useEffect } from "react";
import TabBar from "@/components/landing/TabBar";
import Wallet from "@/components/account/Wallet";
import AccountMenu from "@/components/account/AccountMenu";
import { redirect } from "next/navigation";
const AccountPage = () => {
  useEffect(() => {
    redirect("/account/profile");
  }, []);
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
