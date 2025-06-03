"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
const PageHeader = ({
  label,
  rightIcon,
  rightAction,
}: {
  label: string;
  rightIcon?: React.ReactNode;
  rightAction?: () => void;
}) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="flex md:hidden items-center justify-between   bg-[#dedede] ">
      <div className="flex gap-2 items-center">
        <button
          className="p-2 bg-[#2E2E2E] h-[40px] text-white"
          onClick={handleBack}
        >
          <IoIosArrowBack className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-[#2E2E2E] uppercase ">
          {label}
        </span>
      </div>

      {rightIcon && rightAction && (
        <button onClick={rightAction}>{rightIcon}</button>
      )}
    </div>
  );
};

export default PageHeader;
