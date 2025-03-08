"use client";
import React, { useEffect, useTransition } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { nameChangeSchema } from "@/schema";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";
import { nameChange } from "@/action/update";
import SweetToast from "@/components/ui/SweetToast";
import RequestLoader from "@/components/loaders/RequestLoader";
import useCurrentUser from "@/hook/useCurrentUser";

const NameChange = ({ children }: { children: React.ReactNode }) => {
  const user = useCurrentUser();
  const [pending, startTransition] = useTransition();
  const form = useForm<zod.infer<typeof nameChangeSchema>>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    resolver: zodResolver(nameChangeSchema),
  });

  const handlePasswordChange = (data: zod.infer<typeof nameChangeSchema>) => {
    startTransition(() => {
      nameChange(data).then((res) => {
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
    if (user) {
      form.reset({
        firstName: user.firstName,
        lastName: user.lastName || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-secondary p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-white uppercase text-sm font-medium">
            Change Your name
          </DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handlePasswordChange)}>
              <FormField
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={pending}
                        {...field}
                        placeholder="Your First name"
                        className="placeholder:text-muted text-white  border-border border mb-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
              />

              <FormField
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={pending}
                        placeholder="Your Last name"
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
                  
                  className="mt-2 w-full text-white"
                >
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

export default NameChange;
