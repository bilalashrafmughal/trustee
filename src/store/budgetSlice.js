import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseApi";

export const budgetApi = createApi({
  reducerPath: "budgetApi",
  baseQuery,
  tagTypes: ["Budget"],
  endpoints: (builder) => ({
    getBudget: builder.query({
      query: (id) => `/budget/${id}`,
      providesTags: (result, error, id) => [{ type: "Budget", id }],
    }),
    // Example mutation for demonstration:
    updateBudget: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/budget/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Budget", id }],
    }),
  }),
});

export const { useGetBudgetQuery, useUpdateBudgetMutation } = budgetApi;
export default budgetApi.reducer;
