import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";
import { SportBookLoginInput } from "./type";

export const loginSportBookAccount = async (data: SportBookLoginInput) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      } as RawAxiosRequestHeaders,
    };

    const response: AxiosResponse = await axios.post<{
      errorCode: string;
      loginUrl: string;
    }>(
      "http://apisbjstest_1xbetcompanl.gksic5ousjiw9pldk3apx6dmbte.com/GetLoginUrl",
      data,
      config
    );
    
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
