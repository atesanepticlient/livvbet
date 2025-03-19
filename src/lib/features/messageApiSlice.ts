import { MessageOutput } from "@/types/api";
import { apiSlice } from "./apiSlice";

const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchMessages: builder.query<MessageOutput, void>({
      query: () => ({
        method: "GET",
        url: "/api/messages",
      }),
      providesTags: ["message"],
    }),

    deleteMessages: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        method: "DELETE",
        url: `/api/messages/${id}`,
      }),
      invalidatesTags: ["message"],
    }),

    seenMessages: builder.mutation<{ message: string }, void>({
      query: () => ({
        method: "PUT",
        url: `/api/messages`,
      }),
      invalidatesTags: ["message"],
    }),
  }),
});

export const {
  useFetchMessagesQuery,
  useDeleteMessagesMutation,
  useSeenMessagesMutation,
} = paymentApiSlice;
