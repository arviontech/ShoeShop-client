import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import CategoryLayout from "../layouts/CategoryLayout";
import { categoryRoutes } from "./category.routes";
import DashboardLayout from "@/layouts/Dashboard/DashboardLayout";
import { AdminRoutes } from "./admin.routes";
import AllProducts from "@/components/Home/AllProduct";
import Login from "@/components/Login/Login";
import SignUp from "@/components/Login/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "categories",
        element: <CategoryLayout />,
        children: categoryRoutes,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: AdminRoutes,
  },
  {
    path:"/login" ,
    element: <Login/>,
  },
  {
    path:"/signup", 
    element: <SignUp/>,
  },

]);
