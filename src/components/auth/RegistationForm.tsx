// "use client";
// import React, { useState, useTransition } from "react";

// import {
//   Form,
//   FormControl,
//   FormMessage,
//   FormItem,
//   FormField,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
// import InputCommand from "../ui/command-input";
// import { Eye, EyeOff } from "lucide-react";
// import zod from "zod";
// import { registerSchema } from "@/schema";

// import { zodResolver } from "@hookform/resolvers/zod";
// import SweetToast from "../ui/SweetToast";
// import { register } from "@/action/register";
// import { redirect } from "next/navigation";
// import Link from "next/link";
// import PrimaryButton from "../buttons/primary-button";
// import { ScaleLoader } from "react-spinners";

// const RegistationForm = () => {
//   const [pending, startTransition] = useTransition();
//   const form = useForm<zod.infer<typeof registerSchema>>({
//     defaultValues: {
//       email: "",
//       phone: "",
//       firstName: "",
//       lastName: "",
//       password: "",
//       promo: "",
//       confirmPassword: "",
//       currencyCode: "BDT",
//     },
//     resolver: zodResolver(registerSchema),
//   });

//   const [passwordType, setPasswordType] = useState<"text" | "password">(
//     "password"
//   );

//   const [confirmPasswordTrype, setConfirmPasswordType] = useState<
//     "text" | "password"
//   >("password");

//   const handleRegistation = (data: zod.infer<typeof registerSchema>) => {
//     startTransition(() => {
//       register(data).then((res) => {
//         if (res.success) {
//           SweetToast.fire({
//             icon: "success",
//             title: res.success,
//             showConfirmButton: false,
//             timer: 2000,
//           });
//           redirect("/login");
//         } else if (res.error) {
//           SweetToast.fire({
//             icon: "error",
//             title: res.error,
//             showConfirmButton: false,
//             timer: 2000,
//           });
//         }
//       });
//     });

//     console.log({ data });
//   };

//   const togglePasswordType = () => {
//     if (passwordType == "text") {
//       setPasswordType("password");
//     } else if (passwordType == "password") {
//       setPasswordType("text");
//     }
//   };
//   const toggleConfirmPasswordType = () => {
//     if (confirmPasswordTrype == "text") {
//       setConfirmPasswordType("password");
//     } else if (confirmPasswordTrype == "password") {
//       setConfirmPasswordType("text");
//     }
//   };

//   return (
//     <div className="w-full ">
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(handleRegistation)}>
//           <FormField
//             name="currencyCode"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <InputCommand
//                     currentValue={field.value}
//                     disabled={pending}
//                     onChange={(value) => form.setValue("currencyCode", value)}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//             control={form.control}
//           />

//           <div className="my-5 flex justify-center">
//             <div className="w-[200px] md:w-300px] bg-border h-[1px]"></div>
//           </div>

//           <div className="flex items-center gap-3 mb-3">
//             <FormField
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormControl>
//                     <div className="relative flex-1  ">
//                       <FloatingInput
//                         {...field}
//                         type="email"
//                         id="floating-email"
//                         disabled={pending}
//                         className="text-[#3b3b3b]"
//                       />
//                       <FloatingLabel
//                         htmlFor="floating-email"
//                         className="font-normal text-[#3b3b3b]"
//                       >
//                         Email
//                       </FloatingLabel>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               control={form.control}
//             />
//             <FormField
//               name="phone"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormControl>
//                     <div className="relative flex-1  ">
//                       <FloatingInput
//                         {...field}
//                         type="text"
//                         disabled={pending}
//                         id="floating-phone"
//                         className="text-[#3b3b3b] "
//                       />
//                       <FloatingLabel
//                         htmlFor="floating-phone"
//                         className="font-normal text-[#3b3b3b]"
//                       >
//                         Phone
//                       </FloatingLabel>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               control={form.control}
//             />
//           </div>

//           <div className="flex items-center gap-3 mb-3">
//             <FormField
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormControl>
//                     <div className="relative flex-1  ">
//                       <FloatingInput
//                         {...field}
//                         type="text"
//                         disabled={pending}
//                         id="floating-firstName"
//                         className=" text-[#3b3b3b]"
//                       />
//                       <FloatingLabel
//                         htmlFor="floating-firstName"
//                         className="font-normal text-[#3b3b3b]"
//                       >
//                         First Name
//                       </FloatingLabel>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               control={form.control}
//             />
//             <FormField
//               name="lastName"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormControl>
//                     <div className="relative flex-1  ">
//                       <FloatingInput
//                         {...field}
//                         type="text"
//                         disabled={pending}
//                         id="floating-lastName"
//                         className="text-[#3b3b3b] "
//                       />
//                       <FloatingLabel
//                         htmlFor="floating-lastName"
//                         className="font-normal text-[#3b3b3b]"
//                       >
//                         Last Name
//                       </FloatingLabel>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               control={form.control}
//             />
//           </div>

//           <div className="flex items-center gap-3">
//             <FormField
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <div className="flex items-center border border-border ">
//                       <div className="relative flex-1  ">
//                         <FloatingInput
//                           {...field}
//                           type={passwordType}
//                           disabled={pending}
//                           id="floating-password"
//                           className=" border-none text-[#3b3b3b]"
//                         />
//                         <FloatingLabel
//                           htmlFor="floating-password"
//                           className="font-normal text-[#3b3b3b]"
//                         >
//                           Password
//                         </FloatingLabel>
//                       </div>

//                       <div className="p-2 w-12 relative flex justify-center items-center">
//                         <button type="button" onClick={togglePasswordType}>
//                           {passwordType == "text" ? (
//                             <EyeOff className="text-[#3b3b3b] w-4 h-4 " />
//                           ) : (
//                             <Eye className="text-[#3b3b3b] w-4 h-4 " />
//                           )}
//                         </button>

//                         <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#d5e4f0]"></div>
//                       </div>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               control={form.control}
//             />
//             <FormField
//               name="confirmPassword"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <div className="flex items-center border border-border ">
//                       <div className="relative flex-1  ">
//                         <FloatingInput
//                           {...field}
//                           type={confirmPasswordTrype}
//                           id="floating-confirm-password"
//                           className=" border-none text-[#3b3b3b]"
//                           disabled={pending}
//                         />
//                         <FloatingLabel
//                           htmlFor="floating-confirm-password"
//                           className="font-normal text-[#3b3b3b]"
//                         >
//                           Confirm Password
//                         </FloatingLabel>
//                       </div>

//                       <div className="p-2 w-12 relative flex justify-center items-center">
//                         <button
//                           type="button"
//                           onClick={toggleConfirmPasswordType}
//                         >
//                           {confirmPasswordTrype == "text" ? (
//                             <EyeOff className="text-[#3b3b3b] w-4 h-4 " />
//                           ) : (
//                             <Eye className="text-[#3b3b3b] w-4 h-4 " />
//                           )}
//                         </button>

//                         <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#d5e4f0]"></div>
//                       </div>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               control={form.control}
//             />
//           </div>

//           <div className="my-5 flex justify-center">
//             <div className="w-[200px] md:w-300px] bg-border h-[1px]"></div>
//           </div>

//           <div className="flex items-center gap-2">
//             <FormField
//               name="promo"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormControl>
//                     <div className="relative flex-1  ">
//                       <FloatingInput
//                         {...field}
//                         type="text"
//                         id="floating-promo"
//                         disabled={pending}
//                         className=" text-[#3b3b3b]"
//                       />
//                       <FloatingLabel
//                         htmlFor="floating-promo"
//                         className="font-normal text-[#3b3b3b]"
//                       >
//                         Enter Promo Code
//                       </FloatingLabel>
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               control={form.control}
//             />
//             <div className="flex-1">
//               <PrimaryButton className="w-full max-h-[40px] h-[40px]">
//                 {pending ? (
//                   <ScaleLoader
//                     color="#000"
//                     cssOverride={{ scale: 0.5 }}
//                     className="-translate-y-4"
//                   />
//                 ) : (
//                   "Registration"
//                 )}
//               </PrimaryButton>
//             </div>
//           </div>
//         </form>

//         <span className="text-[10px] md:text-xs text-[#3b3b3b] my-4 md:my-7 block text-center">
//           By clicking this button you confirm that you have read and agree to
//           the Terms and Conditions and Privacy Policy of the company and confirm
//           that you are of legal age
//         </span>

//         <div className="my-5 flex justify-center">
//           <div className="w-full md:w-300px] bg-border h-[1px]"></div>
//         </div>
//         <p className="text-xs text-center text-[#3b3b3b]">
//           Already have an account?{" "}
//           <Link
//             href="/login"
//             className="text-[#FFB805] font-medium hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </Form>
//     </div>
//   );
// };

// export default RegistationForm;

// -------------------------------------------------------------------------------
"use client";
import React, { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { register, verifyOtpAndRegister } from "@/action/register";
import { registerSchema } from "@/schema";
import { redirect, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import SweetAlert from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ScaleLoader from "react-spinners/ScaleLoader";
import PrimaryButton from "../buttons/primary-button";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import InputCommand from "../ui/command-input";
import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";

const SweetToast = withReactContent(SweetAlert);

const RegistationForm = () => {
  const r = useSearchParams().get("r") || "";

  const [pending, startTransition] = useTransition();
  const [otpSent, setOtpSent] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState("");
  const [otp, setOtp] = useState("");

  const form = useForm<zod.infer<typeof registerSchema>>({
    defaultValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      password: "",
      promo: "",
      confirmPassword: "",
      currencyCode: "BDT",
    },
    resolver: zodResolver(registerSchema),
  });

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );
  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "text" | "password"
  >("password");

  const handleRegistation = (data: zod.infer<typeof registerSchema>) => {
    if (!otpSent) {
      startTransition(() => {
        register(data).then((res) => {
          if (res.success && res.requiresOtp) {
            SweetToast.fire({
              icon: "success",
              title: res.success,
              showConfirmButton: false,
              timer: 2000,
            });
            setOtpSent(true);
            setEmailForOtp(data.email);
          } else if (res.error) {
            SweetToast.fire({
              icon: "error",
              title: res.error,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      });
    } else {
      startTransition(() => {
        verifyOtpAndRegister(emailForOtp, otp, data).then((res) => {
          if (res.success) {
            SweetToast.fire({
              icon: "success",
              title: res.success,
              showConfirmButton: false,
              timer: 2000,
            });
            redirect("/login");
          } else if (res.error) {
            SweetToast.fire({
              icon: "error",
              title: res.error,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      });
    }
  };

  const togglePasswordType = () => {
    setPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  const toggleConfirmPasswordType = () => {
    setConfirmPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  useEffect(() => {
    if (r) {
      form.reset({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: "",
        promo: r,
        confirmPassword: "",
        currencyCode: "BDT",
      });
    }
  }, [r]);

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegistation)}>
          <FormField
            name="currencyCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputCommand
                    currentValue={field.value}
                    disabled={pending}
                    onChange={(value) => form.setValue("currencyCode", value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
          />

          <div className="my-5 flex justify-center">
            <div className="w-[200px] md:w-[300px] bg-border h-[1px]"></div>
          </div>

          {otpSent && (
            <div className="mb-4">
              <div className="relative">
                <FloatingInput
                  type="text"
                  id="floating-otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={pending}
                  className="text-[#3b3b3b]"
                />
                <FloatingLabel
                  htmlFor="floating-otp"
                  className="font-normal text-[#3b3b3b]"
                >
                  Enter OTP sent to {emailForOtp}
                </FloatingLabel>
              </div>
              <p className="text-xs mt-1 text-[#3b3b3b]">
                Didn&apos;t receive OTP?{" "}
                <button
                  type="button"
                  className="text-[#FFB805] hover:underline"
                  onClick={() => form.handleSubmit(handleRegistation)()}
                >
                  Resend
                </button>
              </p>
            </div>
          )}

          <div className="flex items-center gap-3 mb-3">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1">
                      <FloatingInput
                        {...field}
                        type="email"
                        id="floating-email"
                        disabled={pending || otpSent}
                        className="text-[#3b3b3b]"
                      />
                      <FloatingLabel
                        htmlFor="floating-email"
                        className="font-normal text-[#3b3b3b]"
                      >
                        Email
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="phone"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1">
                      <FloatingInput
                        {...field}
                        type="text"
                        disabled={pending || otpSent}
                        id="floating-phone"
                        className="text-[#3b3b3b]"
                      />
                      <FloatingLabel
                        htmlFor="floating-phone"
                        className="font-normal text-[#3b3b3b]"
                      >
                        Phone
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FormField
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1">
                      <FloatingInput
                        {...field}
                        type="text"
                        disabled={pending || otpSent}
                        id="floating-firstName"
                        className="text-[#3b3b3b]"
                      />
                      <FloatingLabel
                        htmlFor="floating-firstName"
                        className="font-normal text-[#3b3b3b]"
                      >
                        First Name
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1">
                      <FloatingInput
                        {...field}
                        type="text"
                        disabled={pending || otpSent}
                        id="floating-lastName"
                        className="text-[#3b3b3b]"
                      />
                      <FloatingLabel
                        htmlFor="floating-lastName"
                        className="font-normal text-[#3b3b3b]"
                      >
                        Last Name
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="flex items-center border border-border">
                      <div className="relative flex-1">
                        <FloatingInput
                          {...field}
                          type={passwordType}
                          disabled={pending || otpSent}
                          id="floating-password"
                          className="border-none text-[#3b3b3b]"
                        />
                        <FloatingLabel
                          htmlFor="floating-password"
                          className="font-normal text-[#3b3b3b]"
                        >
                          Password
                        </FloatingLabel>
                      </div>
                      <div className="p-2 w-12 relative flex justify-center items-center">
                        <button
                          type="button"
                          onClick={togglePasswordType}
                          disabled={pending || otpSent}
                        >
                          {passwordType === "text" ? (
                            <EyeOff className="text-[#3b3b3b] w-4 h-4" />
                          ) : (
                            <Eye className="text-[#3b3b3b] w-4 h-4" />
                          )}
                        </button>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#d5e4f0]"></div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="flex items-center border border-border">
                      <div className="relative flex-1">
                        <FloatingInput
                          {...field}
                          type={confirmPasswordType}
                          id="floating-confirm-password"
                          className="border-none text-[#3b3b3b]"
                          disabled={pending || otpSent}
                        />
                        <FloatingLabel
                          htmlFor="floating-confirm-password"
                          className="font-normal text-[#3b3b3b]"
                        >
                          Confirm Password
                        </FloatingLabel>
                      </div>
                      <div className="p-2 w-12 relative flex justify-center items-center">
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordType}
                          disabled={pending || otpSent}
                        >
                          {confirmPasswordType === "text" ? (
                            <EyeOff className="text-[#3b3b3b] w-4 h-4" />
                          ) : (
                            <Eye className="text-[#3b3b3b] w-4 h-4" />
                          )}
                        </button>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#d5e4f0]"></div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
          </div>

          <div className="my-5 flex justify-center">
            <div className="w-[200px] md:w-[300px] bg-border h-[1px]"></div>
          </div>

          <div className="flex items-center gap-2">
            <FormField
              name="promo"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1">
                      <FloatingInput
                        {...field}
                        type="text"
                        id="floating-promo"
                        disabled={pending || otpSent}
                        className="text-[#3b3b3b]"
                      />
                      <FloatingLabel
                        htmlFor="floating-promo"
                        className="font-normal text-[#3b3b3b]"
                      >
                        Enter Promo Code
                      </FloatingLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />
            <div className="flex-1">
              <PrimaryButton className="w-full max-h-[40px] h-[40px]">
                {pending ? (
                  <ScaleLoader
                    color="#000"
                    cssOverride={{ scale: 0.5 }}
                    className="-translate-y-4"
                  />
                ) : otpSent ? (
                  "Verify OTP & Register"
                ) : (
                  "Send OTP"
                )}
              </PrimaryButton>
            </div>
          </div>
        </form>

        <span className="text-[10px] md:text-xs text-[#3b3b3b] my-4 md:my-7 block text-center">
          By clicking this button you confirm that you have read and agree to
          the Terms and Conditions and Privacy Policy of the company and confirm
          that you are of legal age
        </span>

        <div className="my-5 flex justify-center">
          <div className="w-full md:w-[300px] bg-border h-[1px]"></div>
        </div>
        <p className="text-xs text-center text-[#3b3b3b]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#FFB805] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegistationForm;
