/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useAppDispatch } from "@/redux/hook";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const Option = ({ setOpen, Icon, text }: any) => {
  //   const dispatch = useAppDispatch();
  //   const navigate = useNavigate();

  //   const handleLogout = () => {
  //     dispatch(logOut());
  //     setTimeout(() => {
  //       navigate("/");
  //       toast.success("You are logged out");
  //     }, 100);
  //   };

  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        // if (text === "Logout") {
        //   handleLogout();
        // }
      }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default Option;
