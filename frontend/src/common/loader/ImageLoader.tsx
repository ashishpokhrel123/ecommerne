import React from "react";
import placeholderImage from "./placeholder-image.png";

function ImageLoader() {
  return (
    <div className="h-[300px] w-[300px] bg-gray-200 animate-pulse rounded-lg">
      <img src="" className="h-[180px] object-cover" />
    </div>
  );
}

export default ImageLoader;
