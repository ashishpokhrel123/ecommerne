import React, { useState } from "react";
import Iphone14 from "../../../assets/iPhone14.jpg";

function PopularCategory() {
  return (
    <div className="popular-category-wrapper absolute mt-2 bg-white rounded shadow-md w-96 h-200">
      <div className="py-4 px-4">
        <h1 className="font-bold text-xl mb-4">Popular Category</h1>
        <hr className="w-full mt-6 border-t border-gray-600" />
        <div className="grid grid-cols-2 gap-2 mt-4">
          {/* Category 1 */}
          <div className="flex items-center bg-gray-200  p-2">
            <div className="w-12 h-12 bg-gray-200  mr-2">
              <img src={Iphone14} alt="Category 1" className="w-10 h-10" />
            </div>
            <div>
              <span className="font-semibold text-gray-800 text-sm">
                Mobile Phones
              </span>
              <br />
              <span className="text-xs text-gray-600 inline">
                120 Items Available
              </span>
            </div>
          </div>
          <div className="flex items-center bg-gray-200  p-2">
            <div className="w-12 h-12 bg-gray-200  mr-2">
              <img src={Iphone14} alt="Category 1" className="w-10 h-10" />
            </div>
            <div>
              <span className="font-semibold text-gray-800 text-sm">
                Mobile Phones
              </span>
              <br />
              <span className="text-xs text-gray-600 inline">
                120 Items Available
              </span>
            </div>
          </div>
          <div className="flex items-center bg-gray-200  p-2">
            <div className="w-12 h-12 bg-gray-200  mr-2">
              <img src={Iphone14} alt="Category 1" className="w-10 h-10" />
            </div>
            <div>
              <span className="font-semibold text-gray-800 text-sm">
                Mobile Phones
              </span>
              <br />
              <span className="text-xs text-gray-600 inline">
                120 Items Available
              </span>
            </div>
          </div>
          <div className="flex items-center bg-gray-200  p-2">
            <div className="w-12 h-12 bg-gray-200  mr-2">
              <img src={Iphone14} alt="Category 1" className="w-10 h-10" />
            </div>
            <div>
              <span className="font-semibold text-gray-800 text-sm">
                Mobile Phones
              </span>
              <br />
              <span className="text-xs text-gray-600 inline">
                120 Items Available
              </span>
            </div>
          </div>
          <div className="flex items-center bg-gray-200  p-2">
            <div className="w-12 h-12 bg-gray-200  mr-2">
              <img src={Iphone14} alt="Category 1" className="w-10 h-10" />
            </div>
            <div>
              <span className="font-semibold text-gray-800 text-sm">
                Mobile Phones
              </span>
              <br />
              <span className="text-xs text-gray-600 inline">
                120 Items Available
              </span>
            </div>
          </div>
          <div className="flex items-center bg-gray-200  p-2">
            <div className="w-12 h-12 bg-gray-200  mr-2">
              <img src={Iphone14} alt="Category 1" className="w-10 h-10" />
            </div>
            <div>
              <span className="font-semibold text-gray-800 text-sm">
                Mobile Phones
              </span>
              <br />
              <span className="text-xs text-gray-600 inline">
                120 Items Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCategory;
