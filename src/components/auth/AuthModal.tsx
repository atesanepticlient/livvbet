import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const AuthModal = ({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
