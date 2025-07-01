/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Prisma, TrxType } from "@prisma/client";
import useCurrentUser from "@/hook/useCurrentUser";
import { useForm } from "react-hook-form";
import { IoIosCopy } from "react-icons/io";

import zod from "zod";
import {
  cashWithdrawScehma,
  makeAPayDepositScehma,
  makeAPayWithdrawScehma,
  makeDepositScehma,
  makeWithdrawScehma,
} from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  useMakeApayDepositMutation,
  useMakeApayWithdrawMutation,
  useMakeDepositMutation,
  useMakeWithdrawMutation,
} from "@/lib/features/paymentApiSlice";
import SweetToast from "../ui/SweetToast";
import { FetchQueryError } from "@/types/error";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { usePaymentMethods } from "@/store/useStore";
import SecondaryButton from "../buttons/secondary-button";
import Link from "next/link";
import { cashWithdraw } from "@/action/cashwithdraw";
import { MdContentCopy } from "react-icons/md";

const PaymentMain = ({ wallet }: { wallet: any }) => {
  const type = usePaymentMethods((state) => state.type);
  return (
    <div className=" rounded-sm shadow-sm">
      <div className="bg-white w-full  flex items-center justify-center py-2 md:py-4">
        <Image
          className="wallet-image w-[80px] object-cover mx-auto"
          src={wallet.image}
          alt={wallet.label}
          width={80}
          height={40}
        />
      </div>

      <div className="p-2 md:p-3 bg-[#EDEDED]">
        {type == "deposit" && (
          <DepositContentApay
            maxDeposit={wallet.max_deposit}
            minDeposit={wallet.min_deposit}
            ps={wallet.name}
          />
        )}
      </div>
      <div className="p-2 md:p-3 bg-[#EDEDED]">
        {type == "withdraw" && wallet.type != "cash" && (
          <WithdrawContentApay wallet={wallet} />
        )}
        {type == "withdraw" && wallet.type == "cash" && (
          <CashContent walletId={wallet.id} />
        )}
        {/* {wallet.withdraw && (
          <WithdrawContent walletId={wallet.id} withdraw={wallet.withdraw} />
        )} */}
      </div>
    </div>
  );
};

const DepositContent = ({
  walletId,
  walletNumber,
  minDeposit,
  maxDeposit,
  trxType,
}: {
  walletId: string;
  walletNumber: string;
  minDeposit: number;
  maxDeposit: number;
  trxType: TrxType;
}) => {
  const [created, setCreated] = useState(false);

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

  const handleSetAmount = (amount: number) => {
    form.setValue("amount", amount.toString());
  };

  const [depositApi, { isLoading: apiLoading }] = useMakeDepositMutation();

  const handleMakeDeposit = (data: zod.infer<typeof makeDepositScehma>) => {
    startTransition(async () => {
      depositApi({
        amount: +data.amount,
        payFrom: data.payFrom,
        transactionId: data.transactionId,
        walletId,
      })
        .unwrap()
        .then((res) => {
          if (res.message) {
            // SweetToast.fire({
            //   icon: "success",
            //   title: res.message,
            //   showConfirmButton: false,
            //   timer: 2000,
            // });
            setCreated(true);
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
    if (walletNumber) {
      form.reset({
        payFrom: "",
        payTo: walletNumber,
        amount: "",
        transactionId: "",
      });
    }
  }, [walletNumber]);

  const isLoading = apiLoading || pending;

  const walletType =
    trxType == "PAYMENT"
      ? " Merchant ( পেমেন্ট ওয়ালেট নাম্বার)"
      : trxType == "CASHOUT"
      ? "Agent ( Agent ওয়ালেট নাম্বার)"
      : "Personal ( Personal ওয়ালেট নাম্বার)";

  useEffect(() => {
    return () => {
      if (created) {
        setCreated(false);
      }
    };
  }, []);

  return (
    <>
      {created ? (
        <div className="w-full h-[300px] bg-[#EEEEEE] ">
          <p className="text-center text-sm lg:text-base py-5 text-[#9A9A9A]">
            {" "}
            Deposit request created successfully.
          </p>
          <div className="flex justify-center">
            <Link href="/account/transaction?type=withdraw">
              <SecondaryButton className="mx-auto ">Check</SecondaryButton>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <p className="text-xs  text-white bg-[#336633] rounded-lg p-1 mb-2">
            Before making a request, please transfer funds within 10 minutes
            using the payment details specified below.
          </p>
          <div className="flex justify-between">
            <p className="text-[#1D3A59] font-semibold text-sm">
              {walletType} {walletNumber}
            </p>

            <button onClick={() => navigator.clipboard.writeText(walletNumber)}>
              <IoIosCopy className="w-4 h-4 text-[#7BA234]" />
            </button>
          </div>
          <div className="shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleMakeDeposit)}>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
                    Amount (Min {+minDeposit} {user?.wallet?.currencyCode} / Max{" "}
                    {+maxDeposit} {user?.wallet?.currencyCode}):
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
                              placeholder={`1000.00`}
                              className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <span className="text-[#666] text-xs md:text-sm">
                    Please enter or select your deposit amount
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {[300, 500, 1000, 5000].map((r, i) => (
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

                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-accent">
                    Account number (Only{" "}
                    {trxType == "CASHOUT"
                      ? "Cashout"
                      : trxType == "PAYMENT"
                      ? "Merchant Payment"
                      : "Send Money "}
                    )
                  </span>
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
        </>
      )}
    </>
  );
};

const DepositContentApay = ({
  minDeposit,
  maxDeposit,
  ps,
}: {
  minDeposit: number;
  maxDeposit: number;
  ps: string;
}) => {
  const [created, setCreated] = useState(false);

  const [pending, startTransition] = useTransition();

  const user = useCurrentUser();

  const form = useForm<zod.infer<typeof makeAPayDepositScehma>>({
    defaultValues: {
      accountNumber: "",
      amount: "",
    },
    resolver: zodResolver(makeAPayDepositScehma),
  });

  const handleSetAmount = (amount: number) => {
    form.setValue("amount", amount.toString());
  };

  const [depositApi, { isLoading: apiLoading }] = useMakeApayDepositMutation();

  const handleMakeDeposit = (data: zod.infer<typeof makeAPayDepositScehma>) => {
    startTransition(async () => {
      depositApi({
        amount: +data.amount,
        account_number: data.accountNumber,
        ps: ps,
      })
        .unwrap()
        .then((res) => {
          if (res.success) {
            // SweetToast.fire({
            //   icon: "success",
            //   title: res.message,
            //   showConfirmButton: false,
            //   timer: 2000,
            // });
            location.href = `${res.payload.data.paymentpage_url}`;
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
    <>
      <div className="shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleMakeDeposit)}>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
                Amount (Min {+minDeposit} {user?.wallet?.currencyCode} / Max{" "}
                {+maxDeposit} {user?.wallet?.currencyCode}):
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
                          placeholder={`${minDeposit}`}
                          className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-2">
              <span className="text-[#666] text-xs md:text-sm">
                Please enter or select your deposit amount
              </span>
              <div className="flex flex-wrap gap-1">
                {[400, 500, 1000, 5000].map((r, i) => (
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

            <div className="flex items-center justify-between mt-1">
              <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
                Account Number (Optional)
              </span>
              <div>
                <FormField
                  name="accountNumber"
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
    </>
  );
};

const WithdrawContent = ({ walletId }: { walletId: string }) => {
  const [created, setCreated] = useState(false);

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
            // SweetToast.fire({
            //   icon: "error",
            //   title: error?.data.message,
            //   showConfirmButton: false,
            //   timer: 2000,
            // });
            setCreated(true);
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

  useEffect(() => {
    return () => {
      if (created) {
        setCreated(false);
      }
    };
  }, []);

  return (
    <div className="shadow-sm">
      {created ? (
        <div className="w-full h-[300px] bg-[#EEEEEE] ">
          <p className="text-center text-sm lg:text-base py-5 text-[#9A9A9A]">
            {" "}
            Withdraw request created successfully.
          </p>
          <div className="flex justify-center">
            {" "}
            <Link href="/account/transaction?type=withdraw">
              <SecondaryButton className="mx-auto ">Check</SecondaryButton>
            </Link>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleMakeWithdraw)}>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
                Amount (Min {300} {user?.wallet?.currencyCode} / Max {25000}{" "}
                {user?.wallet?.currencyCode}):
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
                          placeholder={`500.00`}
                          className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-2">
              <span className="text-[#666] text-xs md:text-sm">
                Please enter or select your deposit amount
              </span>
              <div className="flex flex-wrap gap-1">
                {["100", "500", "1000", "5000"].map((r: string, i: number) => (
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
      )}
    </div>
  );
};

const WithdrawContentApay = ({ wallet }: { wallet: any }) => {
  const [created, setCreated] = useState(false);

  const [pending, startTransition] = useTransition();
  const user = useCurrentUser();

  const form = useForm<zod.infer<typeof makeAPayWithdrawScehma>>({
    defaultValues: {
      accountNumber: "",
      amount: "",
    },
    resolver: zodResolver(makeAPayWithdrawScehma),
  });

  const handleSetAmount = (amount: string) => {
    form.setValue("amount", amount);
  };

  const [withdrawApi, { isLoading: apiLoading }] =
    useMakeApayWithdrawMutation();

  const handleMakeWithdraw = (
    data: zod.infer<typeof makeAPayWithdrawScehma>
  ) => {
    console.log({ data });
    startTransition(async () => {
      withdrawApi({
        amount: +data.amount,
        account_number: data.accountNumber,
        ps: wallet.name,
      })
        .unwrap()
        .then((res) => {
          if (res.success) {
            setCreated(true);
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

  useEffect(() => {
    return () => {
      if (created) {
        setCreated(false);
      }
    };
  }, []);

  return (
    <div className="shadow-sm">
      {created ? (
        <div className="w-full h-[300px] bg-[#EEEEEE] ">
          <p className="text-center text-sm lg:text-base py-5 text-[#9A9A9A]">
            {" "}
            Withdraw request created successfully.
          </p>
          <div className="flex justify-center">
            {" "}
            <Link href="/account/transaction?type=withdraw">
              <SecondaryButton className="mx-auto ">Check</SecondaryButton>
            </Link>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleMakeWithdraw)}>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
                Amount (Min {wallet.min_withdrawals}{" "}
                {user?.wallet?.currencyCode} / Max {wallet.min_withdrawals}{" "}
                {wallet.max_withdrawals}):
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
                          placeholder={`500.00`}
                          className="bg-white outline-none  placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-2">
              <span className="text-[#666] text-xs md:text-sm">
                Please enter or select your deposit amount
              </span>
              <div className="flex flex-wrap gap-1">
                {["500", "1000", "5000"].map((r: string, i: number) => (
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

            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-accent">Account number:</span>
              <div>
                <FormField
                  name="accountNumber"
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
      )}
    </div>
  );
};

const CashContent = ({ walletId }: { walletId: string }) => {
  const [created, setCreated] = useState(false);
  const [withdrawCode, setWithdrawCode] = useState("");
  const [pending, startTransition] = useTransition();
  const [addressOptions, setAddressOptions] = useState<
    Array<{
      id: string;
      label: string;
      value: string;
      raw: {
        country: string;
        city: string;
        postOffice: string;
        storeName: string;
      };
    }>
  >([]);
  const [loadingAddresses, setLoadingAddresses] = useState(true);
  const user = useCurrentUser();

  // Fetch agent addresses on component mount
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch("/api/withdraw-address");
        if (response.ok) {
          const data = await response.json();
          setAddressOptions(data);
        } else {
          console.error("Failed to fetch addresses");
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      } finally {
        setLoadingAddresses(false);
      }
    };

    fetchAddresses();
  }, []);

  const form = useForm<zod.infer<typeof cashWithdrawScehma>>({
    defaultValues: {
      amount: "",
      address: "",
      selectedAddress: "", // For the dropdown selection
    },
    resolver: zodResolver(cashWithdrawScehma),
  });

  // Update the full address when selection changes
  useEffect(() => {
    const selectedStore = form.watch("selectedAddress");
    if (selectedStore) {
      const selectedAddress = addressOptions.find(
        (addr) => addr.value === selectedStore
      );
      if (selectedAddress) {
        const { country, city, postOffice, storeName } = selectedAddress.raw;
        const fullAddress = `${country} ${city} ${postOffice} ${storeName}`;
        form.setValue("address", fullAddress);
      }
    }
  }, [form.watch("selectedAddress")]);

  const handleSetAmount = (amount: string) => {
    form.setValue("amount", amount);
  };

  const handleMakeWithdraw = (data: zod.infer<typeof cashWithdrawScehma>) => {
    startTransition(async () => {
      cashWithdraw(data).then((res) => {
        if (res.success) {
          setCreated(true);
          setWithdrawCode(res.code);
        } else if (res.error) {
          SweetToast.fire({
            icon: "error",
            title: res.error,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    });
  };

  const isLoading = pending || loadingAddresses;

  return (
    <div className="shadow-sm">
      {created && withdrawCode ? (
        <div className="w-full h-[300px] bg-[#EEEEEE] ">
          <p className="text-center text-sm lg:text-base py-5 text-[#9A9A9A]">
            Withdraw request created successfully.
          </p>
          <div className="flex justify-center items-center py-5 gap-2">
            <p className="text-center  py-1 bg-green-800 border-b-2 border-l border-l-green-700 border-b-green-700 px-4 rounded-sm text-white ">
              {withdrawCode}
            </p>
            <button
              className="bg-[#ddd] p-2 rounded-md cursor-pointer "
              onClick={() => navigator.clipboard.writeText(withdrawCode)}
            >
              <MdContentCopy className="text-black w-4 h-4" />
            </button>
          </div>
          <div className="flex justify-center">
            <Link href="/account/transaction?type=withdraw">
              <SecondaryButton className="mx-auto ">Check</SecondaryButton>
            </Link>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleMakeWithdraw)}>
            {/* Amount section (unchanged) */}
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm max-w-[150px] text-accent font-medium">
                Amount (Min {300} {user?.wallet?.currencyCode} / Max {25000}{" "}
                {user?.wallet?.currencyCode}):
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
                          placeholder={`500.00`}
                          className="bg-white outline-none placeholder:text-gray-400 text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-2">
              <span className="text-[#666] text-xs md:text-sm">
                Please enter or select your deposit amount
              </span>
              <div className="flex flex-wrap gap-1">
                {["100", "500", "1000", "5000"].map((r: string, i: number) => (
                  <button
                    key={i}
                    disabled={isLoading}
                    type="button"
                    onClick={() => handleSetAmount(r)}
                    className="px-2 md:px-3 py-1 bg-white border border-border text-black hover:bg-brand-foreground hover:text-white"
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Address section */}
            <div className="mt-2">
              <span className="text-sm text-accent">Withdrawal Address:</span>
              <div className="flex flex-col gap-2 mt-1">
                {/* Hidden field for the full address */}
                <FormField
                  name="address"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <input {...field} type="hidden" />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Address dropdown */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-accent">Select Address:</span>
                  <FormField
                    name="selectedAddress"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <select
                            {...field}
                            disabled={isLoading}
                            className="bg-white outline-none text-xs p-1 text-center border border-[#8f9da8] border-t-[#8f9da8] border-r-white border-b-white border-l-[#8f9da8] text-[#1f72ad] w-full max-w-[300px]"
                          >
                            <option value="">Select an address</option>
                            {addressOptions.map((option) => (
                              <option key={option.id} value={option.value}>
                                {option.label.replace(
                                  option.label.split(" ")[0],
                                  ""
                                )}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Display selected address details */}
                {form.watch("selectedAddress") && (
                  <div className="text-xs text-gray-500 mt-1 p-2 bg-gray-50 rounded">
                    Selected Address: {form.watch("address")}
                  </div>
                )}
              </div>
            </div>

            <Button
              disabled={isLoading}
              variant={"destructive"}
              className="bg-brand-foreground hover:bg-brand-foreground/90 w-full mt-2"
            >
              {isLoading ? "Loading..." : "Confirm"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default PaymentMain;
