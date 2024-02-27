import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProductData = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  reducerPath: "productData",
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProductData: builder.query({
      query: () => "products",
      providesTags: ["Product"],
    }),

    getMenShirts: builder.query({
      query: () => "products/category/mens-shirts",
      providesTags: ["MenShirts"],
    }),
    getWomenDress: builder.query({
      query: () => "products/category/womens-dresses",
      providesTags: ["WomenDress"],
    }),
    getSmartphones: builder.query({
      query: () => "products/category/smartphones",
      providesTags: ["Smartphones"],
    }),
    getLaptops: builder.query({
      query: () => "products/category/laptops",
      providesTags: ["Laptops"],
    }),
    getGrocery: builder.query({
      query: () => "products/category/groceries",
      providesTags: ["Grocery"],
    }),
    getWomensBag: builder.query({
      query: () => "products/category/womens-bags",
      providesTags: ["WomensBag"],
    }),
    getSearchItem: builder.query({
      query: (searchData) => `products/search?q=${searchData}`,
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductDataQuery,
  useGetMenShirtsQuery,
  useGetLaptopsQuery,
  useGetSmartphonesQuery,
  useGetWomenDressQuery,
  useGetGroceryQuery,
  useGetWomensBagQuery,
  useGetSearchItemQuery,
} = getProductData;
