import FormLoader from "@/components/auth/FormLoader";
import LoginForm from "@/components/auth/LoginForm";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <div className="bg-[#0B2B44] w-full flex justify-center items-center h-screen pb-24 md:pb-32">
        <div className="w-[95%] md:w-[350px] mx-auto">
          <FormLoader label="Login">
            <LoginForm />
          </FormLoader>
        </div>
      </div>
    </Suspense>
  );
};

export default LoginPage;
