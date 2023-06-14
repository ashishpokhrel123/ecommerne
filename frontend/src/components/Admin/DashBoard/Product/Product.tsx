import React, { useState } from "react";
import ProductLists from "./ProductList";
import { FaPlus } from "react-icons/fa";
import Modal from "../../common/modal/Modal";

function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const handleNewProductClick = (e: any) => {
    setIsOpen(true);
    setIsAdd(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Handle save/update/delete action
  };

  const handleChange = (e: any) => {
    // Handle form field changes
  };

  const handleImageUpload = (e: any) => {
    const files = Array.from(e.target.files);
    const uploadFiles = [];

    files.forEach((file: any) => {
      const reader = new Reader();
      reader.onload = () => {
        const imageData = {
          name: file.name,
          type: file.type,
          size: file.size,
          dataURL: reader.result,
        };
      };

      uploadFiles.push(ImageData);
    });
  };

  const formValues = {
    name: "", // Product name
    images: [], // Product images (array of file objects)
    category: "", // Product category
    price: "", // Product price
    quantity: "", // Number of products
    // Add more fields as needed
  };

  return (
    <div className="flex flex-col text-black">
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl">Product</span>
        <button className="flex items-center justify-between border border-black p-2 rounded hover:bg-gray-300 cursor-pointer">
          <FaPlus
            className="text-black cursor-pointer"
            onClick={handleNewProductClick}
          />{" "}
          New Product
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onSave={handleSubmit}
        title={
          isEdit
            ? "Update Product"
            : isDelete
            ? "Delete Product"
            : "Add Product"
        }
        isEdit={isEdit}
        isDelete={isDelete}
        isAdd={isAdd}
        content={
          isEdit || isAdd ? (
            <form className="space-y-4 bg-zinc-100">
              <div>
                <label htmlFor="name" className="block font-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="images"
                  className="block font-medium text-black"
                >
                  Images
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  onChange={handleImageUpload}
                  multiple
                  className="border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block font-medium text-black"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                >
                  {/* Render category options dynamically */}
                  <option value="">Select Category</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div>
                <label htmlFor="price" className="block font-medium text-black">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formValues.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block font-medium text-black"
                >
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formValues.quantity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black bg-gray-100"
                />
              </div>
            </form>
          ) : (
            <p>Are you sure you want to delete this product?</p>
          )
        }
      />

      <div className="mt-4 border-2 border-gray-200 rounded p-4">
        <ProductLists />
      </div>
    </div>
  );
}

export default Product;
