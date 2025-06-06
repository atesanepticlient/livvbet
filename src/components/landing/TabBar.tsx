"use client";

import React from "react";
import { MdCasino } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const TabBar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#212121] shadow-lg md:hidden fixed z-[500000000] left-1/2 -translate-x-1/2 bottom-0 md:bottom-3 w-full md:w-[600px] h-[65px] md:h-[70px] md:rounded-full flex py-1 md:py-2">
      <Link
        href="/"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <IoMdHome
          className={cn(
            "w-6 h-6 text-white opacity-50",
            `${
              pathname == "/" &&
              "bg-[#FFB805] rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white transtion  "
            }`
          )}
        />
        <span
          className={cn(
            "text-white text-sm",
            `${pathname === "/" && "font-medium text-[#FFB805]"}`
          )}
        >
          Home
        </span>
      </Link>
      <Link
        href="/sports"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <FaTrophy
          className={cn(
            "w-6 h-6 text-white opacity-50 tab-menu-icon",
            `${
              pathname == "/sports" &&
              "bg-[#FFB805] rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white  "
            }`
          )}
        />
        <span
          className={cn(
            "text-white text-sm",
            `${pathname === "/sports" && "font-medium text-[#FFB805]"}`
          )}
        >
          Sports
        </span>
      </Link>
      <Link
        href="/casino"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <MdCasino
          className={cn(
            "w-6 h-6 text-white opacity-50 tab-menu-icon",
            `${
              pathname == "/casino" &&
              "bg-[#FFB805] rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white transtion  "
            }`
          )}
        />
        <span
          className={cn(
            "text-white text-sm",
            `${pathname === "/casino" && "font-medium text-[#FFB805]"}`
          )}
        >
          Casino
        </span>
      </Link>

      <Link
        href="/account"
        className="flex-1 flex justify-center items-center flex-col tab-menu"
      >
        <IoMenuSharp
          className={cn(
            "w-6 h-6 text-white opacity-50 tab-menu-icon",
            `${
              pathname == "/account" &&
              "bg-[#FFB805] rounded-full w-6 h-6 opacity-100 text-white p-1 hover:text-white transtion  "
            }`
          )}
        />
        <span
          className={cn(
            "text-white text-sm",
            `${pathname === "/account" && "font-medium text-[#FFB805]"}`
          )}
        >
          Menu
        </span>
      </Link>
    </div>
  );
};

export default TabBar;
