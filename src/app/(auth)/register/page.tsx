import FormLoader from "@/components/auth/FormLoader";
import RegistationForm from "@/components/auth/RegistationForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="bg-[#1A1A1A] w-full flex justify-center items-center h-screen ">
      <FormLoader label="Registation">
        <RegistationForm />
      </FormLoader>
    </div>
  );
};

export default RegisterPage;
