"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useCurrentUser from "@/hook/useCurrentUser";
import { useFetchTransactionsQuery } from "@/lib/features/paymentApiSlice";
import RequestLoader from "../loaders/RequestLoader";
import { PaymentHistoryType, PaymentStatus } from "@prisma/client";

const TransactionList = () => {
  const defaultTab = useSearchParams().get("type");
  const { data, isLoading } = useFetchTransactionsQuery();
  const payload = data?.payload;
  const user = useCurrentUser();

  const filteredPayments = (type: PaymentHistoryType) => {
    return payload?.filter((p) => p.type == type);
  };

  return (
    <div>
      {isLoading && !data && (
        <div className="my-10">
          <RequestLoader />
        </div>
      )}
      {!isLoading && data && (
        <Tabs defaultValue={defaultTab!}>
          <TabsList>
            <TabsTrigger value="deposits" className="bg-gray-300 !text-black">
              Deposits
            </TabsTrigger>
            <TabsTrigger value="withdraws" className="bg-gray-300 !text-black">
              Withdraws
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deposits">
            <Table>
              <TableCaption>
                A list of your Transactions - Deposits
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Amount</TableHead>
                  <TableHead>Transactions</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Paid At</TableHead>
                  <TableHead className="text-right">Paid From</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayments("DEPOSIT")?.map((t, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">
                      {user!.wallet?.currencyCode} {t.amount}
                    </TableCell>
                    <TableCell>{t.deposit?.transactionId || ""}</TableCell>
                    <TableCell>{t.deposit?.methodName}</TableCell>
                    <TableCell>{t.deposit?.payTo || ""}</TableCell>
                    <TableCell>{t.deposit?.payFrom || ""}</TableCell>

                    <TableCell className="text-right">
                      <PaymentStatusText status={t.deposit!.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="withdraws">
            <Table>
              <TableCaption>
                A list of your Transactions - Withdraws
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Amount</TableHead>

                  <TableHead>Method</TableHead>
                  <TableHead>Wallet Number</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayments("WITHDRAW")?.map((t, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">
                      {user!.wallet?.currencyCode} {t.amount}
                    </TableCell>
                    <TableCell>{t.withdraw?.methodName}</TableCell>

                    <TableCell>{t.withdraw?.payTo}</TableCell>
                    <TableCell className="text-right">
                      <PaymentStatusText status={t.withdraw!.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

const PaymentStatusText = ({ status }: { status: PaymentStatus }) => {
  return (
    <span
      className={`${
        status === "PENDING"
          ? "text-[#FFC107]"
          : status === "ACCEPTED"
          ? "text-emerald-700"
          : "text-destructive"
      }`}
    >
      {status}
    </span>
  );
};

export default TransactionList;
