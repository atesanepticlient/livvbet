"use client";
import React from "react";

interface FormLoaderProps {
  children: React.ReactNode;
  label: string;
}

const FormLoader = ({ children, label }: FormLoaderProps) => {
  return (
    <div className="p-4 md:p-6 shadow-sm bg-white rounded-md min-w-[390px]">
      <h3 className="text-[#3b3b3b] text-lg font-bold md:text-2xl text-center my-3 md:my-5 uppercase">
        {label}
      </h3>

      <div className=" border border-muted rounded-sm">
        <div className="p-2 md:p-3">{children}</div>
      </div>
    </div>
  );
};



export default FormLoader;
