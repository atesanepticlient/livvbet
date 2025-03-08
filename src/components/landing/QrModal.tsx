import React from "react";
import loginQr from "@/../public/assets/svg/login-qr.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const QrModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-qr-modal py-6 px-4 md:py-9 md:px-7 md:w-[500px] ">
        <DialogHeader>
          <DialogTitle className="text-white text-center uppercase">
            log in <br /> With QR Code
          </DialogTitle>
          <DialogDescription className="text-xs md:text-sm text-white text-center">
            Use the camera on your mobile device to read QR codes
          </DialogDescription>
        </DialogHeader>

        <div className="flex mt-3 md:mt-4 justify-center">
          <Image
            src={loginQr}
            alt="Login With QR"
            className="w-[60%] md:w-[55%] mx-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QrModal;
