import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { generateVerificationKey } from "./verification";
// import { generateVerificationKey } from "./verification";
export const client = axios.create({
  baseURL: process.env.B2B_API,
});

const verificationKey = generateVerificationKey(
  process.env.B2B_PRIVATE_KEY!,
  process.env.B2B_CONSUMER_PWD!,
  "Random1",
  "Random2"
).verificationKey;

console.log("Verification key : ", verificationKey);
export const config: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    VerificationKey: verificationKey,
  } as RawAxiosRequestHeaders,
};
