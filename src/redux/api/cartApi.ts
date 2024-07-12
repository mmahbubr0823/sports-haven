import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api/cart",
  }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (body) => ({
        url: "/create-cart",
        method: "POST",
        body,
      }),
      invalidatesTags: ['Post'],
    }),
    getAllCarts: builder.query({
      query: () => ({
        url: "/get-all-carts",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddToCartMutation, useGetAllCartsQuery } = cartApi;
