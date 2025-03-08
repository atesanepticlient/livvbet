import React from "react";
import Link from "next/link";
import Image from "next/image";

import help_line from "@/../public/assets/images/help-line.webp";

const SupportLine = () => {
  return (
    <Link
      href="#"
      className="bg-primary-foreground flex justify-center items-center py-2 rounded-sm gap-2 mt-6 md:mt-8"
    >
      <Image src={help_line} alt="Customer support" className="w-[60px]" />
      <div>
        <h3 className="text-lg text-white font-bold uppercase">
          Customer Support
        </h3>
        <span className="text-white text-xs md:text-sm">Ask Any question</span>
      </div>
    </Link>
  );
};

export default SupportLine;
