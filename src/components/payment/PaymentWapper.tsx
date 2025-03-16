"use client";
import { useFetchPaymentDataQuery } from "@/lib/features/paymentApiSlice";

import { usePaymentMethods } from "@/store/useStore";
import React, { useEffect } from "react";

const PaymentWapper = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  children,
}: {
  type: "deposit" | "withdraw";
  children: React.ReactNode;
}) => {
  const { data } = useFetchPaymentDataQuery();
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
