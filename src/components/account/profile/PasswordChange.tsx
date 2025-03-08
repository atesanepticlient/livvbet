"use client";
import React, { useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import zod from "zod";
import { passwordChangeSchema } from "@/schema";

import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { passageChange } from "@/action/update";
import SweetToast from "@/components/ui/SweetToast";
import RequestLoader from "@/components/loaders/RequestLoader";

const PasswordChange = ({ children }: { children: React.ReactNode }) => {
  const [pending, startTransition] = useTransition();

  const [previousPassType, setPreviousPassType] = useState<"text" | "password">(
    "password"
  );
  const [newPassType, setNewPassType] = useState<"text" | "password">(
    "password"
  );
  const [confirmPassType, setconfirmPassType] = useState<"text" | "password">(
    "password"
  );

  const form = useForm<zod.infer<typeof passwordChangeSchema>>({
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(passwordChangeSchema),
  });

  const handlePasswordChange = (
    data: zod.infer<typeof passwordChangeSchema>
  ) => {
    startTransition(() => {
      passageChange(data).then((res) => {
        if (res.success) {
          SweetToast.fire({
            icon: "success",
            title: res.success,
            showConfirmButton: false,
            timer: 2000,
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

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-secondary p-4 md:p-6 ">
        <DialogHeader>
          <DialogTitle className="text-white uppercase font-medium text-sm">
            password change
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handlePasswordChange)}>
              <FormField
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center border border-border mb-2 ">
                        <div className=" flex-1  ">
                          <Input
                            disabled={pending}
                            {...field}
                            type={previousPassType}
                            placeholder="Previous password"
                            className="placeholder:text-muted text-white  border-none"
                          />
                        </div>

                        <div className="p-2 w-12 relative flex justify-center items-center">
                          <button
                            type="button"
                            onClick={() =>
                              previousPassType == "text"
                                ? setPreviousPassType("password")
                                : setPreviousPassType("text")
                            }
                          >
                            {previousPassType == "text" ? (
                              <EyeOff className="text-white w-4 h-4 md:w-5 md:h-5" />
                            ) : (
                              <Eye className="text-white w-4 h-4 md:w-5 md:h-5" />
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center border border-border mb-2 ">
                        <div className=" flex-1  ">
                          <Input
                            disabled={pending}
                            {...field}
                            type={newPassType}
                            placeholder="New password"
                            className="placeholder:text-muted text-white border-none"
                          />
                        </div>

                        <div className="p-2 w-12 relative flex justify-center items-center">
                          <button
                            type="button"
                            onClick={() =>
                              newPassType == "text"
                                ? setNewPassType("password")
                                : setNewPassType("text")
                            }
                          >
                            {newPassType == "text" ? (
                              <EyeOff className="text-white w-4 h-4 md:w-5 md:h-5" />
                            ) : (
                              <Eye className="text-white w-4 h-4 md:w-5 md:h-5" />
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
                      <div className="flex items-center border border-border mb-2 ">
                        <div className=" flex-1  ">
                          <Input
                            disabled={pending}
                            type={confirmPassType}
                            {...field}
                            placeholder="Confirm password"
                            className="placeholder:text-muted text-white border-none"
                          />
                        </div>

                        <div className="p-2 w-12 relative flex justify-center items-center">
                          <button
                            type="button"
                            onClick={() =>
                              confirmPassType == "text"
                                ? setconfirmPassType("password")
                                : setconfirmPassType("text")
                            }
                          >
                            {confirmPassType == "text" ? (
                              <EyeOff className="text-white w-4 h-4 md:w-5 md:h-5" />
                            ) : (
                              <Eye className="text-white w-4 h-4 md:w-5 md:h-5" />
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

              {pending ? (
                <div className="mt-2">
                  <RequestLoader />
                </div>
              ) : (
                <Button className="mt-2 w-full text-white">
                  <FaLock className="w-3 h-3 " />
                  SAVE
                </Button>
              )}
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordChange;
