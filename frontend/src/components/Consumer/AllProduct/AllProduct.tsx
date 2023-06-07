import React from "react";
import Product from "../Product/Product";
import Iphone14 from "../../../assets/iPhone14.jpg";

export default function AllProduct() {
  return (
    <div className="flex flex-wrap -mx-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
        <div className="w-1/4 mb-4 px-4 mt-5" key={product}>
          <Product
            name="Apple iPhone 14 Pro Max"
            images={Iphone14}
            rating={3}
            price={1990}
          />
        </div>
      ))}
    </div>
  );
}
