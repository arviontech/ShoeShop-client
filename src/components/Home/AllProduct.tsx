import React from "react";
import { products } from "./Products";

const AllProducts: React.FC = () => {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full">
                -{product.discount}%
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className=" font-bold">৳{product.discountedPrice}</span>
                <span className="text-gray-400 line-through text-sm">
                  ৳{product.price}
                </span>
              </div>
              <button className="w-full mt-4 text-white py-2 rounded-full bg-[#2663EB] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
