import React, { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AccountSettingSheet = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent
          className="!bg-[#1e3b5ad9] w-[50%] !border-none"
          side={"right"}
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="mt-4"></div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AccountSettingSheet;
