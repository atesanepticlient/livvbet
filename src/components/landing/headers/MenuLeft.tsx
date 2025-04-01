"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/assets/svg/logo2.svg";

// import {
//   MdSportsBaseball,
//   MdSportsEsports,
//   MdEmojiEvents,
//   MdOutlineCasino,
//   MdLiveTv,
// } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";
// import { cn } from "@/lib/utils";

import AuthButtons from "@/components/auth/AuthButtons";
import AccountNavigation from "@/components/account/AccountNavigation";
const Menusm = ({ children }: { children: React.ReactNode }) => {
  // const [seletecdMenuItem, setSelectedMenuItem] = useState("");

  // const handleSelectMenuIcem = (item: string) => {
  //   if (seletecdMenuItem == item) {
  //     setSelectedMenuItem("");
  //   } else {
  //     setSelectedMenuItem(item);
  //   }
  // };

  return (
    <div>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className=" relative">
              <Link href="/" className="max-w-max relative bg-red-500">
                <Image
                  src={logo}
                  alt="1XBet Companl"
                  className="w-[80px] md:w-[100px] "
                />
              </Link>
              <span className="absolute top-0 left-24 text-[10px] text-white bg-brand-foreground rounded-sm  w-max text-center px-1 leading-[14px] uppercase">
                Company
              </span>
            </SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col">
            <AccountNavigation />
            <AuthButtons />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menusm;
