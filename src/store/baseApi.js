import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://688291f821fa24876a9b3e1b.mockapi.io";

export const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Optionally, export a pre-configured createApi for consistency
export const baseApi = createApi;
