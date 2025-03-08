"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CasinoCategories = () => {
  return (
    <div className="flex flex-wrap gap-2 px-1 py-2 md:py-4 items-center mb-2">
      <CasinoCategory label="All" redirect="#" isActive />
      <CasinoCategory label="Casino" redirect="#" isActive={false} />
      <CasinoCategory label="Live Casino" redirect="#" isActive={false} />
      <CasinoCategory label="Slots" redirect="#" isActive={false} />
      <CasinoCategory label="Mines" redirect="#" isActive={false} />
      <CasinoCategory label="Bingo" redirect="#" isActive={false} />
    </div>
  );
};

interface CasinoCategoryProps {
  label: string;
  redirect: string;
  isActive: boolean;
}
const CasinoCategory = ({ label, redirect, isActive }: CasinoCategoryProps) => {
  return (
    <Link
      href={redirect}
      className={cn(
        "p-3 flex items-center justify-center  rounded-md border text-xs md:text-sm font-bold",
        `${
          isActive
            ? "border-brand-foreground text-brand-foreground "
            : "border-white text-white"
        }`
      )}
    >
      {label}
    </Link>
  );
};

export default CasinoCategories;
