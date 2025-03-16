"use server";
import { createAccount } from "@/provider/createAccount";
export const createUser = async () => {

  createAccount({
    consumerId: +process.env.B2B_CONSUMER_ID!,
    firstName: "Ate San",
    lastName: "Epti",
    currencyCode: "BDT",
    password: "1234",
    userName: "epti12345",
  })
    .then((res) => {
      console.log("TEST RESONSE ", res);
    })
    .catch((err) => console.log("OPERATION FAILED", err));
};
