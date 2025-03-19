import MessageList from "@/components/messags/MessageList";
import PageHeader from "@/components/PageHeader";
import React from "react";

const MessagePage = () => {
  return (
    <div className="bg-[#0B2B44] min-h-screen md:px-4 md:py-5">
      <main>
        <PageHeader label="My Messages" />

        <div>
          <MessageList />
        </div>
      </main>
    </div>
  );
};

export default MessagePage;
