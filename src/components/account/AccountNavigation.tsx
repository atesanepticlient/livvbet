import React from "react";
import Wallet from "./Wallet";
import { GrTransaction } from "react-icons/gr";
import { PiHandDepositBold, PiHandWithdrawFill } from "react-icons/pi";
import { MdOutlineHistory, MdSecurity } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import AccountMenuItem from "./AccountMenuItem";
import LogoutModal from "../LogoutModal";

const AccountNavigation = () => {
  return (
    <div className="flex gap-6 bg-[#1A1A1A] flex-col overflow-y-auto min-h-[82vh] h-[82vh] px-2 py-2 ">
      <Wallet />
      <div className="bg-[#212121]  py-3 px-2 rounded-md">
        <span className="text-sm font-bold  text-[#9A9A9A] uppercase ">
          Account
        </span>
        <ul className="  overflow-hidden space-y-1">
          <AccountMenuItem
            lable="Personal profile"
            href="/account/profile"
            icon={<FaUserCircle className="w-5 md:h-5 text-white" />}
          />

          <AccountMenuItem
            lable="security"
            href="/account/security"
            icon={<MdSecurity className="w-5 h-5 text-white" />}
          />

          <AccountMenuItem
            lable="bet history"
            href="/account/bet-history"
            icon={<MdOutlineHistory className="w-5 h-5 text-white" />}
          />

          <AccountMenuItem
            lable="desposit"
            href="/account/deposit"
            icon={<PiHandDepositBold className="w-5 h-5 text-white" />}
          />

          <AccountMenuItem
            lable="withdraw"
            href="/account/withdraw"
            icon={<PiHandWithdrawFill className="w-5 h-5 text-white" />}
          />

          <AccountMenuItem
            lable="Transaction history"
            href="/account/transaction"
            icon={<GrTransaction className="w-5 h-5 text-white" />}
          />

          <li>
            <LogoutModal>
              <button className="w-full mt-4 rounded-sm bg-[#2e2e2e] hover:bg-[#3a3a3a] py-2 text-center flex items-center justify-center gap-2">
                {" "}
                <IoLogOut className="w-4 h-4" /> Logout
              </button>
            </LogoutModal>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountNavigation;
