import React from "react";
import { FiChevronDown } from "react-icons/fi";

function Filter() {
  return (
    <div className="px-4 flex items-center justify-between mt-5">
      <div className="flex">
        <span className="px-4 mr-7 rounded-full bg-gray-200 text-black flex items-center">
          <span className="rounded-full p-1">Product</span>{" "}
          <FiChevronDown className="ml-1" />
        </span>
        <span className="px-4 mr-7 rounded-full bg-gray-200 text-black flex items-center">
          <span className="rounded-full p-1">Price</span>{" "}
          <FiChevronDown className="ml-1" />
        </span>
        <span className="px-4 mr-7 rounded-full bg-gray-200 text-black flex items-center">
          <span className="rounded-full p-1">Review</span>{" "}
          <FiChevronDown className="ml-1" />
        </span>
        <span className="px-4 mr-7 rounded-full bg-gray-200 text-black flex items-center">
          <span className="rounded-full p-1">Color</span>{" "}
          <FiChevronDown className="ml-1" />
        </span>
        <span className="px-4 mr-7 rounded-full bg-gray-200 text-black flex items-center">
          <span className="rounded-full p-1">All Filters</span>{" "}
          <FiChevronDown className="ml-1" />
        </span>
      </div>
      <div>
        <span className="text-black">Sort By:</span>{" "}
        <select className="rounded-full p-1">
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
