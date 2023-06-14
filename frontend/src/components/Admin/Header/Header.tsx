import React, { useState } from "react";
import { RiUserLine, RiSearchLine, RiNotificationLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const Header = ({ user }: any) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // TODO: logout logic
    console.log("Logout");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="flex justify-between items-center p-1.5  bg-white text-black border-b border-gray-300">
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="flex items-center justify-space px-4">
            <RiSearchLine
              size={20}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="relative mr-10">
          <button className="focus:outline-none">
            <RiNotificationLine size={20} color="gray" />
          </button>
          {/* Add your notification badge or indicator here */}
        </div>
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-white focus:outline-none"
            onClick={toggleDropdown}
          >
            {user?.photo ? (
              <img
                src={user.photo}
                alt="User Photo"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="flex items-center">
                <div className="rounded-full bg-gray-600 flex items-center justify-center w-8 h-8">
                  <RiUserLine size={20} color="white" />
                </div>
                <span className="text-sm ml-2 text-black">Admin</span>
              </div>
            )}
            <span className="text-white text-sm">{user.name}</span>
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow">
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
