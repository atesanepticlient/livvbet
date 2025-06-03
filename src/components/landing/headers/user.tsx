import React from "react";
import { FaUserAlt } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { RiUpload2Fill } from "react-icons/ri";
import { MdOutlineHistory } from "react-icons/md";

const User = () => {
  const navs = [
    {
      label: "Deposit",
      icon: FaDollarSign,
      link: "/account/deposit",
    },
    {
      label: "Withdraw",
      icon: RiUpload2Fill,
      link: "/account/withdraw",
    },
    {
      label: "Personal Profile",
      icon: FaUser,
      link: "/account/profile",
    },
    {
      label: "History",
      icon: MdOutlineHistory,
      link: "/account/transaction",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger>
        <button className="bg-[#1a1a1a] hover:bg-[#303030] text-white  hidden md:flex items-center gap-1 p-2 rounded-sm">
          <FaUserAlt className="w-4 h-4" />{" "}
          <IoIosArrowDown className="w-4 2-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] rounded-xl z-[1000] bg-white">
        {navs.map((nav, i) => (
          <Link
            key={i}
            className="flex items-center gap-2 text-[#2E2E2E] text-sm font-normal tracking-wide py-2 px-3 border-b border-b-[#E8E8E8] hover:bg-[#F2F2F2] hover:transition-colors"
            href={nav.link}
          >
            <nav.icon className="w-4 h-4 " />
            {nav.label}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default User;
