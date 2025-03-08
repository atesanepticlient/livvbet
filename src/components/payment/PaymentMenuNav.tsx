"use client";

import React from "react";
import PaymentMethodFilterMenu from "./PaymentMethodFilterMenu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PaymentMethodNav = () => {
  return (
    <div className="w-full hidden md:block">
      <PaymentMethodFilterMenu />
    </div>
  );
};
export const PaymentMethodNavSm = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="payment-method-nav-dialog">
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent
          side={"left"}
          className="!border-none !w-full bg-primary/15"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="mt-24 w-[70%]">
            <PaymentMethodFilterMenu />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PaymentMethodNav;
