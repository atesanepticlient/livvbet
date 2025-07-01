"use client";
import { useFetchWalletQuery } from "@/lib/features/paymentApiSlice";
import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
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
          className="bg-[#1a1a1a] hidden md:block hover:bg-[#303030] text-white px-2 md:px-3 py-2"
        >
          <FiRefreshCw className="w-3 h-3" />
        </button>
        <Link
          href="/account/deposit"
          className="bg-[#1a1a1a] flex items-center justify-center md:hidden hover:bg-[#303030] text-white px-2 md:px-3 py-2"
        >
          <FiPlus className="w-3 h-3" />
        </Link>
        <div className="bg-[#1a1a1a] hover:bg-[#303030] cursor-default py-2 px-2">
          {wallet && !isLoading && !isFetching && (
            <p className="text-xs lg:text-sm font-normal truncate tracking-wide  !text-white/50 px-2 md:px-0">
              <span className="hidden md:inline">Main Account</span>
              <span className="hidden md:inline">({wallet.currencyCode}) </span>
              <span className="text-white font-medium">{+wallet.balance}</span>
            </p>
          )}
          {(!wallet || isLoading || isFetching) && (
            <Skeleton className="w-[40px] md:w-[200px] h-[15px] py-1 rounded-sm bg-[#303030]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
