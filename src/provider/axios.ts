import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
// import { generateVerificationKey } from "./verification";
export const client = axios.create({
  baseURL: process.env.B2B_API,
});

export const config: AxiosRequestConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    VerificationKey:
      "6a002b794bca52fe8d232583d1747247f1d22430bad23b3ecef9a17c14cd87e0JHQP3dMgamerDZMJqPdDKw==2d70e917f5a1cb00406d25d6c213b2c3",
  } as RawAxiosRequestHeaders,
};
