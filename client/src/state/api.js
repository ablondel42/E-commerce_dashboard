import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),
  reducerPath: "main",
  tagTypes: [
    "Kpis",
    "Products",
    "Customers",
    "Orders",
    "Sellers",
    "Payments",
    "Reviews",
    "Categories",
  ],
  endpoints: (build) => ({
    getKpis: build.query({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),

    getCustomers: build.query({
      query: () => "sales/customers",
      providesTags: ["Customers"],
    }),

    getOrders: build.query({
      query: () => "sales/orders",
      providesTags: ["Orders"],
    }),

    getPayments: build.query({
      query: () => "sales/payments",
      providesTags: ["Payments"],
    }),

    getProducts: build.query({
      query: () => "products/products",
      providesTags: ["Products"],
    }),

    getReviews: build.query({
      query: () => "sales/reviews",
      providesTags: ["Reviews"],
    }),

    getSellers: build.query({
      query: () => "sales/sellers",
      providesTags: ["Sellers"],
    }),

    getCategoriesAndPrices: build.query({
      query: () => "sales/orders/categories",
      providesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetOrdersQuery,
  useGetPaymentsQuery,
  useGetReviewsQuery,
  useGetSellersQuery,
  useGetCategoriesAndPricesQuery,
} = api;
