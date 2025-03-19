import { client, config } from "./axios";
import { LoginSlotsInput } from "./type";

export const loginSlots = async (data: LoginSlotsInput) => {
  try {
    const response = await client.post<{ error: string; url: string }>(
      "/GetSlotsLoginUrl",
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
