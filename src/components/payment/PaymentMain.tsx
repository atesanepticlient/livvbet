/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useEffect, useTransition } from "react";
import { Button } from "../ui/button";
import { Prisma } from "@prisma/client";
import useCurrentUser from "@/hook/useCurrentUser";
import { useForm } from "react-hook-form";

import zod from "zod";
import { makeDepositScehma, makeWithdrawScehma } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  useMakeDepositMutation,
  useMakeWithdrawMutation,
} from "@/lib/features/paymentApiSlice";
import SweetToast from "../ui/SweetToast";
import { FetchQueryError } from "@/types/error";
import { INTERNAL_SERVER_ERROR } from "@/error";

const PaymentMain = ({
  wallet,
}: {
  wallet:
    | Prisma.AdEWalletGetPayload<{ include: { eWallet: true } }>
    | Prisma.AgEWalletGetPayload<{ include: { eWallet: true } }>;
}) => {
  return (
    <div className=" w-[90%] md:w-[360px] rounded-sm shadow-sm">
      <div className="bg-white w-full  flex items-center justify-center py-2 md:py-4">
        <Image
          className="wallet-image w-[80px] object-cover mx-auto"
          src={wallet.eWallet.image}
          alt={wallet.eWallet.walletName}
          width={80}
          height={40}
        />
      </div>
      <div className="p-2 md:p-3 bg-[#EDEDED]">
        {wallet.deposit && (
          <DepositContent walletId={wallet.id} deposit={wallet.deposit} />
        )}
      </div>
      <div className="p-2 md:p-3 bg-[#EDEDED]">
        {wallet.withdraw && (
          <WithdrawContent walletId={wallet.id} withdraw={wallet.withdraw} />
        )}
      </div>
    </div>
  );
};

const DepositContent = ({
  deposit,
  walletId,
}: {
  deposit: any;
  walletId: string;
}) => {
  const [pending, startTransition] = useTransition();

  const user = useCurrentUser();

  const form = useForm<zod.infer<typeof makeDepositScehma>>({
    defaultValues: {
      payFrom: "",
      payTo: "",
      amount: "",
      transactionId: "",
    },
    resolver: zodResolver(makeDepositScehma),
  });

  const handleSetAmount = (amount: string) => {
    form.setValue("amount", amount);
  };

  const [depositApi, { isLoading: apiLoading }] = useMakeDepositMutation();

  const handleMakeDeposit = (data: zod.infer<typeof makeDepositScehma>) => {
    startTransition(async () => {
      depositApi({
        amount: +data.amount,
        payTo: data.payTo,
        payFrom: data.payFrom,
        transactionId: data.transactionId,
        walletId,
      })
        .unwrap()
        .then((res) => {
          if (res.message) {
            SweetToast.fire({
              icon: "success",
              title: res.message,
              showConfirmButton: false,
              timer: 2000,
            });
            // TODO : redirect to transition history
          }
        })
        .catch((error: FetchQueryError) => {
          if (error?.data.message) {
            SweetToast.fire({
              icon: "error",
              title: error?.data.message,
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            SweetToast.fire({
              icon: "error",
              title: INTERNAL_SERVER_ERROR,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    });
  };

  useEffect(() => {
    if (deposit) {
      form.reset({
        payFrom: "",
        payTo: deposit.walletNumber,
        amount: "",
        transactionId: "",
      });
    }
  }, [deposit]);

  const isLoading = apiLoading || pending;

  return (
    <div className="shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleMakeDeposit)}>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
              Amount (Min {deposit?.min} {user?.wallet?.currencyCode} / Max{" "}
              {deposit?.max} {user?.wallet?.currencyCode}):
            </span>
            <div>
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        disabled={isLoading}
                        {...field}
                        placeholder={`e.g.min-${deposit?.min?.toString()}&max-${deposit?.max?.toString()}`}
                        className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {deposit?.range?.length > 0 && (
            <div className="mt-2">
              <span className="text-[#666] text-xs md:text-sm">
                Please enter or select your deposit amount
              </span>
              <div className="flex flex-wrap gap-1">
                {deposit?.range?.map((r: string, i: number) => (
                  <button
                    key={i}
                    disabled={isLoading}
                    type="button"
                    onClick={() => handleSetAmount(r)}
                    className="px-2 md:px-3 py-1  bg-white border border-border text-black hover:bg-brand-foreground hover:text-white "
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-accent max-w-[150px]">
              Send Money to the Account
            </span>
            <div>
              <FormField
                name="payTo"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        readOnly
                        {...field}
                        disabled={isLoading}
                        placeholder={"Account Number"}
                        className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-accent">Account number:</span>
            <div>
              <FormField
                name="payFrom"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        disabled={isLoading}
                        placeholder={"Enter Your Account Number"}
                        className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-accent">Transaction ID:</span>
            <div>
              <FormField
                name="transactionId"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        disabled={isLoading}
                        placeholder={"Enter Your Payment ID"}
                        className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            disabled={isLoading}
            variant={"destructive"}
            className="bg-brand-foreground hover:bg-brand-foreground/90 w-full mt-2"
          >
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
};

const WithdrawContent = ({
  withdraw,
  walletId,
}: {
  withdraw: any;
  walletId: string;
}) => {
  const [pending, startTransition] = useTransition();

  const user = useCurrentUser();

  const form = useForm<zod.infer<typeof makeWithdrawScehma>>({
    defaultValues: {
      payTo: "",
      amount: "",
    },
    resolver: zodResolver(makeWithdrawScehma),
  });

  const handleSetAmount = (amount: string) => {
    form.setValue("amount", amount);
  };

  const [withdrawApi, { isLoading: apiLoading }] = useMakeWithdrawMutation();

  const handleMakeWithdraw = (data: zod.infer<typeof makeWithdrawScehma>) => {
    startTransition(async () => {
      withdrawApi({
        amount: +data.amount,
        payTo: data.payTo,
        walletId,
      })
        .unwrap()
        .then((res) => {
          if (res.message) {
            SweetToast.fire({
              icon: "success",
              title: res.message,
              showConfirmButton: false,
              timer: 2000,
            });
            // TODO : redirect to transition history
          }
        })
        .catch((error: FetchQueryError) => {
          if (error?.data.message) {
            SweetToast.fire({
              icon: "error",
              title: error?.data.message,
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            SweetToast.fire({
              icon: "error",
              title: INTERNAL_SERVER_ERROR,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    });
  };

  const isLoading = apiLoading || pending;
  return (
    <div className="shadow-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleMakeWithdraw)}>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
              Amount (Min {withdraw?.min} {user?.wallet?.currencyCode} / Max{" "}
              {withdraw?.max} {user?.wallet?.currencyCode}):
            </span>
            <div>
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        disabled={isLoading}
                        {...field}
                        placeholder={`e.g.min=${withdraw.min.toString()}-max=${withdraw.max.toString()}`}
                        className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {withdraw?.range?.length > 0 && (
            <div className="mt-2">
              <span className="text-[#666] text-xs md:text-sm">
                Please enter or select your deposit amount
              </span>
              <div className="flex flex-wrap gap-1">
                {withdraw?.range?.map((r: string, i: number) => (
                  <button
                    key={i}
                    disabled={isLoading}
                    type="button"
                    onClick={() => handleSetAmount(r)}
                    className="px-2 md:px-3 py-1  bg-white border border-border text-black hover:bg-brand-foreground hover:text-white "
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-1">
            <span className="text-sm text-accent">Account number:</span>
            <div>
              <FormField
                name="payTo"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        disabled={isLoading}
                        placeholder={"Enter Your Account Number"}
                        className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            disabled={isLoading}
            variant={"destructive"}
            className="bg-brand-foreground hover:bg-brand-foreground/90 w-full mt-2"
          >
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default PaymentMain;
