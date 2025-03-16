import React from "react";
import Image from "next/image";
import PaymentDialog from "./PaymentDialog";
import { Prisma } from "@prisma/client";

const PaymentWalletCard = ({
  wallet,
}: {
  wallet:
    | Prisma.AdEWalletGetPayload<{ include: { eWallet: true } }>
    | Prisma.AgEWalletGetPayload<{ include: { eWallet: true } }>;
}) => {
  return (
    <PaymentDialog wallet={wallet}>
      <div className="cursor-pointer hover:shadow-md">
        <div className="h-[45px] bg-white flex justify-center items-center">
          <Image
            src={wallet.eWallet.image}
            width={90}
            height={40}
            alt={wallet.eWallet.walletName}
            className="w-[90px] h-[40px] wallet-image mx-auto object-cover"
          />
        </div>
        <div className="bg-primary text-white w-full py-1 md:py-2">
          {wallet.eWallet.walletName}
        </div>
      </div>
    </PaymentDialog>
  );
};

export default PaymentWalletCard;
