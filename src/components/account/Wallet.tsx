"use client";
import React from "react";
import useCurrentUser from "@/hook/useCurrentUser";

const Wallet = () => {
  const user = useCurrentUser();
  return (
    <div className="  bg-[#212121]  rounded-md ">
      <div className="bg-[#2E2E2E] rounded-t-md p-3">
        <div className="text-[10px] font-normal md:text-xs ">
          <span className="text-white text-base md:text-lg font-semibold">
            {user!.firstName + user!.lastName}
          </span>
          <span className="text-white/75 uppercase block text-sm">
            P-{user!.playerId}
          </span>
        </div>
      </div>

      <div className="px-3 py-2">
        <div className="my-1 md:my-2 flex items-center justify-between">
          <span className="font-semibold text-[#9999] text-xs md:text-sm">
            Bonus Points
          </span>
          <span className="font-semibold text-white text-sm md:text-base">
            0
          </span>
        </div>
        <div className="my-1 md:my-2 flex items-center justify-between">
          <span className="font-semibold text-[#9999] text-xs md:text-sm">
            Main account
          </span>
          <span className="font-semibold text-white text-sm md:text-base">
            {user!.wallet!.balance.toString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
