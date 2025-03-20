import Link from "next/link";
import React from "react";

import btn_mobila from "@/../public/assets/images/btn-mobile-app.svg";
import logo from "@/../public/assets/svg/logo2.svg";
import Image from "next/image";

import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import SupportLine from "../SupportLine";
const Contact = () => {
  return (
    <div>
      <span className="text-xs md:text-sm block text-center py-4 text-[#c1d5e3] px-3">
        About us Terms and Conditions Full Version Contacts Bitcoin Become an
        agent
      </span>

      <div className="px-4">
        <Link
          href="#"
          className="bg-[#24507d] flex items-center justify-center gap-2 my-3 "
        >
          <Image src={btn_mobila} alt="mobila app" className="w-[150px]" />
          <div className="flex flex-col gap-1">
            <Image src={logo} alt="1xbet" className="w-[60px] " />
            <span className="text-xs text-white">Mobile Application</span>
          </div>
        </Link>
      </div>

      <div className="px-2">
        <div className="flex justify-center items-center my-3 gap-2">
          <Link href="#" className="flex-1 bg-[#24507d] text-white py-3">
            <BsTelegram className="w-4 h-4 text-white mx-auto" />
          </Link>
          <Link href="#" className="flex-1 bg-[#24507d] text-white py-3">
            <FaInstagram className="w-4 h-4 text-white mx-auto" />
          </Link>
          <Link href="#" className="flex-1 bg-[#24507d] text-white py-3">
            <FaFacebookF className="w-4 h-4 text-white mx-auto" />
          </Link>
        </div>
      </div>

      <SupportLine />
    </div>
  );
};

export default Contact;
