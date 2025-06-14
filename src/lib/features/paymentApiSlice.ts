import {
  MakeWithdrawInput,
  PaymentDataOutput,
  MakeDepositInput,
  TransactionsOutput,
} from "@/types/api";
import { apiSlice } from "./apiSlice";
import { Prisma } from "@prisma/client";

const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchPaymentData: builder.query<
      PaymentDataOutput,
      { type: "withdraw" | "deposit" }
    >({
      query: ({ type }) => ({
        method: "GET",
        url: `/api/payment?type=${type}`,
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

    fetchTransactions: builder.query<TransactionsOutput, void>({
      query: () => ({
        url: "/api/payment/transactions",
        method: "GET",
      }),
    }),

    fetchWallet: builder.query<
      { wallet: Prisma.walletGetPayload<object> },
      void
    >({
      query: () => ({
        url: "/api/payment/wallet",
        method: "GET",
      }),
    }),

    fetchWithdrawAddress: builder.query({
      query: () => ({
        url: "/api/withdraw-address",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useFetchPaymentDataQuery,
  useMakeDepositMutation,
  useMakeWithdrawMutation,
  useFetchTransactionsQuery,
  useFetchWalletQuery,
  useFetchWithdrawAddressQuery,
} = paymentApiSlice;
