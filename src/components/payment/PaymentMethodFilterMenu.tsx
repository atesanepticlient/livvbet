"use client";
import { usePaymentMethods } from "@/store/useStore";
import React from "react";
import PaymentMethodFilterMenuItem from "./PaymentMethodFilterMenuItem";

const PaymentMethodFilterMenu = () => {
  const { allMethods } = usePaymentMethods((state) => state);

  const totalMethodsCount = allMethods.reduce(
    (accum, i) => i.wallets.length + accum,
    0
  );

  return (
    <nav className="payment-nav">
      <PaymentMethodFilterMenuItem
        label={"all methods"}
        count={totalMethodsCount}
      />
      {allMethods.map((m, i) => (
        <PaymentMethodFilterMenuItem
          key={i}
          label={m.methodName}
          count={m.wallets.length}
        />
      ))}
    </nav>
  );
};

export default PaymentMethodFilterMenu;
