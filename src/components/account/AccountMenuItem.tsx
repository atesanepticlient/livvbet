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
        "flex items-center  px-1 py-2  hover:bg-[#183E5D] border-l-2 border-l-transparent hover:border-l-primary transition-all cursor-pointer",
        `${isActive && "bg-[#183E5D] border-l-primary"}`
      )}
    >
      <Link href={href} className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center ">
          {icon}
          <span className="text-sm md:text-xs font-semibold md:font-medium text-white uppercase">
            {lable}
          </span>
        </div>

        <IoIosArrowForward className="w-5 h-5 md:hidden text-white" />
      </Link>
    </li>
  );
};

export default AccountMenuItem;
