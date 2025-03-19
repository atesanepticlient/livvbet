"use server";

import { createAccount } from "@/provider/createAccount";

export const createUser = async () => {
  createAccount({
    consumerId: 387,
    userName: "epti12348",
    password: "123456",
    currencyCode: "BDT",
    firstName: "Ate San",
    lastName: "EmptyName",
  })
    .then((res) => {
      console.log("TEST RESONSE ", res);
    })
    .catch((err) => console.log("OPERATION FAILED", err));
};
