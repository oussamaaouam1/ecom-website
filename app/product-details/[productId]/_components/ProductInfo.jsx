'use client'
import React, { useState } from "react";
import { List } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import {useUser} from '@clerk/nextjs'
import { useRouter } from "next/navigation";

function ProductInfo({ product }) {
  // console.log(product);

  const {user} = useUser();
  const router = useRouter();
  const handleAddToCart = () =>{
    if(!user){
      router.push('/sign-in')
    }
  }

  // State to track the selected size and color
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    console.log("Selected Size:", size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    console.log("Selected Color:", color);
  };

  return (
    <div className="flex flex-col text-center">
      {product ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-black">
            {product.title}
          </h1>
          {/* <h1 className="text-secondary font-bold">{product.category.name}</h1> */}
          <h3 className="text-sm text-gray-500 font-bold flex items-center justify-center gap-2 ">
            <List className="w-4 h-4 text-primary" />
            <span>{product.category.name}</span>
          </h3>
          <p className="text-lg font-bold mt-2 text-black mb-4">
            ${product.price}
          </p>
          <div className="text-black flex justify-between text-xs mb-2">
            <p className="text-left text-gray-500">Selected Size</p>
            <p className="text-left hover:text-gray-500 cursor-pointer hover:underline transition">
              Size Guide
            </p>
          </div>

          {product.Sizes &&
          Array.isArray(product.Sizes) &&
          product.Sizes.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-2 border bg-gray-200">
              {product.Sizes.map((size) => (
                <div
                  key={size.name}
                  className={`cursor-pointer border rounded-lg transition-colors duration-200 p-4 px-5 text-sm hover:bg-slate-300 hover:text-black
                    ${
                      selectedSize === size.name
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  onClick={() => handleSizeClick(size.name)}
                >
                  {size.name}
                </div>
              ))}
            </div>
          ) : (
            <div>No sizes available</div>
          )}
          <div className="mt-10">
            {product.Colors &&
            Array.isArray(product.Colors) &&
            product.Colors.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-2 border bg-gray-200 text-[12px]">
                {product.Colors.map((color) => (
                  <div
                    key={color.name}
                    className={`cursor-pointer border rounded-lg transition-colors duration-200 p-3 py-4 text-sm hover:bg-slate-300 hover:text-black
                    ${
                      selectedColor === color.name
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleColorClick(color.name)}
                  >
                    {color.name}
                  </div>
                ))}
              </div>
            ) : (
              <div>No Colors available</div>
            )}
          </div>

          <button
            className="flex justify-center mt-8 gap-2 bg-black p-4 rounded-3xl hover:bg-light transition duration-400 hover:text-black hover:drop-shadow-md"
            onClick={()=>handleAddToCart()}
          >
            <ShoppingCart />
            Add To Cart
          </button>
        </>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
}

export default ProductInfo;
