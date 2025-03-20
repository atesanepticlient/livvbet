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
    <div className="flex md:hidden items-center justify-between   bg-[#213f61] ">
      <div className="flex gap-2 items-center">
        <button
          className="p-2 bg-[#c2d5e3] h-[40px] text-primary-foreground"
          onClick={handleBack}
        >
          <IoIosArrowBack className="w-4 h-4" />
        </button>
        <span className="text-xs md:text-sm font-bold md:font-semibold text-white uppercase ">
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
