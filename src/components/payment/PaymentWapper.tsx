"use client";
import { useFetchPaymentDataQuery } from "@/lib/features/paymentApiSlice";

import { usePaymentMethods } from "@/store/useStore";
import React, { useEffect } from "react";
import { ScaleLoader } from "react-spinners";

const PaymentWapper = ({
  type,
  children,
}: {
  type: "withdraw" | "deposit";
  children: React.ReactNode;
}) => {
  const { data, isLoading } = useFetchPaymentDataQuery({ type });
  const paymentData = data?.payload;
  const deposits = paymentData?.deposit;
  const withdraws = paymentData?.withdraw;
  console.log("Payment wallets ", data);
  const { setAllMethods, setType } = usePaymentMethods((state) => state);

  useEffect(() => {
    if (
      deposits &&
      withdraws &&
      Array.isArray(deposits) &&
      Array.isArray(withdraws)
    ) {
      if (type == "withdraw") {
        setAllMethods(withdraws!);
        setType("withdraw");
      } else if (type == "deposit") {
        setType("deposit");
        setAllMethods(deposits!);
      }
    }
  }, [setAllMethods, paymentData, type]);

  return (
    <div className="min-h-[50vh]">
      {isLoading && (
        <div className="w-full h-[50vh] flex items-center justify-center">
          <ScaleLoader color="#212121" />
        </div>
      )}
      {!isLoading && data && <>{children}</>}
    </div>
  );
};

export default PaymentWapper;
