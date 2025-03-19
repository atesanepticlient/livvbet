import { client, config } from "./axios";
import { LoginBingoInput } from "./type";

export const loginBingo = async (data: LoginBingoInput) => {
  try {
    const response = await client.post<{ error: string; url: string }>(
      "/GetBingoLoginUrl",
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
