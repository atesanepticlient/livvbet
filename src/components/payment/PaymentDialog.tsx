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
    | Prisma.AdEWalletGetPayload<{ include: { eWallet: true } }>
    | Prisma.AgEWalletGetPayload<{ include: { eWallet: true } }>;
}) => {
  const [isDialogShow, setDialogShow] = useState(false);
  return (
    <>
      <DialogTrigger
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
            "absolute top-0 left-0 w-full h-full bg-primary/25 transition-all slider-animation"
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
    <div className=" relative mx-auto mt-24 md:mt-20 w-[95%] md:w-[350px]">
      <div onClick={() => onCloseClick()} className="cursor-pointer">
        <IoMdClose className="w-4 h-4 text-black absolute -right-2 top-2" />
      </div>
      {children}
    </div>
  );
};

export default PaymentDialog;
