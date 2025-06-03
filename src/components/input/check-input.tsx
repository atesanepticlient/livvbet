"use client";
import React from "react";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  getValue: (value: string) => void;
};
const CheckInput: React.FC<InputProps> = ({
  label,
  className,
  value,
  name,
  checked,
  getValue,
  id,
  ...props
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getValue(e.target.value);
  };

  return (
    <>
      <input
        className={` hidden ${className}`}
        type="radio"
        value={value}
        checked={checked}
        onChange={handleInputChange}
        name={name}
        id={id}
        {...props}
      />
      <label
        htmlFor={id}
        className="flex items-center gap-2 lg:gap-3 cursor-pointer"
      >
        <div
          className={`w-3 h-3 rounded-full ${
            checked ? "bg-[#FFB805]" : "bg-[#30353B]"
          }`}
        ></div>
        <span
          className={`text-xs uppercase font-normal  ${
            checked ? "text-[#FFB805]" : "!text-[#999999] hover:!text-[#C1C3C4]"
          }`}
        >
          {label}
        </span>
      </label>
    </>
  );
};

export default CheckInput;
