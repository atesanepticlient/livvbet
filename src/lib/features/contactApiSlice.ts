import { Prisma } from "@prisma/client";
import { apiSlice } from "./apiSlice";

const agentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchContact: builder.query<
      { payload: Prisma.ContactGetPayload<object> },
      void
    >({
      query: () => ({
        method: "GET",
        url: "/api/contact",
      }),
    }),
  }),
});

export const { useFetchContactQuery } = agentApiSlice;
