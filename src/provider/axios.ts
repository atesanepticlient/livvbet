import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import { generateVerificationKey } from "./verification";
export const client = axios.create({
  baseURL: process.env.B2B_API,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    VerificationKey: generateVerificationKey(
      process.env.B2B_CONSUMER_PWD!,
      process.env.B2B_AGENT_ID!
    ),
  } as RawAxiosRequestHeaders,
};
