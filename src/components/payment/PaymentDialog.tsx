"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import PaymentMain from "./PaymentMain";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";

const PaymentDialog = ({
  children,
  wallet,
}: {
  children: React.ReactNode;
  wallet:
    | Prisma.DepositEWalletGetPayload<object>
    | Prisma.DepositEWalletGetPayload<object>;
}) => {
  const [isDialogShow, setDialogShow] = useState(false);
  return (
    <>
      <DialogTrigger
        disable={!wallet.isActive}
        onClick={() => {
          if (!wallet.isActive) return;
          setDialogShow(true);
        }}
      >
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
            "absolute top-0 left-0 w-full h-full bg-[#141B1F]/25 transition-all slider-animation"
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
  disable: boolean;
  onClick: () => void;
}> = ({ children, onClick, disable }) => {
  return (
    <button disabled={disable} onClick={() => onClick()}>
      {children}
    </button>
  );
};

const DialogContent = ({
  children,
  onCloseClick,
}: {
  children: React.ReactNode;
  onCloseClick: () => void;
}) => {
  return (
    <div className="z-[100] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto mt-24 md:mt-20 w-[95%] md:w-[350px]">
      <div onClick={() => onCloseClick()} className="cursor-pointer">
        <IoMdClose className="w-4 h-4 text-black absolute -right-8 top-4" />
      </div>
      {children}
    </div>
  );
};

export default PaymentDialog;
