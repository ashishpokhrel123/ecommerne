import React from "react";
import { AiFillPieChart, AiOutlineDollar } from "react-icons/ai";
import {
  FaBoxes,
  FaListAlt,
  FaMoneyBillAlt,
  FaShoppingCart,
  FaTruck,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "../../common/Avatar";

const Sidebar = () => {
  const menus = [
    {
      title: "Dashboard",
      path: "/home/dashboard",
      icon: <AiFillPieChart size={18} />,
    },
    {
      title: "Orders",
      path: "/home/orders",
      icon: <FaShoppingCart size={18} />,
    },
    {
      title: "Products",
      path: "/home/products",
      icon: <FaBoxes size={18} />,
    },
    {
      title: "Categories",
      path: "/home/categories",
      icon: <FaListAlt size={18} />,
    },
    {
      title: "Customers",
      path: "/home/customers",
      icon: <FaUserFriends size={18} />,
    },
    {
      title: "Delivery",
      path: "/home/delivery",
      icon: <FaTruck size={18} />,
    },
    {
      title: "Payment",
      path: "/home/payment",
      icon: <FaMoneyBillAlt size={18} />,
    },
  ];

  return (
    <>
      <div className="w-fit h-screen duration-300 bg-zinc-100 text-black border-r border-gray-200 text-sm dark:border-gray-600 p-5 dark:bg-slate-800">
        <div className="flex gap-x-4 items-center">
          <Avatar name="Aashish Pokhrel" photo="" />
        </div>
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li className="flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 mt-2">
                <span className="text-1xl">{menu.icon}</span>
                <span className="ml-1 text-sm">{menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
