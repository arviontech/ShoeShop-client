import {
  BadgePercent,
  DollarSign,
  Handshake,
  Home,
  LayoutDashboard,
  PackageOpen,
  Tags,
  User,
  UserRound,
} from "lucide-react";

import { Link } from "react-router-dom";

const DashboardSiderBar = () => {
  const TransportItems = [
    {
      name: "Category & Brand",
      path: "/dashboard/category-brand",
      icon: <LayoutDashboard className="size-5" />,
    },
    {
      name: "Products",
      path: "/dashboard/products",
      icon: <PackageOpen className="size-5" />,
    },

    {
      name: "Discount Coupon",
      path: "/dashboard/discount-coupon",
      icon: <Tags className="size-5" />,
    },
    {
      name: "Today Deals",
      path: "/dashboard/today-deals",
      icon: <Handshake className="size-5" />,
    },
    {
      name: "Price Manage",
      path: "/dashboard/price-manage",
      icon: <BadgePercent className="size-5" />,
    },
    {
      name: "Customers",
      path: "/dashboard/customers",
      icon: <User className="size-5" />,
    },
    {
      name: "Role Manage",
      path: "/dashboard/role-manage",
      icon: <UserRound className="size-5" />,
    },
    {
      name: "Accounts",
      path: "",
      icon: <DollarSign className="size-5" />,
    },
  ];

  return (
    <aside>
      {/* Logo */}
      <div className="flex items-center ml-10 mb-10">
        <Link to="/">
          <h1 className="text-3xl font-semibold text-white mt-5 inline-flex items-center gap-1">
            <span>
              {" "}
              Clothing <span className="text-teal-400">Hub</span>
            </span>
          </h1>
        </Link>
      </div>

      {/* Navigation Sections */}
      <div className="space-y-8 p-4 overflow-y-auto">
        {/* Pinned Section */}
        <div>
          <h3 className="text-xs uppercase text-teal-300 font-semibold mb-4">
            PINNED
          </h3>
          <nav className="space-y-2">
            <Link to="/dashboard">
              <div className="flex items-center gap-2 px-2 py-2 text-teal-100 hover:bg-teal-700 rounded-lg cursor-pointer hover:rounded-lg">
                <Home size={20} />
                <span className="truncate">Insights</span>
              </div>
            </Link>
          </nav>
        </div>

        {/* General Section */}
        <div>
          <h3 className="text-xs uppercase text-teal-300 font-semibold mb-4">
            GENERAL
          </h3>

          <div className=" flex flex-col gap-2 ">
            {/* Transport Section */}
            <div>
              <div className="ml-4 mt-2 flex flex-col gap-5">
                {TransportItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-teal-200 hover:bg-teal-600 hover:rounded-lg py-1 px-2 transition-colors duration-200 flex gap-2  items-center"
                  >
                    {item.icon} {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSiderBar;
