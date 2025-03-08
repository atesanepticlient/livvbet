"use client";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa6";
import SweetToast from "../ui/SweetToast";

const SocialMediaLogin = () => {
  const handleClick = () => {
    SweetToast.fire({
      title: "Warning",
      text: "This method is not avilable now! Use Email",
      icon: "warning",
    });
  };

  return (
    <div className="grid grid-cols-[32px_32px_32px] gap-2 justify-center pb-5">
      <button
        onClick={handleClick}
        className="bg-[#34679a]  p-1 opacity-50 hover:opacity-100 transition-all w-7 h-7 flex justify-center items-center rounded-full cursor-pointer"
      >
        <FaFacebook className="w-3 h-3 md:w-4 md:h-4 text-white" />
      </button>
      <button
        onClick={handleClick}
        className="bg-[#34679a] p-1 opacity-50 hover:opacity-100 transition-all w-7 h-7 flex justify-center items-center rounded-full cursor-pointer"
      >
        <FaGoogle className="w-3 h-3 md:w-4 md:h-4 text-white" />
      </button>
      <button
        onClick={handleClick}
        className="bg-[#34679a] p-1 opacity-50 hover:opacity-100 transition-all w-7 h-7 flex justify-center items-center rounded-full cursor-pointer"
      >
        <FaTwitter className="w-3 h-3 md:w-4 md:h-4 text-white" />
      </button>
      <div className="col-span-3 flex justify-center gap-2">
        <button
          onClick={handleClick}
          className="bg-[#34679a] p-1 opacity-50 hover:opacity-100 transition-all w-7 h-7 flex justify-center items-center rounded-full cursor-pointer"
        >
          <FaTelegramPlane className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </button>
        <button
          onClick={handleClick}
          className="bg-[#34679a] p-1 opacity-50 hover:opacity-100 transition-all w-7 h-7 flex justify-center items-center rounded-full cursor-pointer"
        >
          <FaLinkedin className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
