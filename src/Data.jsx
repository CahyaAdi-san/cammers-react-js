import React from "react";
import Products from "./Products";

const Data = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="product-section bg-slate-50 pt-[50px] pb-[100px]" id="content">
      <div className="mx-[100px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <Products image={`/chair.jpeg`} title={"Chair"} price={"$50"} />
        <Products image={`/chair.jpeg`} title={"Table"} price={"$70"} />
        <Products image={`/chair.jpeg`} title={"Bed"} price={"$200"} />
        <Products image={`/chair.jpeg`} title={"Lamp"} price={"$30"} />
        <Products image={`/chair.jpeg`} title={"Lamp"} price={"$30"} />
        <Products image={`/chair.jpeg`} title={"Lamp"} price={"$30"} />
        <Products image={`/chair.jpeg`} title={"Lamp"} price={"$30"} />
        <Products image={`/chair.jpeg`} title={"Lamp"} price={"$30"} />
      </div>
    </div>
  );
});

export default Data;
