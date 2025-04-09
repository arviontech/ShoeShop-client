import { baseApi } from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create category
    createCategory: build.mutation({
      query: (payload) => ({
        url: "/categories/create-category",
        method: "POST",
        contentType: "multipart/form-data",
        data: payload,
      }),
      invalidatesTags: ["Category"],
    }),

    //create category head
    createCategoryHead: build.mutation({
      query: (payload) => ({
        url: "/category-table-head/create-category-table-head",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["Category"],
    }),

    //get all category head
    getAllCategoryHead: build.query({
      query: () => ({
        url: "/category-table-head",
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    //get all category
    getAllCategory: build.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    //update category head
    updateCategoryHead: build.mutation({
      query: ({ id, data }) => ({
        url: `/category-table-head/update-head/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["Category"],
    }),

    //delete category head
    deleteCategoryHead: build.mutation({
      query: (id) => ({
        url: `/category-table-head/delete-head/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    //update update category for product
    updateCategoryForProduct: build.mutation({
      query: (categoryData) => ({
        url: `/categories/${categoryData.id}`,
        method: "PATCH",
        data: categoryData.option,
      }),
      invalidatesTags: ["Category"],
    }),

    //delete category
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryForProductMutation,
  useCreateCategoryHeadMutation,
  useGetAllCategoryHeadQuery,
  useUpdateCategoryHeadMutation,
  useDeleteCategoryHeadMutation,
} = categoryApi;
