import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`bg-[#4f4f4fe5] text-white px-4 py-2 font-normal hover:bg-[#4F4F4F] transition-colors cursor-pointer text-sm rounded-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
