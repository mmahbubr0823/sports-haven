import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseAp",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/sports-products",
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
    addToCart: builder.query({
      query: (body) => ({
        url: "/create-cart",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useAddToCartQuery } = baseApi;
