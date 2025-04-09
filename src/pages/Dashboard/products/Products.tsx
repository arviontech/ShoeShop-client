import DashboardHeading from "@/components/dashboard/dashboardHeading/DashboardHeading";
import CreateProduct from "@/components/dashboard/products/createProduct/CreateProduct";
import GetAllProduct from "@/components/dashboard/products/getAllProduct/GetAllProduct";

const Products = () => {
  return (
    <div className="p-5">
      <DashboardHeading headingName="Create Products" />
      <div className="p-6 bg-white rounded-md border border-gray-200 mt-5">
        <CreateProduct />
      </div>
      <div className="mt-10">
        <DashboardHeading headingName="Product List" />
        <div className="p-6 bg-white rounded-md border border-gray-200 mt-5">
          <GetAllProduct />
        </div>
      </div>
    </div>
  );
};

export default Products;
