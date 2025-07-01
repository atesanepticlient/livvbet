/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import useCurrentUser from "@/hook/useCurrentUser";
import { useFetchTransactionsQuery } from "@/lib/features/paymentApiSlice";
import moment from "moment";
import { ScaleLoader } from "react-spinners";

const TransactionList = () => {
  const { data, isLoading } = useFetchTransactionsQuery();

  const withdraws = data?.payload?.withdraws;
  const deposits = data?.payload?.deposits;
  console.log("DEPOSIT : ", deposits);
  const user = useCurrentUser();

  return (
    <div className="bg-[#E8E8E8] py-3 md:py-0 px-2 md:px-0 min-h-screen md:min-h-auto">
      {isLoading && !data && (
        <div className="my-10 w-full h-[300px] flex justify-center items-center">
          <ScaleLoader color="#2E2E2E" />
        </div>
      )}
      {!isLoading && data && (
        <Tabs defaultValue={"deposits"}>
          <TabsList>
            <TabsTrigger
              value="deposits"
              className="capitalize font-normal tracking-wide px-4 lg:px-8 bg-[#1a1a1a10] !text-[#1A1A1A] data-[state=active]:!text-white data-[state=active]:bg-[#2e2e2e] hover:bg-[#4F4F4F] hover:!text-white rounded-s-xl"
            >
              Deposits
            </TabsTrigger>
            <TabsTrigger
              value="withdraws"
              className="capitalize font-normal tracking-wide px-4 lg:px-8 bg-[#1a1a1a10] !text-[#1A1A1A] data-[state=active]:bg-[#2e2e2e] data-[state=active]:!text-white hover:bg-[#4F4F4F] hover:!text-white rounded-e-xl"
            >
              Withdraws
            </TabsTrigger>
          </TabsList>
          <p className="py-4 text-base lg:text-lg font-semibold  text-[#2e2e2e] ">
            Account 345734590
          </p>
          <TabsContent value="deposits">
            <div className="  ">
              {deposits!.length == 0 && (
                <div className="bg-white rounded-3xl relative w-full h-[300px] lg:h-[400px]">
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                    <h3 className="text-base lg:text-lg font-semibold text-[#3B3B3B]">
                      No transactions
                    </h3>
                    <p className="font-normal text-xs lg:text-sm text-[#3b3b3ba8] max-w-[250px] mx-auto">
                      Your monetary transactions will be displayed here
                    </p>
                  </div>
                </div>
              )}

              {deposits!.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                  {deposits?.map((deposit: any, i: number) => (
                    <div
                      key={i}
                      className="bg-white flex items-center justify-between px-3 py-2 rounded-sm shadow-sm"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-[#1A1A1A] tracking-wide">
                          {+deposit.amount} {deposit.currency} Deposit Request
                        </h4>
                        <span className="text-xs font-normal text-[#1a1a1acb]">
                          {moment.unix(deposit.created_at).calendar()}
                        </span>
                      </div>
                      <PaymentStatusText status={deposit.status} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="withdraws">
            {withdraws!.length == 0 && (
              <div className="bg-white rounded-3xl relative w-full h-[300px] lg:h-[400px]">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-base lg:text-lg font-semibold text-[#3B3B3B]">
                    No transactions
                  </h3>
                  <p className="font-normal text-xs lg:text-sm text-[#3b3b3ba8] max-w-[250px] mx-auto">
                    Your monetary transactions will be displayed here
                  </p>
                </div>
              </div>
            )}
            {withdraws!.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                {withdraws?.map((withdraw: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white flex items-center justify-between px-3 py-2 rounded-sm shadow-sm"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#1A1A1A] tracking-wide">
                        {+withdraw.amount} {user?.wallet?.currencyCode} Withdraw
                        Request
                      </h4>
                      <span className="text-xs font-normal text-[#1a1a1acb]">
                        {moment.unix(withdraw.created_at).calendar()}
                      </span>
                    </div>
                    <PaymentStatusText status={withdraw.status} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

const PaymentStatusText = ({ status }: { status: any }) => {
  return (
    <span
      className={`px-2 lg:px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
        status === "Pending"
          ? "text-[#FFC107] bg-[#ffc10728]"
          : status === "Success"
          ? "bg-blue-600 bg-blue-600/15"
          : "text-red-600 bg-red-600/15"
      }`}
    >
      {status}
    </span>
  );
};

export default TransactionList;
