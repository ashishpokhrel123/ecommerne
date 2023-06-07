import React from "react";

function Loader() {
  return (
    <div className="h-[300px] w-[300px] bg-gray-200 animate-pulse rounded-lg">
      <div className="h-[180px]" />
      <div className="bg-white p-2">
        <div className="h-4 bg-gray-300 rounded-md mb-2" />
        <div className="h-4 bg-gray-300 rounded-md mb-2" />
        <div className="h-4 bg-gray-300 rounded-md mb-2" />
        <div className="h-4 bg-gray-300 rounded-md mb-2" />
        <div className="h-4 bg-gray-300 rounded-md mb-2" />
        <div className="h-4 bg-gray-300 rounded-md mb-2" />
        <div className="h-4 bg-gray-300 rounded-md mb-2" />
      </div>
    </div>
  );
}

export default Loader;
