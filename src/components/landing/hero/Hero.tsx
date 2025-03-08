import React from "react";
import Featurs from "./Featurs";
import LoginForm from "@/components/auth/LoginForm";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-4  py-4 md:py-6">
      <div className="w-full bg-white  hidden lg:block ">
        <div className="sticky top-0 z-20 w-full h-7 bg-brand-foreground text-center">
          <span className="text-xs md:text-sm uppercase text-white">
            100% bonus on the 1st deposit
          </span>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#526E1F]"></div>
        </div>

        <div className="px-3 md:px-4 overflow-auto max-h-[280px] scrollbar-min">
          <h4 className="text-lg md:text-xl uppercase my-3 text-accent font-semibold  text-center">
            Login
          </h4>
          <div className="my-3 flex items-center">
            <button className="text-white text-xs px-3 py-1 bg-primary flex-1">
              One-Click
            </button>
            <button className="text-primary text-xs px-3 py-1 bg-[#D7E5F1] flex-1">
              By Phone
            </button>
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <Featurs />
      </div>
    </div>
  );
};

export default Hero;
