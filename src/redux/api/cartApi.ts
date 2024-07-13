import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/cart",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getAllCarts: builder.query({
      query: () => ({
        url: "/get-all-carts",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: "/create-cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useAddToCartMutation, useGetAllCartsQuery } = cartApi;
