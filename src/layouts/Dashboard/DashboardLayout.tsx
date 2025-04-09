import { Outlet } from "react-router-dom";
import DashboardSiderBar from "@/components/dashboard/DashboardSiderBar";
import DashboardTopnav from "@/components/dashboard/DashboardTopNav";
import DashboardFooter from "./DashboardFooter";
import "../../style/style.css";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <div className="flex w-full">
        <div
          id="sidebar"
          className="bg-[#134359] w-[260px] fixed top-0 left-0 h-screen min-h-screen max-h-screen z-[999] overflow-y-auto scroll-smooth hidden lg:block"
        >
          <DashboardSiderBar />
        </div>
        <div className="w-full lg:ml-[250px] bg-[#eff2f6]">
          <DashboardTopnav />
          <div className=" lg:mx-[calc(1rem)] lg:my-[calc(50px+3rem)] min-h-screen">
            <Outlet />
          </div>
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
