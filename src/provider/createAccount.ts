import { AxiosResponse } from "axios";
import { client, config } from "./axios";
import { CreateAccountInput } from "./type";

export const createAccount = async (data: CreateAccountInput) => {
  try {
    const response: AxiosResponse = await client.post(
      "/CreateAccount",
      data,
      config
    );

    return response.data;
  } catch (error) {
    console.log({error})
    throw error;
  }
};
