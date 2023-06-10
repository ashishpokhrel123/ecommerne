import React, { useEffect, useState } from "react";
import Iphone14 from "../../../assets/iPhone14.jpg";
import TextLoader from "../../../common/loader/TextLoader";

function Cart(cart: any) {
  return (
    <div className="cart-wrapper absolute right-0 mt-2 bg-white rounded shadow-md w-96">
      <div className="py-4 px-4">
        <h1 className="font-bold text-xl mb-4">Cart</h1>
        <hr className="w-full mt-6 border-t border-gray-600" />

        <div className="mt-4 overflow-y-auto max-h-80">
          {" "}
          <div className="flex flex-col gap-3">
            {" "}
            <div className="flex flex-col gap-3">
              <div className="flex items-center bg-gray-200 w-120 p-2 leading-tight">
                <div className="flex items-center mr-2">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <div className="w-12 h-12 bg-gray-200 ml-2">
                    <img
                      src={Iphone14}
                      alt="Category 1"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold text-sm">
                    Mobile Phones Mobile Phones Mobile
                  </span>
                  <br />
                  <span className="text-xs text-gray-600">
                    Color: <span className="text-xs">Purple Blue</span>
                  </span>
                  <span className="text-sm">,</span>
                  <span className="text-xs text-gray-600">
                    Varient: <span className="text-xs">Purple Blue</span>
                  </span>
                  <br />
                  <span className="text-xs text-red-600">
                    <span>2</span> <span>item(s) left</span>
                  </span>
                  <br />
                  <div className="flex items-center">
                    <span className="text-xs text-red-600">
                      <span className="text-sm">$</span>{" "}
                      <span className="text-sm">1000</span>
                    </span>
                    <span className="text-sm text-black ml-auto">
                      <div className="flex items-center mr-7 rounded-full bg-gray-200 text-black">
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center mr-2">
                          -
                        </button>
                        <span className="px-2 border-2 bg-zinc-100">1</span>
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center ml-2">
                          +
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center bg-gray-200 w-120 p-2 leading-tight">
                <div className="flex items-center mr-2">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <div className="w-12 h-12 bg-gray-200 ml-2">
                    <img
                      src={Iphone14}
                      alt="Category 1"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold text-sm">
                    Mobile Phones Mobile Phones Mobile
                  </span>
                  <br />
                  <span className="text-xs text-gray-600">
                    Color: <span className="text-xs">Purple Blue</span>
                  </span>
                  <span className="text-sm">,</span>
                  <span className="text-xs text-gray-600">
                    Varient: <span className="text-xs">Purple Blue</span>
                  </span>
                  <br />
                  <span className="text-xs text-red-600">
                    <span>2</span> <span>item(s) left</span>
                  </span>
                  <br />
                  <div className="flex items-center">
                    <span className="text-xs text-red-600">
                      <span className="text-sm">$</span>{" "}
                      <span className="text-sm">1000</span>
                    </span>
                    <span className="text-sm text-black ml-auto">
                      <div className="flex items-center mr-7 rounded-full bg-gray-200 text-black">
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center mr-2">
                          -
                        </button>
                        <span className="px-2 border-2 bg-zinc-100">1</span>
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center ml-2">
                          +
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center bg-gray-200 w-120 p-2 leading-tight">
                <div className="flex items-center mr-2">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <div className="w-12 h-12 bg-gray-200 ml-2">
                    <img
                      src={Iphone14}
                      alt="Category 1"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold text-sm">
                    Mobile Phones Mobile Phones Mobile
                  </span>
                  <br />
                  <span className="text-xs text-gray-600">
                    Color: <span className="text-xs">Purple Blue</span>
                  </span>
                  <span className="text-sm">,</span>
                  <span className="text-xs text-gray-600">
                    Varient: <span className="text-xs">Purple Blue</span>
                  </span>
                  <br />
                  <span className="text-xs text-red-600">
                    <span>2</span> <span>item(s) left</span>
                  </span>
                  <br />
                  <div className="flex items-center">
                    <span className="text-xs text-red-600">
                      <span className="text-sm">$</span>{" "}
                      <span className="text-sm">1000</span>
                    </span>
                    <span className="text-sm text-black ml-auto">
                      <div className="flex items-center mr-7 rounded-full bg-gray-200 text-black">
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center mr-2">
                          -
                        </button>
                        <span className="px-2 border-2 bg-zinc-100">1</span>
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center ml-2">
                          +
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center bg-gray-200 w-120 p-2 leading-tight">
                <div className="flex items-center mr-2">
                  <input
                    type="radio"
                    className="form-radio text-indigo-600 h-4 w-4"
                  />
                  <div className="w-12 h-12 bg-gray-200 ml-2">
                    <img
                      src={Iphone14}
                      alt="Category 1"
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 font-semibold text-sm">
                    Mobile Phones Mobile Phones Mobile
                  </span>
                  <br />
                  <span className="text-xs text-gray-600">
                    Color: <span className="text-xs">Purple Blue</span>
                  </span>
                  <span className="text-sm">,</span>
                  <span className="text-xs text-gray-600">
                    Varient: <span className="text-xs">Purple Blue</span>
                  </span>
                  <br />
                  <span className="text-xs text-red-600">
                    <span>2</span> <span>item(s) left</span>
                  </span>
                  <br />
                  <div className="flex items-center">
                    <span className="text-xs text-red-600">
                      <span className="text-sm">$</span>{" "}
                      <span className="text-sm">1000</span>
                    </span>
                    <span className="text-sm text-black ml-auto">
                      <div className="flex items-center mr-7 rounded-full bg-gray-200 text-black">
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center mr-2">
                          -
                        </button>
                        <span className="px-2 border-2 bg-zinc-100">1</span>
                        <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center ml-2">
                          +
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full mt-6 border-t border-gray-600" />
        </div>
        <div className="flex items-center mt-5 justify-between">
          <div className="flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-4 w-4 mr-2"
            />
            <span className="text-black">All</span>
          </div>
          <span className="text-black">
            Total: <span className="text-green-900">$0</span>
          </span>
          <button className="bg-orange-700 text-white border border-orange-200 rounded-md px-4 py-2">
            Checkout ($0)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
