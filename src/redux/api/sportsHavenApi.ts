import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseAp",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sports-haven-bakend.vercel.app/api/sports-products",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/all-products",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/single-product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = baseApi;
