import React from "react";
import Wallet from "./Wallet";
import { IoIosLogOut } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { PiHandDepositBold, PiHandWithdrawFill } from "react-icons/pi";
import { MdOutlineHistory, MdSecurity } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import AccountMenuItem from "./AccountMenuItem";

const AccountNavigation = () => {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <Wallet />
      <ul className="bg-[#113455] flex-1 py-3 px-2">
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
          href="#"
          icon={<PiHandDepositBold className="w-5 h-5 text-white" />}
        />

        <AccountMenuItem
          lable="withdraw"
          href="#"
          icon={<PiHandWithdrawFill className="w-5 h-5 text-white" />}
        />

        <AccountMenuItem
          lable="Transaction history"
          href="#"
          icon={<GrTransaction className="w-5 h-5 text-white" />}
        />

        <AccountMenuItem
          lable="log out"
          href="#"
          icon={<IoIosLogOut className="w-5 h-5 text-white" />}
        />
      </ul>
    </div>
  );
};

export default AccountNavigation;
