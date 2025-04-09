import {
  ArrowRightFromLine,
  Bell,
  FileEdit,
  Moon,
  PlusSquare,
  Search,
} from "lucide-react";

import userLogo from "@/asset/userIcon.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Option from "./Option";

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const DashboardTopnav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white p-4 flex items-center justify-between  border-b fixed top-0 left-0 right-0 z-[50] lg:ml-[calc(260px)]">
      <div className="block lg:hidden">{/* <SuperAdminSideBar /> */}</div>
      <div>
        <h1 className="text-lg font-semibold hidden md:block">
          Welcome to Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500 hidden md:block">ATC LTD.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block hidden:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-[50%] md:w-full lg:w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Moon className="h-5 w-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <div className="flex items-center justify-center bg-white ">
              <motion.div
                animate={open ? "open" : "closed"}
                className="relative"
              >
                <div
                  onClick={() => setOpen((pv) => !pv)}
                  className="cursor-pointer w-12 h-12 rounded-full bg-gray-100"
                >
                  <img
                    src={userLogo}
                    alt="user"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <motion.ul
                  initial={wrapperVariants.closed}
                  variants={wrapperVariants}
                  style={{ originY: "top", translateX: "-50%" }}
                  className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[69px] -left-[50px] w-48 overflow-hidden md:-left-[150%] "
                >
                  <li className="text-sm font-medium text-center">"Admin"</li>
                  <li className="text-sm font-medium text-center">
                    Super Admin
                  </li>
                  <Option
                    setOpen={setOpen}
                    Icon={FileEdit}
                    text="Edit Profile"
                  />
                  <Option setOpen={setOpen} Icon={PlusSquare} text="Setting" />

                  <Option
                    setOpen={setOpen}
                    Icon={ArrowRightFromLine}
                    text="Logout"
                  />
                </motion.ul>
              </motion.div>
            </div>
          </div>

          <div className="block lg:hidden">
            <div className="flex items-center justify-center bg-white ">
              <motion.div
                animate={open ? "open" : "closed"}
                className="relative"
              >
                <div
                  onClick={() => setOpen((pv) => !pv)}
                  className="cursor-pointer w-12 h-12 rounded-full bg-gray-100"
                >
                  <img
                    src={userLogo}
                    alt="user"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <motion.ul
                  initial={wrapperVariants.closed}
                  variants={wrapperVariants}
                  style={{ originY: "top", translateX: "-50%" }}
                  className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[62px] -left-[50px] w-48 overflow-hidden md:-left-[150%] "
                >
                  <li className="text-sm font-medium text-center">"Admin"</li>
                  <li className="text-sm font-medium text-center">
                    Super Admin
                  </li>
                  <Option
                    setOpen={setOpen}
                    Icon={FileEdit}
                    text="Edit Profile"
                  />
                  <Option setOpen={setOpen} Icon={PlusSquare} text="Setting" />

                  <Option
                    setOpen={setOpen}
                    Icon={ArrowRightFromLine}
                    text="Logout"
                  />
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardTopnav;
