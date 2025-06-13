/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, resetPasswordSchema } from "@/schema";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import PrimaryButton from "../buttons/primary-button";
import { ScaleLoader } from "react-spinners";
import SweetToast from "../ui/SweetToast";
import zod from "zod";
import Link from "next/link";
import {
  sendPasswordResetEmail,
  verifyOtpAndResetPassword,
} from "@/action/forgot-password";
import { Eye, EyeOff } from "lucide-react";

const ForgotPasswordForm = () => {
  const [pending, startTransition] = useTransition();
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");

  const form = useForm<zod.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const resetForm = useForm<zod.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
      otp: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );
  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "text" | "password"
  >("password");

  const handleSendOtp = (data: zod.infer<typeof forgotPasswordSchema>) => {
    startTransition(() => {
      sendPasswordResetEmail(data.email).then((res) => {
        if (res.success) {
          SweetToast.fire({
            icon: "success",
            title: res.success,
            showConfirmButton: false,
            timer: 2000,
          });
          setOtpSent(true);
          setEmail(data.email);
          resetForm.reset({
            email: data.email,
            otp: "",
            newPassword: "",
            confirmPassword: "",
          });
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
  };

  const handleResetPassword = (data: zod.infer<typeof resetPasswordSchema>) => {
    startTransition(() => {
      verifyOtpAndResetPassword(data).then((res) => {
        if (res.success) {
          SweetToast.fire({
            icon: "success",
            title: res.success,
            showConfirmButton: false,
            timer: 2000,
          });
          window.location.href = "/login";
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
  };

  const togglePasswordType = () => {
    setPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  const toggleConfirmPasswordType = () => {
    setConfirmPasswordType((prev) => (prev === "text" ? "password" : "text"));
  };

  return (
    <div className="w-full">
      {!otpSent ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSendOtp)}>
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <div className="flex items-center border border-border">
                      <div className="relative flex-1">
                        <FloatingInput
                          {...field}
                          type="email"
                          id="floating-email"
                          disabled={pending}
                          className="text-[#3b3b3b]"
                        />
                        <FloatingLabel
                          htmlFor="floating-email"
                          className="font-normal text-[#3b3b3b]"
                        >
                          Email
                        </FloatingLabel>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <PrimaryButton className="w-full max-h-[40px] h-[40px] mt-4">
              {pending ? (
                <ScaleLoader
                  color="#000"
                  cssOverride={{ scale: 0.5 }}
                  className="-translate-y-4"
                />
              ) : (
                "Send OTP"
              )}
            </PrimaryButton>
          </form>
        </Form>
      ) : (
        <Form {...resetForm}>
          <form onSubmit={resetForm.handleSubmit(handleResetPassword)}>
            {/* Hidden email field - we'll keep it in the form but not show it */}
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormControl>
                    <input type="hidden" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="otp"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <div className="flex items-center border border-border">
                      <div className="relative flex-1">
                        <FloatingInput
                          {...field}
                          type="text"
                          id="floating-otp"
                          disabled={pending}
                          className="text-[#3b3b3b]"
                        />
                        <FloatingLabel
                          htmlFor="floating-otp"
                          className="font-normal text-[#3b3b3b]"
                        >
                          Enter OTP 
                        </FloatingLabel>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="newPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <div className="flex items-center border border-border">
                      <div className="relative flex-1">
                        <FloatingInput
                          {...field}
                          type={passwordType}
                          id="floating-new-password"
                          disabled={pending}
                          className="text-[#3b3b3b]"
                        />
                        <FloatingLabel
                          htmlFor="floating-new-password"
                          className="font-normal text-[#3b3b3b]"
                        >
                          New Password
                        </FloatingLabel>
                      </div>
                      <div className="p-2 w-12 relative flex justify-center items-center">
                        <button
                          type="button"
                          onClick={togglePasswordType}
                          disabled={pending}
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
            />

            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <div className="flex items-center border border-border">
                      <div className="relative flex-1">
                        <FloatingInput
                          {...field}
                          type={confirmPasswordType}
                          id="floating-confirm-password"
                          disabled={pending}
                          className="text-[#3b3b3b]"
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
                          disabled={pending}
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
            />

            <PrimaryButton className="w-full max-h-[40px] h-[40px] mt-4">
              {pending ? (
                <ScaleLoader
                  color="#000"
                  cssOverride={{ scale: 0.5 }}
                  className="-translate-y-4"
                />
              ) : (
                "Reset Password"
              )}
            </PrimaryButton>
          </form>
        </Form>
      )}

      <div className="my-5 flex justify-center">
        <div className="w-full md:w-[300px] bg-border h-[1px]"></div>
      </div>
      <p className="text-xs text-center text-[#3b3b3b]">
        Remember your password?{" "}
        <Link
          href="/login"
          className="text-[#FFB805] font-medium hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
