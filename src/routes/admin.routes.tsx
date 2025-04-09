import CategoryBrand from "@/pages/Dashboard/categoryBrand/CategoryBrand";
import Customers from "@/pages/Dashboard/cutomers/Customers";
import DiscountCoupon from "@/pages/Dashboard/discountCoupon/DiscountCoupon";
import Insight from "@/pages/Dashboard/insight/Insight";
import PriceManage from "@/pages/Dashboard/priceManage/PriceManage";
import Products from "@/pages/Dashboard/products/Products";
import RoleManage from "@/pages/Dashboard/roleManage/RoleManage";
import TodayDeals from "@/pages/Dashboard/todayDeals/TodayDeals";

export const AdminRoutes = [
  {
    path: "dashboard",
    element: <Insight />,
  },
  {
    path: "category-brand",
    element: <CategoryBrand />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "discount-coupon",
    element: <DiscountCoupon />,
  },
  {
    path: "today-deals",
    element: <TodayDeals />,
  },
  {
    path: "price-manage",
    element: <PriceManage />,
  },
  {
    path: "customers",
    element: <Customers />,
  },
  {
    path: "role-manage",
    element: <RoleManage />,
  },
];
