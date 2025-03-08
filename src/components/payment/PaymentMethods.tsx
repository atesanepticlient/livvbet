"use client";
import { PaymentMethod } from "@/store/types";
import { usePaymentMethods } from "@/store/useStore";
import React from "react";
import PaymentWalletCard from "./PaymentWalletCard";

interface PaymentMethodsTypesProps {
  method: PaymentMethod;
}
const PaymentMethodsTypes = ({ method }: PaymentMethodsTypesProps) => {
  return (
    <div className="bg-[#d0dae1] p-2 md:p-4">
      <h4 className="text-accent text-sm md:text-base mb-1 uppercase">
        {method.methodName}
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {method.wallets.map((w, i) => (
          <PaymentWalletCard key={i} wallet={w} />
        ))}
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  const { methods, allMethods } = usePaymentMethods((state) => state);
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      {methods.length == 0 &&
        allMethods.map((m, i) => <PaymentMethodsTypes key={i} method={m} />)}

      {methods.length !== 0 &&
        methods.map((m, i) => <PaymentMethodsTypes key={i} method={m} />)}
    </div>
  );
};

export default PaymentMethods;
