/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  useDeleteMessagesMutation,
  useFetchMessagesQuery,
  useSeenMessagesMutation,
} from "@/lib/features/messageApiSlice";
import React, { useEffect, useState } from "react";
import RequestLoader from "../loaders/RequestLoader";
import { Prisma } from "@prisma/client";

import moment from "moment";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
const MessageList = () => {
  const { data, isLoading } = useFetchMessagesQuery();
  const payload = data?.payload;

  const [message, setMessages] = useState<Prisma.MessageGetPayload<object>[]>(
    []
  );

  const [messageDeleteApi] = useDeleteMessagesMutation();
  const [seenMessageApi] = useSeenMessagesMutation();

  useEffect(() => {
    if (payload && payload.length > 0) {
      setMessages(payload);
    }
  }, [payload]);

  const handleMessage = (id: string) => {
    setMessages((state) => state.filter((m) => m.id != id));
    messageDeleteApi({ id }).unwrap();
  };

  useEffect(() => {
    seenMessageApi().unwrap();
  }, []);

  return (
    <div>
      {isLoading && !data && <RequestLoader />}
      {!isLoading && message.length == 0 && (
        <p className="text-center text-white font-light py-5">
          No MessageDelegate
        </p>
      )}
      {!isLoading &&
        message &&
        message?.map((m, i) => (
          <MessageListItem
            message={m}
            key={i}
            onMessageDelete={(id) => handleMessage(id)}
          />
        ))}
    </div>
  );
};

const MessageListItem = ({
  message,
  onMessageDelete,
}: {
  onMessageDelete: (id: string) => void;
  message: Prisma.MessageGetPayload<object>;
}) => {
  const [isSectionOpen, setSelctionOpen] = useState(false);
  return (
    <div
      onClick={() => setSelctionOpen(!isSectionOpen)}
      className="bg-[#c1d5e3] p-2 border-t border-t-[#bbcdda] relative"
    >
      <p className="text-[#0f324f] font-medium text-sm">{message.title}</p>
      <span className="text-[#0f324f] font-light mb-3 text-xs">
        {moment(message.createdAt).calendar()}
      </span>

      <p
        className={` text-sm text-[#0f324f] ${
          isSectionOpen ? "h-auto overflow-auto" : "h-0 overflow-hidden"
        }`}
      >
        {message.description}
      </p>

      <button
        className="absolute top-3 right-3"
        onClick={() => onMessageDelete(message.id)}
      >
        <IoCloseCircle
          className={`w-4 h-4 text-[#0f324f] 
          }`}
        />
      </button>
      <IoIosArrowDown
        className={`w-4 h-4 text-[#0f324f] absolute bottom-3 right-3 ${
          isSectionOpen && "rotate-180"
        }`}
      />
    </div>
  );
};
export default MessageList;
