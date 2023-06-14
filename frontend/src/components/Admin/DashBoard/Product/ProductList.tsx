import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisV,
  FaFileExport,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import Table from "../../common/Table/Table";

const ProductLists = () => {
  const headers = [
    "ID",
    "Product Images",
    "Product Name",
    "Product Category",
    "stock",
    "Status",
    "Actions",
  ];
  const orders = [
    {
      id: 1,
      reference: "ORD-123",
      client: "John Doe",
      price: "$100.00",
      payment: "Paid",
      status: "available",
      action: <FaEllipsisV className="text-black" />,
    },
    {
      id: 2,
      reference: "ORD-456",
      client: "Jane Smith",
      price: "$75.00",
      payment: "Pending",
      status: "available",
      action: <FaEllipsisV className="text-black" />,
    },
    {
      id: 3,
      reference: "ORD-456",
      client: "Jane Smith",
      price: "$75.00",
      payment: "Refund",
      status: "not Available",
      action: <FaEllipsisV className="text-black" />,
    },
    {
      id: 4,
      reference: "ORD-456",
      client: "Jane Smith",
      price: "$75.00",
      payment: "Refund",
      status: "not Available",
      action: <FaEllipsisV className="text-black" />,
    },
    {
      id: 5,
      reference: "ORD-123",
      client: "John Doe",
      price: "$100.00",
      payment: "Paid",
      status: "available",
      action: <FaEllipsisV className="text-black" />,
    },
    {
      id: 6,
      reference: "ORD-456",
      client: "Jane Smith",
      price: "$75.00",
      payment: "Pending",
      status: "not Available",
      action: <FaEllipsisV className="text-black" />,
    },
  ];
  const transformedData = orders.map((item) => [
    item.id,
    item.reference,
    item.client,
    item.price,
    item.payment,
    item.status,
    item.action,
  ]);

  return (
    <div className="flex flex-col bg-white py-2 px-4">
      <Table headers={headers} data={transformedData} />
      <div className="flex items-center justify-end mt-4">
        <div className="flex items-center border rounded border-gray-300 px-2">
          <span className="text-sm text-gray-600">Items per page:</span>
          <select className="ml-2 focus:outline-none">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <button className="mr-2">
              <FaChevronLeft />
            </button>
            <button className="mr-2">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
