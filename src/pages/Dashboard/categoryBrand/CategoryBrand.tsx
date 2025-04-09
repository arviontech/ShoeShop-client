/* eslint-disable @typescript-eslint/no-unused-vars */
import CreateBrand from "@/components/dashboard/categoryAndBrand/createBrand/CreateBrand";
import CreateCategory from "@/components/dashboard/categoryAndBrand/createCategory/CreateCategory";
import DashboardHeading from "@/components/dashboard/dashboardHeading/DashboardHeading";
import GetAllCategory from "@/components/dashboard/categoryAndBrand/getAllCategory/GetAllCategory";
import GetBrand from "@/components/dashboard/categoryAndBrand/getBrand/GetBrand";
import { useGetAllCategoryQuery } from "@/redux/features/category/category.api";
import CategoryHead from "@/components/dashboard/categoryAndBrand/CategoryHead/CategoryHead";
import GetAllCategoryHead from "@/components/dashboard/categoryAndBrand/getAllCategoryHead/GetAllCategoryHead";

const CategoryBrand = () => {
  const { data: categoryData } = useGetAllCategoryQuery({});

  const stats = categoryData?.data;

  return (
    <div className="p-4">
      <div>
        <DashboardHeading headingName="Create Category Head" />
        <div>
          <CategoryHead />
        </div>
        <DashboardHeading headingName="Category Head List" />
        <div className="my-5">
          <GetAllCategoryHead />
        </div>
      </div>
      <DashboardHeading headingName="Create Category" />
      <div>
        <div className="p-6 bg-white rounded-md border border-gray-200 mt-5">
          {/* Stats Section */}
          <div className="flex justify-between mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">
                {stats?.totalCategory || "00"}
              </div>
              <div className="text-sm text-gray-400">Total Category</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">
                {stats?.totalBrand || "00"}
              </div>
              <div className="text-sm text-gray-400">Total Brand</div>
            </div>
          </div>

          {/* Add Category Form */}
          <div className="mb-4">
            <CreateCategory />
          </div>

          {/* brand form */}
        </div>
      </div>

      {/* total category */}
      <div className="mt-10 mb-20">
        <DashboardHeading headingName="All Category" />
        <div className="p-6 bg-white rounded-md border border-gray-200 mt-5">
          <GetAllCategory />
        </div>
      </div>

      {/* brand form */}
      <div className="mt-5">
        <DashboardHeading headingName="Create Brand" />
        <div className="p-6 bg-white rounded-md border border-gray-200 mt-5">
          <CreateBrand />
        </div>
      </div>
      <div className="mt-5">
        <DashboardHeading headingName="Get All Brand" />
        <div className="p-6 bg-white rounded-md border border-gray-200 mt-5">
          <GetBrand />
        </div>
      </div>
    </div>
  );
};

export default CategoryBrand;
