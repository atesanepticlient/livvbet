import { AxiosResponse } from "axios";
import { client, config } from "./axios";
import { FetchGamesListInput } from "./type";

export const fetchGamesList = async (data: FetchGamesListInput) => {
  try {
    const response: AxiosResponse = await client.post(
      "/GetHtml5RngGameList",
      data,
      config
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
