import React from "react";
import Title from './Title'
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  return (
    <>
      <div className="py-8">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <div className="text-center text-gray-400 w-10/12  mx-auto">
          <p>
            Discover the newest arrivals in our e-commerce store. Shop the
            latest trends in fashion, electronics, and more. Enjoy exclusive
            deals and fast delivery on all your favorite products!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-6 ">
        {products
          .slice(0, 10)
          .map((item, indx) => (
            <ProductItem
              key={item._id || indx}
              name={item.name}
              image={item.image}
              price={item.price}
              _id={item._id }
            />
          ))}
      </div>
    </>
  );
};

export default LatestCollection;
