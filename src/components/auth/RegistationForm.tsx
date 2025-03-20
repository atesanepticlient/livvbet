"use client";
import React, { useState, useTransition } from "react";

import {
  Form,
  FormControl,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import { Button } from "../ui/button";
import SocialMediaLogin from "./SocialMediaLogin";
import InputCommand from "../ui/command-input";
import { Eye, EyeOff } from "lucide-react";
import zod from "zod";
import { registerSchema } from "@/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import SweetToast from "../ui/SweetToast";
import { register } from "@/action/register";
import RequestLoader from "../loaders/RequestLoader";
import { redirect } from "next/navigation";


const RegistationForm = () => {
  const [pending, startTransition] = useTransition();
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

  const [confirmPasswordTrype, setConfirmPasswordType] = useState<
    "text" | "password"
  >("password");

  const handleRegistation = (data: zod.infer<typeof registerSchema>) => {
    startTransition(() => {
      register(data).then((res) => {
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

    console.log({ data });
  };

  const togglePasswordType = () => {
    if (passwordType == "text") {
      setPasswordType("password");
    } else if (passwordType == "password") {
      setPasswordType("text");
    }
  };
  const toggleConfirmPasswordType = () => {
    if (confirmPasswordTrype == "text") {
      setConfirmPasswordType("password");
    } else if (confirmPasswordTrype == "password") {
      setConfirmPasswordType("text");
    }
  };

  return (
    <div className="w-full ">
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
            <div className="w-[200px] md:w-300px] bg-border h-[1px]"></div>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="email"
                        id="floating-email"
                        disabled={pending}
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-email"
                        className="font-normal"
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
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        disabled={pending}
                        id="floating-phone"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-phone"
                        className="font-normal"
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
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        disabled={pending}
                        id="floating-firstName"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-firstName"
                        className="font-normal"
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
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        disabled={pending}
                        id="floating-lastName"
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-lastName"
                        className="font-normal"
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

          <div className="flex items-center gap-3">
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center border border-border ">
                      <div className="relative flex-1  ">
                        <FloatingInput
                          {...field}
                          type={passwordType}
                          disabled={pending}
                          id="floating-password"
                          className=" border-none"
                        />
                        <FloatingLabel
                          htmlFor="floating-password"
                          className="font-normal"
                        >
                          Password
                        </FloatingLabel>
                      </div>

                      <div className="p-2 w-12 relative flex justify-center items-center">
                        <button type="button" onClick={togglePasswordType}>
                          {passwordType == "text" ? (
                            <EyeOff className="text-accent w-4 h-4 " />
                          ) : (
                            <Eye className="text-accent w-4 h-4 " />
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
                <FormItem>
                  <FormControl>
                    <div className="flex items-center border border-border ">
                      <div className="relative flex-1  ">
                        <FloatingInput
                          {...field}
                          type={confirmPasswordTrype}
                          id="floating-confirm-password"
                          className=" border-none"
                          disabled={pending}
                        />
                        <FloatingLabel
                          htmlFor="floating-confirm-password"
                          className="font-normal"
                        >
                          Confirm Password
                        </FloatingLabel>
                      </div>

                      <div className="p-2 w-12 relative flex justify-center items-center">
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordType}
                        >
                          {confirmPasswordTrype == "text" ? (
                            <EyeOff className="text-accent w-4 h-4 " />
                          ) : (
                            <Eye className="text-accent w-4 h-4 " />
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
            <div className="w-[200px] md:w-300px] bg-border h-[1px]"></div>
          </div>

          <div className="flex items-center gap-2">
            <FormField
              name="promo"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <div className="relative flex-1  ">
                      <FloatingInput
                        {...field}
                        type="text"
                        id="floating-promo"
                        disabled={pending}
                        className=" "
                      />
                      <FloatingLabel
                        htmlFor="floating-promo"
                        className="font-normal"
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
              {pending ? (
                <RequestLoader />
              ) : (
                <Button className="!w-full !h-9" variant={"ghost"}>
                  Registation
                </Button>
              )}
            </div>
          </div>
        </form>

        <span className="text-[10px] md:text-xs text-muted-foreground my-3 block text-center">
          You can log in to the website via:
        </span>

        <SocialMediaLogin />
      </Form>
    </div>
  );
};

export default RegistationForm;
