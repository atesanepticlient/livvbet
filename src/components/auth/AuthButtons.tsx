"use client";
import React from "react";
import { Button } from "../ui/button";
import { LogIn, SquarePen } from "lucide-react";
import Link from "next/link";
import useCurrentUser from "@/hook/useCurrentUser";

const AuthButtons = () => {
  const user = useCurrentUser();

  if (user) return null;

  return (
    <div className="flex items-center gap-2 justify-end ">
      <Button className="bg-primary text-white rounded-sm hover:bg-primary/90 text-[10px] capitalize md:uppercase">
        <Link href="/register">
          Registration{" "}
          <SquarePen className="w-4 h-4 hidden md:block text-white" />
        </Link>
      </Button>
      <Button className="bg-brand-foreground rounded-sm text-white hover:bg-brand-foreground/90 text-[10px] capitalize md:uppercase">
        <Link href="/login">
          <LogIn className="w-4 h-3 text-white hidden md:block" />
          Login
        </Link>
      </Button>
    </div>
  );
};

export default AuthButtons;
