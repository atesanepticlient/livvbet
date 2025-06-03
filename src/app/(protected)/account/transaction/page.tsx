import PageHeader from "@/components/PageHeader";
import TransactionList from "@/components/transaction/TransactionList";
import React from "react";

const TransactionPage = () => {
  return (
    <div className="md:px-4 md:py-5 h-screen ">
      <main>
        <PageHeader label="Your Transactions" />
        <div className="p-0 md:p-1">
          <TransactionList />
        </div>
      </main>
    </div>
  );
};

export default TransactionPage;
