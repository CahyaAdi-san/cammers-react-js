import React from "react";

const Products = ({ image, title, price }) => {
  return (
    <>
      <div className="border border-gray-300 rounded-lg mt-[50px] text-center pb-4 hover:transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl bg-white">
        <img src={image} alt="" className="rounded-t-lg" />
        <div className="data mx-4 flex justify-between mt-2">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p>{price}</p>
        </div>
        <button className="border border-black py-1 w-[90%] mt-4 rounded-md hover:bg-black hover:text-white">
            Add to Cart
        </button>
      </div>
    </>
  );
};

export default Products;
