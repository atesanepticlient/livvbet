import { client, config } from "./axios";
import { LoginCrashInput } from "./type";

export const loginCrash = async (data: LoginCrashInput) => {
  try {
    const response = await client.post<{ error: string; url: string }>(
      "/GetCrashLoginUrl",
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
