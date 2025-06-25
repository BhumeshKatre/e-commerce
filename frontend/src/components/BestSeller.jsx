import React from "react";
import Title from './Title'
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";
const BestSeller = () => {
  return (
    <>
      <div className="py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <div className="text-center text-gray-400 w-10/12  mx-auto">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic repellat saepe eius incidunt?
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-6 ">
        {products.splice(0,5).map((item, indx) => (
          <ProductItem
            key={indx}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default BestSeller;
