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

// interface AuthMethodsComponentProps {
//   method: AuthMethods;
//   activeAuthMethod: AuthMethods;
// }

// const AuthMethodsComponent = ({
//   method,
//   activeAuthMethod,
// }: AuthMethodsComponentProps) => {
//   const Icon =
//     method === AuthMethods.BYEMAIL ? (
//       <AiTwotoneMail className="w-4 h-4 " />
//     ) : method === AuthMethods.BYPHONE ? (
//       <IoIosPhonePortrait className="w-4 h-4 " />
//     ) : (
//       <TbHandClick className="w-4 h-4 " />
//     );

//   const handleClick = () => {
//     if (method !== AuthMethods.BYEMAIL) {
//       SweetToast.fire({
//         title: "Warning",
//         text: "This method is not avilable now! Use Email",
//         icon: "warning",
//       });
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`flex-1 flex gap-1 md:gap-2 text-primary text-xs px-3 py-2 capitalize bg-[#D7E5F1] ${
//         method == activeAuthMethod && "bg-primary text-white"
//       } flex-1`}
//     >
//       {Icon}
//       {method}
//     </button>
//   );
// };

export default FormLoader;
