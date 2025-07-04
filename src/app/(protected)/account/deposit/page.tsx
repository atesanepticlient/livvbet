import React from "react";
import PageHeader from "@/components/PageHeader";
import PaymentFilterButton from "@/components/account/deposit/PaymentFilterButton";
import { RiErrorWarningFill } from "react-icons/ri";
import Payment from "@/components/payment/Payment";
import PaymentWapper from "@/components/payment/PaymentWapper";
import { findCurrentUser } from "@/data/user";
import SupportMailText from "@/components/support-mail-text";
const DepositPage = async () => {
  const user = await findCurrentUser();
  return (
    <div className="bg-white rounded-sm shadow-sm  p-2">
      <main>
        <PageHeader label="Deposit into personal account" />

        <div className="p-1">
          <div className="py-2">
            <h4 className="text-[#212121] uppercase text-base md:text-xl font-bold md:font-semibold ">
              Account Id : {user?.playerId}
            </h4>
            <p className="hidden md:text-sm text-accent">
              Select payment method to top up your account:
            </p>
          </div>
          <PaymentFilterButton />
          <div className="bg-[#e0e0e0] mt-2 p-1 md:p-2 flex items-center gap-2 md:gap-3">
            <div className=" w-[12%] md:w-[7%]">
              <RiErrorWarningFill className="w-12 h-12 text-[#2d3842] mx-auto" />
            </div>

            <p className="text-[#2d3842] text-xs md:text-sm w-[70%]">
              আপনি যদি ৭২ ঘন্টার মধ্যে আপনার গেমিং অ্যাকাউন্টে ডিপোজিটের টাকা না
              পান তাহলে অনুগ্রহ করে লেনদেনের প্রমাণ সহ আমাদের সাধারণ ইমেইল
              এ্যাড্রেস <SupportMailText /> -এ যোগাযোগ করুন পরবর্তী বিবরণে দয়া
              করে লিখুন আপনার Player id, Transaction ID, Client no, Agent
              number, Time, date, Amount , এবং বিকাশ /নগদ /রকেট /উপায় অ্যাপ থেকে
              লেনদেনের স্ক্রিনশট / If You do not receive the deposit amount in
              your gaming account within 72 hours please contact our general
              queries email <SupportMailText /> with next details: Player id,
              Transaction ID, Client no, Agent number, Time, Date, Amount,
              Transaction Screenshot from app
            </p>
          </div>
        </div>

        <PaymentWapper type="deposit">
          <Payment />
        </PaymentWapper>
      </main>
    </div>
  );
};

export default DepositPage;
