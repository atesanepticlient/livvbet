import { PaymentWallet } from "@/store/types";
import React from "react";
import Image from "next/image";
import PaymentDialog from "./PaymentDialog";

const PaymentWalletCard = ({ wallet }: { wallet: PaymentWallet }) => {
  return (
    <PaymentDialog wallet={wallet}>
      <div className="cursor-pointer hover:shadow-md">
        <div className="h-[45px] bg-white flex justify-center items-center">
          <Image
            src={wallet.image}
            width={90}
            height={40}
            alt={wallet.walletName}
            className="w-[90px] h-[40px] wallet-image mx-auto object-cover"
          />
        </div>
        <div className="bg-primary text-white w-full py-1 md:py-2">
          {wallet.walletName}
        </div>
      </div>
    </PaymentDialog>
  );
};

export default PaymentWalletCard;
