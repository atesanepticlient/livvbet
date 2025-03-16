import {
  MakeWithdrawInput,
  PaymentDataOutput,
  MakeDepositInput,
} from "@/types/api";
import { apiSlice } from "./apiSlice";

const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchPaymentData: builder.query<PaymentDataOutput, void>({
      query: () => ({
        method: "GET",
        url: "/api/payment",
      }),
    }),

    makeDeposit: builder.mutation<{ message: string }, MakeDepositInput>({
      query: (body) => ({
        method: "POST",
        url: "/api/payment/deposit",
        body,
      }),
      invalidatesTags: ["history"],
    }),

    makeWithdraw: builder.mutation<{ message: string }, MakeWithdrawInput>({
      query: (body) => ({
        method: "POST",
        url: "/api/payment/withdraw",
        body,
      }),
      invalidatesTags: ["history"],
    }),
  }),
});

export const {
  useFetchPaymentDataQuery,
  useMakeDepositMutation,
  useMakeWithdrawMutation,
} = paymentApiSlice;
