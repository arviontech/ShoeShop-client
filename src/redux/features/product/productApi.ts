import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getAllProducts: build.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: build.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    updateProduct: build.mutation({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: "PATCH",
        body: data.productData,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
