import React, { useState } from "react";
import Iphone14 from "../../assets/iPhone14.jpg";

function Banner() {
  return (
    <div className="px-4">
      <div className="h-[200px] bg-zinc-100 flex justify-between items-center text-green-900">
        <div className="w-1/2">
          <span className="px-4 text-2xl font-bold">
            Grab Upto 50% off On Selected Products <br />
            <button className="bg-green-900 rounded-full text-white ml-4 w-[200px] mt-2">
              Buy Now
            </button>
          </span>
        </div>
        <div className="w-1/2 relative">
          <img
            src={Iphone14}
            alt="Banner Photo"
            className="w-[200px] h-[200px] object-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
