import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../../common/loader/Loader";

interface ProductProps {
  name: string;
  images: string;
  rating: number;
  price: number;
}

function Product({ images, name, rating, price }: ProductProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center">
      {loading ? (
        <Loader />
      ) : (
        // Render product details when data finishes loading
        <div className="h-[300px] w-[300px] bg-zinc-100 shadow-lg rounded-lg  py-4 relative">
          <Link
            to={`/product-details/${"9b36f57e-562a-4c5f-87f4-3739aba4a4df"}`}
          >
            <div className="h-[180px] flex items-center justify-center">
              <img
                src={images}
                className="object-contain h-3/4"
                alt="Product"
              />
            </div>

            <FiHeart className="absolute top-2 right-2 text-black-500" />

            <div className="bg-white p-2">
              <div className="flex items-center mt-2">
                <span className="text-black text-sm">{name}</span>
              </div>

              <div className="flex items-center mt-2">
                {Array.from({ length: rating }, (_, index) => (
                  <FaStar key={index} className="text-green-900 text-lg" />
                ))}{" "}
                ( <span className="text-green-900">3</span>)
              </div>
              <div className="flex items-center mt-2 justify-between">
                <span className="text-black text-lg font-semibold">
                  ${price}
                </span>
                <button className="bg-green-900 rounded-full text-white w-[100px] h-[30px]">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Product;
