"use client";
import { logout } from "@/action/logout";
import { Button } from "@/components/ui/button";
import SweetToast from "@/components/ui/SweetToast";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
const Logout = () => {
  const [isPending, setPending] = useState(false);
  const handleLogout = () => {
    setPending(true);
    logout().then((res) => {
      if (res.success) {
        setPending(false);
        location.reload();
        redirect("/login");
      } else if (res?.error) {
        setPending(false);
        SweetToast.fire({
          icon: "error",
          title: res.error,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button disabled={isPending} onClick={handleLogout}>
        <CiLogout className="w-4 h-4 text-white" /> Logout
      </Button>
    </div>
  );
};

export default Logout;
