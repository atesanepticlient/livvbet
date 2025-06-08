"use client";
import React, { useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaQuestion } from "react-icons/fa";
import SecondaryButton from "./buttons/secondary-button";
import { logout } from "@/action/logout";
import { ScaleLoader } from "react-spinners";
import { getTailwindBreakpoint } from "@/lib/utils";
import { redirect } from "next/navigation";

const LogoutModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const handleOpenLogout = () => {
    const breakpoint = getTailwindBreakpoint();

    if (breakpoint == "sm") {
      redirect("/logout");
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <div onClick={handleOpenLogout}>{children}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <LogoutModalContent onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LogoutModal;

export const LogoutModalContent = ({ onClose }: { onClose: () => void }) => {
  const [pending, startTr] = useTransition();
  const handleLogout = () => {
    startTr(() => {
      logout().then((res) => {
        if (res.success) {
          location.reload();
        } else if (res.error) {
          // handle error
        }
      });
    });
  };

  return (
    <div className="bg-white p-4 lg:p-6 w-[270px]  lg:w-[330px]">
      <div>
        <div className="w-16 h-16 lg:w-20 lg:h-20  rounded-full flex justify-center items-center mx-auto border-2 border-[#E8E8E8]">
          <FaQuestion className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="text-center mt-10 mb-6">
          <p className="font-bold text-lg lg:text-xl text-[rgb(59,59,59)]">
            Confirm action
          </p>
          <span className="text-sm font-normal text-[rgb(59,59,59)]">
            Are you sure you want to log out?
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 mb-4">
          <SecondaryButton
            onClick={() => handleLogout()}
            disabled={pending}
            className="flex-1 !bg-[#212121] "
          >
            {pending ? (
              <ScaleLoader color="#fff" cssOverride={{ scale: 0.4 }} />
            ) : (
              "Logout"
            )}
          </SecondaryButton>
          <SecondaryButton
            onClick={onClose}
            className="flex-1 bg-[#DFDFDF] hover:bg-[#DFDFDF] !text-black"
          >
            Cancel
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};
