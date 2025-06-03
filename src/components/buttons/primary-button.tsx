import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-[#FFCD00] text-black md:px-4 md:py-2 px-3 py-1.5 font-normal hover:bg-[#FFD600] transition-colors cursor-pointer text-sm rounded-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
