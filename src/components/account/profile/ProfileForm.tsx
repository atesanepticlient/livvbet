import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  
} from "@/components/ui/form";


const ProfileForm = () => {
  const form = useForm();

  const handleUpdateForm = () => {
    //TODO : handle form update
  };

  return (
    <div className="bg-[#213f61] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleUpdateForm)}></form>
      </Form>
    </div>
  );
};

export default ProfileForm;
