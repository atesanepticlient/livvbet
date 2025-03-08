import React from "react";
import PasswordChange from "./PasswordChange";
import NameChange from "./NameChange";
import NumberChange from "./NumberChange";

const ProfileMenuContextWapper = ({
  type,
  children,
}: {
  type: "password" | "phone" | "name";
  children: React.ReactNode;
}) => {
  if (type == "password") {
    return <PasswordChange>{children}</PasswordChange>;
  } else if (type == "name") {
    return <NameChange>{children}</NameChange>;
  } else if (type == "phone") {
    return <NumberChange>{children}</NumberChange>;
  }
  return <>{children}</>;
};

export default ProfileMenuContextWapper;
