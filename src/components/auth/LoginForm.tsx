"use client";
import React, { useState, useTransition } from "react";

import { Eye, EyeOff, Mail } from "lucide-react";

import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/schema";
import { login } from "@/action/login";
import SweetToast from "../ui/SweetToast";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PrimaryButton from "../buttons/primary-button";
import { ScaleLoader } from "react-spinners";
const LoginForm = () => {
  const loginRedirect = useSearchParams().get("redirect") || "/";
 

  const [pending, startTransition] = useTransition();
  const form = useForm<zod.infer<typeof loginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const handleLogin = (data: zod.infer<typeof loginSchema>) => {
    startTransition(() => {
      login(data).then((res) => {
        if (res.success) {
          SweetToast.fire({
            icon: "success",
            title: res.success,
            showConfirmButton: false,
            timer: 2000,
          });
          location.reload();
          redirect(loginRedirect);
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
    if (passwordType == "text") {
      setPasswordType("password");
    } else if (passwordType == "password") {
      setPasswordType("text");
    }
  };


 

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center border border-border mb-2 md:mb-3">
                      <div className="relative flex-1 ">
                        <FloatingInput
                          {...field}
                          disabled={pending}
                          id="floating-customize"
                          className=" border-none text-[#3b3b3b] "
                        />
                        <FloatingLabel
                          htmlFor="floating-customize"
                          className="text-[#3b3b3b]"
                        >
                          ID OR Email
                        </FloatingLabel>
                      </div>

                      <div className="p-2 w-12 relative flex justify-center items-center">
                        <Mail className="text-[#3b3b3b] w-4 h-4 md:w-5 md:h-5" />

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#3b3b3b75]"></div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />

            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center border border-border ">
                      <div className="relative flex-1  ">
                        <FloatingInput
                          {...field}
                          disabled={pending}
                          type={passwordType}
                          id="floating-customize-pass"
                          className="border-none text-[#3b3b3b]"
                        />
                        <FloatingLabel
                          htmlFor="floating-customize-pass "
                          className="text-[#3b3b3b]"
                        >
                          Password
                        </FloatingLabel>
                      </div>

                      <div className="p-2 w-12 relative flex justify-center items-center">
                        <button type="button" onClick={togglePasswordType}>
                          {passwordType == "text" ? (
                            <EyeOff className="text-[#3b3b3b] w-4 h-4 md:w-5 md:h-5" />
                          ) : (
                            <Eye className="text-[#3b3b3b] w-4 h-4 md:w-5 md:h-5" />
                          )}
                        </button>

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[2px] h-7 bg-[#3b3b3b75]"></div>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
            />

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="emember" />
                <Label
                  htmlFor="remember"
                  className="text-sm text-[#3b3b3b] font-medium"
                >
                  Remember
                </Label>
              </div>

              <Link
                href="/forgot-password"
                className="text-[10px] text-xs text-[#c79925] hover:underline hover:text-[#ebbb41]"
              >
                Forgot your password?
              </Link>
            </div>

            <PrimaryButton className="w-full max-h-[40px] h-[40px]">
              {pending ? (
                <ScaleLoader
                  color="#000"
                  cssOverride={{ scale: 0.5 }}
                  className="-translate-y-4"
                />
              ) : (
                "Login"
              )}
            </PrimaryButton>
          </form>
          <div className="my-5 flex justify-center">
            <div className="w-full md:w-300px] bg-border h-[1px]"></div>
          </div>
          <p className="text-xs text-center text-[#3b3b3b]">
            Don&apos;t you have an account?{" "}
            <Link
              href="/register"
              className="text-[#FFB805] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </Form>
      </div>
    </Suspense>
  );
};

export default LoginForm;
