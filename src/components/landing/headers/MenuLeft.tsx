"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        <SheetContent
          side={"left"}
          className="!bg-transparent !px-0 !border-none"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
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
