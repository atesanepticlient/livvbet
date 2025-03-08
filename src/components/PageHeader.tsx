"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
const PageHeader = ({ label }: { label: string }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex md:hidden items-center pb-3 h-[60px] gap-2 bg-[#213f61]">
      <button
        className="p-2 bg-[#c2d5e3] text-primary-foreground"
        onClick={handleBack}
      >
        <IoIosArrowBack className="w-4 h-4" />
      </button>
      <span className="text-xs md:text-sm font-bold md:font-semibold text-white uppercase ">
        {label}
      </span>
    </div>
  );
};

export default PageHeader;
