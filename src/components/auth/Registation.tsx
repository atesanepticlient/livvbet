import React from "react";
import FormLoader from "./FormLoader";
import RegistationForm from "./RegistationForm";
import { AuthMethods } from "../types";

const Registation = () => {
  return (
    <div className="md:w-[600px] mx-auto bg-white rounded-md">
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

export default Registation;
