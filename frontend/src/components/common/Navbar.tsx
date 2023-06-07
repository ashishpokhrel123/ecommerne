import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

function NavBar(userDetails: any) {
  const totalItemsInCart = 0;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-[60px] bg-white flex justify-between text-black font-semiBold">
      <span className="px-4 flex items-center text-white">
        <img src={Logo} alt="logo" className="w-10 h-10" />
      </span>

      <span className="px-4 flex items-center">
        <span className="px-4 relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={toggleDropdown}
          >
            <FiChevronDown className="ml-2 text-black" />
            <span className="px-2">Categories</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-md">
              <ul className="py-2 px-6">
                <li className="cursor-pointer text-black hover:bg-gray-200 py-2 px-4">
                  Men's Fashion
                </li>
                <li className="cursor-pointer text-black hover:bg-gray-200 py-2 px-4">
                  Women's Fashion
                </li>
                <li className="cursor-pointer text-black hover:bg-gray-200 py-2 px-4">
                  Electronics Devices
                </li>
                <li className="cursor-pointer text-black hover:bg-gray-200 py-2 px-4">
                  Mobiles and Laptops
                </li>
              </ul>
            </div>
          )}
        </span>
        <span className="px-4">Deals</span>
        <span className="px-4">What's New</span>
      </span>

      <span className="relative ml-4 mt-3 ">
        <FiSearch className="absolute left-4 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search Products"
          className="pl-10 pr-4 py-2 bg-gray-100 rounded-full  border-none focus:outline-none"
        />
      </span>

      {userDetails ? (
        <span className="px-4 flex items-center">
          <span className="px-4 relative">
            <FaShoppingCart className="icon" />
            {totalItemsInCart > 0 && (
              <span className="absolute top-[-10px] right-[-3px] flex items-center justify-center w-5 h-5  text-green-900 text-sm rounded-full border 2 border-green-900">
                {totalItemsInCart}
              </span>
            )}
          </span>
          <span className="px-4">
            <FaUser className="icon" />
          </span>
        </span>
      ) : (
        <span className="px-4 flex items-center text-black">
          <Link to="/login">
            <span className="px-4">Login</span>
          </Link>
          <span className="px-4">Register</span>
        </span>
      )}
    </div>
  );
}

export default NavBar;
