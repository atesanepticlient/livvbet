"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";

import { MdSportsCricket } from "react-icons/md";
import { IoFootball } from "react-icons/io5";
import { IoMdBasketball } from "react-icons/io";
import { MdCasino } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { Home } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isActive: false,
      items: [],
    },
    {
      title: "Cricket",
      url: "/sports/loading",
      icon: MdSportsCricket,
      items: [],
    },
    {
      title: "Football",
      url: "/sports/loading",
      icon: IoFootball,
      items: [],
    },
    {
      title: "Basketball",
      url: "/sports/loading",
      icon: IoMdBasketball,
      items: [],
    },
    {
      title: "Casino",
      url: "/sports/casino",
      icon: MdCasino,
      items: [],
    },
    {
      title: "live",
      url: "/sports/casino",
      icon: IoIosStar,
      items: [],
    },
    {
      title: "1xGames",
      url: "/sports/casino",
      icon: IoIosStar,
      items: [],
    },
  ],
};

export function AppSidebar({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="!bg-[#1e3b5ad9] w-[50%] !border-none" side={"right"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="mt-3">
          <NavMain items={data.navMain} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: any;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <>
      {items.map((item, i) => (
        <Link
          href={item.url}
          className="flex items-center gap-2 justify-start "
          key={i}
        >
          {item.icon && <item.icon className="w-6 h-6 text-white" />}
          <span className="text-white text-sm font-semibold">{item.title}</span>
        </Link>
      ))}
    </>
  );
}
