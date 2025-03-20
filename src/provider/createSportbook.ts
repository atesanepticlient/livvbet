import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";
import { CreateSportBookAccount } from "./type";

export const createSportBookAccount = async (data: CreateSportBookAccount) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      } as RawAxiosRequestHeaders,
    };

    const response: AxiosResponse = await axios.post(
      "http://apisbjstest_1xbetcompanl.gksic5ousjiw9pldk3apx6dmbte.com/CreateAccount",
      data,
      config
    );

    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
