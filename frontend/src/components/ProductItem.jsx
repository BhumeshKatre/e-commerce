import React from "react";
import {Link } from 'react-router-dom'

const ProductItem = ({ _id, image, name, price }) => {

  return (
    <Link to={`/products/${_id}`} className="text-gray-400 cursor-pointer ">
      <div className="overflow-hidden">
        <img
          src={image[0]}
        className="hover:scale-110 transition ease-in-out"
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm ">{name}</p>
      <p className="text-sm font-medium">{price}</p>
    </Link>
  );
};

export default ProductItem;
