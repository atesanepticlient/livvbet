"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import PaymentMain from "./PaymentMain";
import { PaymentWallet } from "@/store/types";
import { cn } from "@/lib/utils";

const PaymentDialog = ({
  children,
  wallet,
}: {
  children: React.ReactNode;
  wallet: PaymentWallet;
}) => {
  const [isDialogShow, setDialogShow] = useState(false);
  return (
    <>
      <DialogTrigger onClick={() => setDialogShow(true)}>
        {children}
      </DialogTrigger>

      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full  flex justify-center items-center ",
          `${isDialogShow ? "block" : "hidden"}`
        )}
      >
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-primary/25 transition-all slider-animation",
            
          )}
        ></div>
        <DialogContent onCloseClick={() => setDialogShow(false)}>
          <PaymentMain wallet={wallet} />
        </DialogContent>
      </div>
    </>
  );
};

const DialogTrigger: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
}> = ({ children, onClick }) => {
  return <button onClick={() => onClick()}>{children}</button>;
};

const DialogContent = ({
  children,
  onCloseClick,
}: {
  children: React.ReactNode;
  onCloseClick: () => void;
}) => {
  return (
    <div className="w-max relative mx-auto mt-24 md:mt-20 ">
      <div onClick={() => onCloseClick()} className="cursor-pointer">
        <IoMdClose className="w-4 h-4 text-black absolute -right-6 top-2" />
      </div>
      {children}
    </div>
  );
};

export default PaymentDialog;
