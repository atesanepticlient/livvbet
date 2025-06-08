"use client";
import { MessageBox } from "@/components/landing/headers/inbox";
import PageHeader from "@/components/PageHeader";
import { useFetchMessagesQuery } from "@/lib/features/messageApiSlice";
import React from "react";
import { ScaleLoader } from "react-spinners";

const Messages = () => {
  const { data, isLoading } = useFetchMessagesQuery();
  const messages = data?.payload;

  if (!data || isLoading) {
    return (
      <div className="py-10 flex justify-center items-center w-full">
        <ScaleLoader color="#fff" />
      </div>
    );
  }

  return (
    <div className="p-2 bg-white w-full min-h-screen">
      <main>
        <PageHeader label="My Messages" />

        <div className="w-full">
          {messages && <MessageBox messages={messages} />}
        </div>
      </main>
    </div>
  );
};

export default Messages;
