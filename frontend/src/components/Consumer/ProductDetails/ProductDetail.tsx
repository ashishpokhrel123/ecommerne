import React, { useEffect, useState } from "react";
import Iphone14 from "../../../assets/iPhone14.jpg";
import { FaBox, FaStar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import Loader from "../../../common/loader/Loader";
import ImageLoader from "../../../common/loader/ImageLoader";
import TextLoader from "../../../common/loader/TextLoader";

function ProductDetail({ productId }: { productId: string }) {
  const colorOptions = [
    {
      id: 1,
      name: "Silver",
      color: "bg-silver-500",
      border: "border-silver-500",
    },
    { id: 2, name: "Gold", color: "bg-gold-500", border: "border-gold-500" },
    {
      id: 3,
      name: "Space Gray",
      color: "bg-space-gray-500",
      border: "border-space-gray-500",
    },
    {
      id: 4,
      name: "Midnight Green",
      color: "bg-midnight-green-500",
      border: "border-midnight-green-500",
    },
    { id: 5, name: "Blue", color: "bg-blue-500", border: "border-blue-500" },
    { id: 6, name: "Red", color: "bg-red-500", border: "border-red-500" },
    {
      id: 7,
      name: "Purple",
      color: "bg-purple-500",
      border: "border-purple-500",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a delay to show the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  const handleBuyNow = () => {
    // Logic for buying the product
  };

  const handleAddToCart = () => {
    // Logic for adding the product to the cart
  };

  return (
    <div className="px-4">
      <div className="h-[550px] flex justify-between items-center text-green-900">
        {loading ? (
          <ImageLoader />
        ) : (
          <div className="w-1/2 relative bg-zinc-100 h-full flex flex-col items-center justify-center">
            <img
              src={Iphone14}
              alt="Banner Photo"
              className="w-[300px] h-[300px] object-contain"
            />
            <div className="flex items-center mt-4">
              {colorOptions.map((option) => (
                <div
                  key={option.id}
                  className={`w-[50px] h-[50px] border-2 rounded-lg overflow-hidden ${
                    selectedColor === option.name
                      ? "ring-2 ring-offset-2 ring-green-500"
                      : ""
                  }`}
                  onClick={() => handleColorSelection(option.name)}
                >
                  <img
                    src={Iphone14}
                    alt="Product Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="w-1/2 h-full flex flex-col mx-6">
          {loading ? (
            <div>
              <TextLoader />
            </div>
          ) : (
            <>
              <div className="flex flex-col">
                <span className="text-md text-black font-bold">
                  Iphone 14 Pro Max
                </span>
                <span className="text-stone-700 text-sm">Best Phone ever</span>
              </div>
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} className="text-green-900 text-lg" />
                ))}{" "}
                (<span className="text-green-900">5</span>)
              </div>
              <hr className="w-full mt-6 border-t border-gray-600" />
              <div className="flex flex-col">
                <span className="text-md text-black font-bold">
                  $1970 or 100/month
                </span>
                <span className="text-stone-700 text-sm">
                  Suggested Payment with Emi*
                </span>
              </div>
              <hr className="w-full mt-6 border-t border-gray-600" />
              <div className="flex flex-col">
                <span className="text-md text-black font-bold">
                  Choose Color
                </span>
                <div className="flex mt-2">
                  {colorOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`w-8 h-8 rounded-full mr-2 ${
                        selectedColor === option.name
                          ? "ring-2 ring-offset-2 ring-green-500"
                          : ""
                      }`}
                      onClick={() => handleColorSelection(option.name)}
                    >
                      <div
                        className={`w-8 h-8 rounded-full p-3 ${
                          option.border
                        } border-2 ${
                          selectedColor === option.name ? option.color : ""
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="w-full mt-6 border-t border-gray-600" />
              <div className="flex flex-col">
                <span className="text-md text-black font-bold">Quantity</span>
                <div className="flex items-center mt-2">
                  <div className="flex items-center mr-7 rounded-full bg-gray-200 text-black">
                    <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center mr-2">
                      -
                    </button>
                    <span className="px-2">1</span>
                    <button className="rounded-full text-green-900 w-8 h-8 flex items-center justify-center ml-2">
                      +
                    </button>
                  </div>
                  <p className="text-black">
                    Only <span className="text-orange-600">12 items</span> left.
                    <br />
                    <span className="text-black">Don't miss it!</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6 gap-2">
                <button
                  className="bg-green-900 rounded-full text-white w-[200px] h-10 flex items-center justify-center"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button
                  className="bg-white border-2 border-gray-900 rounded-full text-black w-[200px] h-10 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </>
          )}
          {loading ? (
            <TextLoader />
          ) : (
            <div className="border-2 border-gray-200 mt-5 p-4">
              <div className="flex items-center gap-4">
                <FaTruck size={20} color="orange" />
                <span className="text-sm text-black font-bold">
                  Free Delivery
                </span>
              </div>
              <p className="text-stone-700 text-sm mt-2 underline ml-8">
                Enter Your Postal Code for Delivery
              </p>
              <div className="flex items-center gap-4 mt-4">
                <FaBox size={20} color="orange" />
                <span className="text-sm text-black font-bold">
                  Return Delivery
                </span>
              </div>
              <p className="text-stone-700 text-sm mt-2 ml-8">
                Free 7 days Delivery.
                <span className="underline">Details</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
