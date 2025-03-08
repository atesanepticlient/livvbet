"use client";
import React from "react";
import TabBar from "@/components/landing/TabBar";
import Wallet from "@/components/account/Wallet";
import AccountMenu from "@/components/account/AccountMenu";
import { Suspense } from "react";
const AccountPage = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className=" min-h-screen pb-24 md:pb-32">
        <main className="">
          <div className="md:hidden">
            <Wallet />
            <AccountMenu />
          </div>
          <div className="hidden md:block ">
            <h1>Hello This is account page</h1>
          </div>
        </main>
        <TabBar />
      </div>
    </Suspense>
  );
};

export default AccountPage;
