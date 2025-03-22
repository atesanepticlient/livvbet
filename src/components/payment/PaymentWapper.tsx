"use client";
import { useFetchPaymentDataQuery } from "@/lib/features/paymentApiSlice";

import { usePaymentMethods } from "@/store/useStore";
import React, { useEffect } from "react";

const PaymentWapper = ({
  type,
  children,
}: {
  type: "withdraw" | "deposit";
  children: React.ReactNode;
}) => {
  const { data } = useFetchPaymentDataQuery({ type });
  const paymentData = data?.payload;
  
  const { setAllMethods } = usePaymentMethods((state) => state);
  useEffect(() => {
    if (paymentData && Array.isArray(paymentData)) {
      setAllMethods(paymentData);
    }
  }, [setAllMethods, paymentData]);

 

  return <div>{children}</div>;
};

export default PaymentWapper;
