import { CasinoGamesOutput } from "@/types/api";
import { apiSlice } from "./apiSlice";

const gamesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchGamesList: builder.query<CasinoGamesOutput, void>({
      query: () => ({
        method: "GET",
        url: "/api/GetCasinoGamesList",
      }),
    }),
  }),
});

export const { useFetchGamesListQuery } = gamesApiSlice;
