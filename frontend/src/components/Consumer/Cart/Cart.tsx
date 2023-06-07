import React from "react";
import Iphone14 from "../../../assets/iPhone14.jpg";

function Cart() {
  return (
    <div className="cart-wrapper absolute right-0 mt-2 bg-white rounded shadow-md w-120">
      <div className="py-4 px-4">
        <h1 className="font-bold text-xl mb-4">Cart</h1>
        <hr className="w-full mt-6 border-t border-gray-600" />
        <div className="mt-4">
          {/* Item */}
          <div className="flex items-center bg-gray-100 p-2 rounded">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-2">
              <img
                src={Iphone14}
                alt="Category 1"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex-grow">
              <span className="font-semibold text-gray-800 text-sm">
                Mobile Phones
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-800 text-sm mr-1">
                Qty:
              </span>
              <span className="text-xs text-gray-600">1</span>
            </div>
            <div className="flex items-center ml-2">
              <span className="font-semibold text-gray-800 text-sm">
                Status:
              </span>
              <span className="text-xs text-gray-600 ml-1">Processing</span>
            </div>
          </div>
        </div>
        <hr className="w-full mt-6 border-t border-gray-600" />
      </div>
    </div>
  );
}

export default Cart;
