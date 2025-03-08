import { Deposit, PaymentWallet, Withdraw } from "@/store/types";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const PaymentMain = ({ wallet }: { wallet: PaymentWallet }) => {
  return (
    <div className=" w-[90%] md:w-[360px] rounded-sm shadow-sm">
      <div className="bg-white w-full  flex items-center justify-center py-2 md:py-4">
        <Image
          className="wallet-image w-[80px] object-cover mx-auto"
          src={wallet.image}
          alt={wallet.walletName}
          width={80}
          height={40}
        />
      </div>
      <div className="p-2 md:p-3 bg-[#EDEDED]">
        {wallet.deposit && <DepositContent deposit={wallet.deposit} />}
      </div>
      <div className="p-2 md:p-3">
        {wallet.withdraw && <WithdrawContent withdraw={wallet.withdraw} />}
      </div>
    </div>
  );
};

const DepositContent = ({ deposit }: { deposit: Deposit }) => {
  return (
    <div className="shadow-sm">
      <div className="flex justify-between items-center">
        <span className="text-xs md:text-sm text-accent font-medium">
          Amount (Min {deposit.minimumDeposit} BDT / Max{" "}
          {deposit.maximumDeposit} BDT):
        </span>
        <div>
          <input
            placeholder={deposit.maximumDeposit.toString()}
            className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
          />
        </div>
      </div>
      <div>
        <span className="text-[#666] text-xs md:text-sm">
          Please enter or select your deposit amount
        </span>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 md:px-4 py-1  bg-white border border-border text-black hover:bg-brand-foreground hover:text-white ">
            500
          </button>
          <button className="px-3 md:px-4 py-1  bg-white border border-border text-black hover:bg-brand-foreground hover:text-white ">
            1000
          </button>
          <button className="px-3 md:px-4 py-1  bg-white border border-border text-black hover:bg-brand-foreground hover:text-white ">
            2000
          </button>
          <button className="px-3 md:px-4 py-1  bg-white border border-border text-black hover:bg-brand-foreground hover:text-white ">
            5000
          </button>
          <button className="px-3 md:px-4 py-1  bg-white border border-border text-black hover:bg-brand-foreground hover:text-white ">
            10000
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs text-accent">Account number:</span>
        <div>
          <input
            placeholder={deposit.maximumDeposit.toString()}
            className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
          />
        </div>
      </div>

      <Button
        variant={"destructive"}
        className="bg-brand-foreground hover:bg-brand-foreground/90 w-full mt-2"
      >
        Confirm
      </Button>
    </div>
  );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WithdrawContent = ({ withdraw }: { withdraw: Withdraw }) => {
  return <div></div>;
};
export default PaymentMain;
