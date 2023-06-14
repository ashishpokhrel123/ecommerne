import React from "react";
import OrderList from "./OrderList";

function Orders() {
  return (
    <div className="flex flex-col  text-black">
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">Orders</span>
        <button className="border border-black p-2 rounded  hover:bg-gray-300 cursor-pointer">
          Order Statistics
        </button>
      </div>

      <div className="mt-4 border-2 border-gray-200 rounded p-4">
        <OrderList />
      </div>
    </div>
  );
}

export default Orders;
