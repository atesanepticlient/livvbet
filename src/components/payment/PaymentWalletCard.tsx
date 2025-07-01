/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import PaymentDialog from "./PaymentDialog";

const PaymentWalletCard = ({ wallet }: { wallet: any }) => {
  return (
    <PaymentDialog wallet={wallet}>
      <div className="cursor-pointer hover:shadow-md">
        <div className="h-[65px] bg-white flex justify-center items-center">
          <Image
            src={wallet.image}
            width={90}
            height={40}
            alt={wallet.name}
            className={`w-[90px] h-[40px] wallet-image mx-auto object-cover ${
              !wallet.isActive && "saturate-0"
            }`}
          />
        </div>
        <div className="bg-[#555555] text-white w-full py-1 md:py-2">
          {wallet.label}
        </div>
      </div>
    </PaymentDialog>
  );
};

export default PaymentWalletCard;
