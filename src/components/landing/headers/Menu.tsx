"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";

import Slots from "@/components/icons/slots";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Casino from "@/components/icons/casino";
import BasketBall from "@/components/icons/basketball";
import Football from "@/components/icons/football";
import Cricket from "@/components/icons/cricket";
import Home from "@/components/icons/home";
import LiveCasino from "@/components/icons/live-casino";

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
      url: "/sports",
      icon: Cricket,
      items: [],
    },
    {
      title: "Football",
      url: "/sports",
      icon: Football,
      items: [],
    },
    {
      title: "Basketball",
      url: "/sports",
      icon: BasketBall,
      items: [],
    },
    {
      title: "Casino",
      url: "/casino",
      icon: Casino,
      items: [],
    },
    {
      title: "live",
      url: "/live",
      icon: LiveCasino,
      items: [],
    },
    {
      title: "Slots",
      url: "/casino/slots",
      icon: Slots,
      items: [],
    },
  ],
};

export function AppSidebar({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        className="!bg-[#212121] w-[50%] !border-none"
        side={"right"}
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="mt-3 space-y-3">
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
          {item.icon && (
            <>
              <item.icon />
            </>
          )}
          <span className="text-white text-sm font-medium">{item.title}</span>
        </Link>
      ))}
    </>
  );
}
