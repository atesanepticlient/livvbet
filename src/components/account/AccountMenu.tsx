"use client";
import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { MdSecurity, MdOutlineHistory } from "react-icons/md";
import { PiHandDepositBold, PiHandWithdrawFill } from "react-icons/pi";
import { GrTransaction } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";

import AccountMenuItem from "./AccountMenuItem";

const AccountMenu = () => {
  return (
    <div className="p-1 md:p-2">
      <ul>
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
          lable="My Message"
          href="/account/my-messages"
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

        <AccountMenuItem
          lable="log out"
          href="/logout"
          icon={<IoIosLogOut className="w-5 h-5 text-white" />}
        />
      </ul>
    </div>
  );
};

export default AccountMenu;
