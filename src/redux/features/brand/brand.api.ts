import { baseApi } from "@/redux/api/baseApi";

const brandApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBrandForProduct: build.mutation({
      query: (data) => ({
        url: "/brands/create-brand",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: ["Brand"],
    }),
    getAllBrand: build.query({
      query: () => ({
        url: "/brands",
        method: "GET",
      }),
      providesTags: ["Brand"],
    }),
    deleteBrand: build.mutation({
      query: (id) => ({
        url: `/brands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Brand"],
    }),
  }),
});

export const {
  useCreateBrandForProductMutation,
  useGetAllBrandQuery,
  useDeleteBrandMutation,
} = brandApi;
