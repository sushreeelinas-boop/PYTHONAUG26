import React from "react";

function Card({ product }) {
  return (
    <div className="p-2 border rounded-xl shadow-xl">
      <div className="w-full h-40 rounded-xl overflow-hidden">
        <img
          src={product?.img}
          alt={product?.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <p className="text-center font-bold text-xl mt-2">
        {product?.title || "No Product Name"}
      </p>

      <p className="text-start text-gray-500 text-sm line-clamp-3">
        {product?.desc}
      </p>

      <p className="text-center font-bold text-green-600 mt-2">
        ₹{product?.price}
      </p>
    </div>
  );
}

export default Card;
