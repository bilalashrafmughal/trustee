import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseApi";

export const userAccountApi = createApi({
  reducerPath: "userAccountApi",
  baseQuery,
  tagTypes: ["Account"],
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => "/accounts",
      providesTags: [{ type: "Account", id: "LIST" }],
      transformResponse: (response) => {
        return response ? [...response].sort((a, b) => b.id - a.id) : [];
      },
    }),
    createAccount: builder.mutation({
      query: (accountData) => ({
        url: "/accounts",
        method: "POST",
        body: accountData,
      }),
      invalidatesTags: [{ type: "Account", id: "LIST" }],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `/accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Account", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useCreateAccountMutation,
  useDeleteAccountMutation,
} = userAccountApi;
export default userAccountApi.reducer;
