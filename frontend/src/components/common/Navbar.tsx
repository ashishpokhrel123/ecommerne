import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import PopularCategory from "../Consumer/PopularCategory/PopularCategory";
import Cart from "../Consumer/Cart/Cart";
import { cookies } from "next/dist/client/components/headers";
import { logout } from "../../api/auth/auth";
import { useCookies } from "react-cookie";

function NavBar({ isLogged }: any) {
  const navigate = useNavigate();
  const totalItemsInCart = 0;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [, , removeCookie] = useCookies(["token"]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const handleLogout = async () => {
    const logoutResponse = await logout();
    console.log(logoutResponse, "response");
    if (logoutResponse?.status === 201) {
      removeCookie("token");
      window.location.href = "/";
    }
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
          {isDropdownOpen && <PopularCategory />}
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

      {isLogged ? (
        <span className="px-4 flex items-center">
          <div className="flex items-center">
            <span className="px-4 relative">
              <FaShoppingCart className="icon" onClick={toggleCart} />
              {totalItemsInCart > 0 && (
                <span className="absolute top-[-10px] right-[-3px] flex items-center justify-center w-5 h-5 text-green-900 text-sm rounded-full border-2 border-green-900">
                  {totalItemsInCart}
                </span>
              )}
              {isCartOpen && <Cart />}
            </span>
            <span className="px-2">Carts</span>
          </div>
          <div className="flex items-center ml-4 relative">
            <span className="px-4" onClick={toggleAccountDropdown}>
              <FaUser className="icon" />
              {isAccountDropdownOpen && (
                <div className="absolute mt-2 w-36 bg-white rounded shadow-md">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/my-orders">My Orders</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <button onClick={handleLogout}> Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </span>
            <span className="px-2">Accounts</span>
          </div>
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
