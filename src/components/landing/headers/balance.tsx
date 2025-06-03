"use client";
import { useFetchWalletQuery } from "@/lib/features/paymentApiSlice";
import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { Skeleton } from "@/components/ui/skeleton";
const Balance = () => {
  const { data, isLoading, refetch, isFetching } = useFetchWalletQuery();

  const wallet = data?.wallet;

  return (
    <div>
      <div className="rounded-2xl flex overflow-hidden">
        <button
          onClick={() => {
            refetch();
          }}
          className="bg-[#1a1a1a] hover:bg-[#303030] text-white px-3 py-2"
        >
          <FiRefreshCw className="w-3 h-w" />
        </button>
        <div className="bg-[#1a1a1a] hover:bg-[#303030] cursor-default py-2 px-2">
          {wallet && !isLoading && !isFetching && (
            <p className="text-xs lg:text-sm font-normal truncate tracking-wide  !text-white/50">
              <span className="hidden md:inline">Main Account</span> (
              {wallet.currencyCode}){" "}
              <span className="text-white font-medium">{+wallet.balance}</span>
            </p>
          )}
          {(!wallet || isLoading || isFetching) && (
            <Skeleton className="w-[200px] h-[15px] py-1 rounded-sm bg-[#303030]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
