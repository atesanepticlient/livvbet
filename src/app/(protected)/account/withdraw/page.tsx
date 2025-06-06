import React from "react";
import PageHeader from "@/components/PageHeader";
import PaymentFilterButton from "@/components/account/deposit/PaymentFilterButton";
import { RiErrorWarningFill } from "react-icons/ri";
import Payment from "@/components/payment/Payment";
import PaymentWapper from "@/components/payment/PaymentWapper";
import { findCurrentUser } from "@/data/user";
const WithdrawPage = async () => {
  const user = await findCurrentUser();
  return (
    <div className="bg-white  md:px-4 md:py-5">
      <main>
        <PageHeader label="Withfound" />

        <div className="p-1">
          <div>
            <h4 className="text-accent uppercase text-base md:text-xl font-semibold md:font-medium">
              Account Id : {user?.playerId}
            </h4>
            <p className="hidden md:text-sm text-accent">
              Select payment method to withdraw money::
            </p>
          </div>
          <PaymentFilterButton />
          <div className="bg-[#e0e0e0] mt-2 p-1 md:p-2 flex items-center gap-2 md:gap-3">
            <div className=" w-[12%] md:w-[7%]">
              <RiErrorWarningFill className="w-12 h-12 text-[#2d3842] mx-auto" />
            </div>

            <p className="text-[#2d3842] text-xs md:text-sm w-[70%]">
              আপনি যদি ৭২ ঘন্টার মধ্যে ডিপোজিটের টাকা না পান, তাহলে অনুগ্রহ করে
              সকল স্টেটমেন্ট সহ transaction-bn@1xbet-team.com ইমেইলে যোগাযোগ
              করুন পরবর্তী বিবরণে দয়া করে লিখুন আপনার Player id, Wallet Number,
              Date, Time, Amount, Request ID, ২ দিন সময়কালের ভিডিও/ If You have
              not received funds within 72 hours, please write to email
              transaction-bn@1xbet-team.com with next details: Player id, Wallet
              number, Date, Time, Amount, Request ID and Video including 1 day
              before and after withdraw date
            </p>
          </div>
        </div>

        <PaymentWapper type="withdraw">
          <Payment />
        </PaymentWapper>
      </main>
    </div>
  );
};

export default WithdrawPage;
