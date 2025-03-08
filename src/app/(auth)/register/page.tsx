import FormLoader from "@/components/auth/FormLoader";
import RegistationForm from "@/components/auth/RegistationForm";
import { AuthMethods } from "@/components/types";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="bg-[#0B2B44] w-full flex justify-center items-center h-screen ">
      <FormLoader
        label="Registation"
        activeAuthMethod={AuthMethods.BYEMAIL}
        authMethods={[
          AuthMethods.BYEMAIL,
          AuthMethods.BYPHONE,
          AuthMethods.ONECLIECK,
        ]}
      >
        <RegistationForm />
      </FormLoader>
    </div>
  );
};

export default RegisterPage;
