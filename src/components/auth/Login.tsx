import React from "react";
import FormLoader from "./FormLoader";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <FormLoader label="login">
        <LoginForm />
      </FormLoader>
    </div>
  );
};

export default Login;
