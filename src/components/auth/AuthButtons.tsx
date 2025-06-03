"use client";
import React from "react";
import { LogIn, SquarePen } from "lucide-react";
import Link from "next/link";
import useCurrentUser from "@/hook/useCurrentUser";
import PrimaryButton from "../buttons/primary-button";
import SecondaryButton from "../buttons/secondary-button";

const AuthButtons = () => {
  const user = useCurrentUser();

  if (user) return null;

  return (
    <div className="flex items-center gap-2 justify-end ">
      <PrimaryButton>
        <Link href="/register">
          Registration{" "}
          <SquarePen className="w-4 h-4 hidden md:block text-white" />
        </Link>
      </PrimaryButton>
      <SecondaryButton>
        <Link href="/login">
          <LogIn className="w-4 h-3 text-white hidden md:block" />
          Login
        </Link>
      </SecondaryButton>
    </div>
  );
};

export default AuthButtons;
