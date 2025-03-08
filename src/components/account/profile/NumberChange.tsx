"use client";
import React, { useEffect, useTransition } from "react";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SweetToast from "@/components/ui/SweetToast";
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

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";
import { phoneNumberChangeSchema } from "@/schema";
import useCurrentUser from "@/hook/useCurrentUser";
import { phoneChange } from "@/action/update";
import RequestLoader from "@/components/loaders/RequestLoader";

const NumberChange = ({ children }: { children: React.ReactNode }) => {
  const [pending, startTransition] = useTransition();
  const user = useCurrentUser();

  const form = useForm<zod.infer<typeof phoneNumberChangeSchema>>({
    defaultValues: {
      password: "",
      phone: "",
    },
    resolver: zodResolver(phoneNumberChangeSchema),
  });

  const handlePasswordChange = (
    data: zod.infer<typeof phoneNumberChangeSchema>
  ) => {
    startTransition(() => {
      phoneChange(data).then((res) => {
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

  useEffect(() => {
    if (user && user.phone) {
      form.reset({
        password: "",
        phone: user.phone,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-secondary p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="text-white uppercase font-medium text-sm">
            Change phone number
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handlePasswordChange)}>
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={pending}
                        {...field}
                        type="password"
                        placeholder="Current Password"
                        className="placeholder:text-muted text-white  border-border border mb-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
              />

              <FormField
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={pending}
                        {...field}
                        placeholder="New Phone number"
                        className="placeholder:text-muted text-white  border-border border"
                      />
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
                <Button
                  variant={"destructive"}
                  className="mt-2 w-full !bg-brand-foreground"
                >
                  <FaLock className="w-3 h-3 text-white" />
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

export default NumberChange;
