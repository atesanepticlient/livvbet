import { client, config } from "./axios";
import { LoginMinesInput } from "./type";

export const loginMines = async (data: LoginMinesInput) => {
  try {
    const response = await client.post<{ error: string; url: string }>(
      "/GetMinesLoginUrl",
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
