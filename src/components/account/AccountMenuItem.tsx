/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface AccountMenuItemProps {
  icon: React.ReactNode;
  lable: string;
  href: string;
}
const AccountMenuItem = ({ icon, lable, href }: AccountMenuItemProps) => {
  const pathname = usePathname();

  const isActive = pathname == href ? true : false;
  return (
    <li
      className={cn(
        "flex items-center  px-1 py-2  hover:bg-[#141414] border-l-2 border-l-transparent hover:border-l-[#FFB805] transition-all cursor-pointer",
        `${isActive && "bg-[#141414] border-l-[#FFB805]"}`
      )}
    >
      <Link href={href} className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center ">
          <div className={`${isActive && "!text-[#FFB805]"}`}>{icon}</div>
          <span className="text-sm md:text-base font-semibold md:font-medium text-white capitalize">
            {lable}
          </span>
        </div>

        <IoIosArrowForward className="w-5 h-5 md:hidden text-white" />
      </Link>
    </li>
  );
};

export default AccountMenuItem;
