import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import visa_master_card from "@/../public/assets/images/visa_mastercard.png";
import SiteContent from "../content/SiteContent";
import About from "../about/About";
import Sponsors from "../sponsors/Sponsors";
import SupportLine from "../SupportLine";

const Footer = () => {
  return (
    <>
      <SiteContent />
      <About />
      <Sponsors />
      <div className="mt-6 md:mt-8 bg-secondary-foreground px-5 md:px-8 py-6 md:py-8 shadow-sm">
        <div className="flex justify-center my-3 md:my-4">
          <Link href="#">
            <FaTelegram className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
          <Link href="#">
            <IoLogoWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
          <Link href="#">
            <FaFacebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </Link>
        </div>

        <SupportLine />

        <p className="text-[10px] md:text-xs text-muted mt-2 md:mt-3 w-[95%] md:w-[70%] mx-auto text-center">
          To register, users must accept the Terms of Service. If updated, users
          may discontinue services before changes take effect, at least two
          weeks after the announcement. While translations may be available, the
          English version prevails. 1xbet.com is operated by Caecus N.V.,
          registered in Curaçao (163779) and licensed under OGL/2024/1262/0493
          as of 07/11/2024. Payments are processed by Exidna Enterprises LTD
          (НЕ435756) and Kassifoni Enterprises LTD (НЕ435760). Users must also
          accept the Responsible Gaming Agreement (RGA) and its Gaming Terms of
          Service (GT&C), which include important restrictions for protection.
          Please review them carefully before playing.
        </p>

        <div className="my-3 md:my-4 pb-12 flex justify-center">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex justify-center items-center text-white text-sm border-2 border-white">
            18+
          </div>
          <Image
            src={visa_master_card}
            alt="visa and master card"
            className="w-[100px] md:w-[120px]"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
