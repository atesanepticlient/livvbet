"use client";
import { LogoutModalContent } from "@/components/LogoutModal";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LogoutModalContent onClose={() => router.back()} />
    </div>
  );
};

export default Page;
