import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
const Products = () => {
  const { allProducts, addToCart } = useAuth();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [selectSize , setSelectSize]  = useState('S')


  const handleSelectSize = (size) => {
   setSelectSize(size)
 }

  useEffect(() => {
    if (allProducts?.length) {
      const product = allProducts.find((item) => item._id === id);
      setSelectedProduct(product || null);

      if (product) {
        const relProducts = allProducts.filter(
          (item) => item.subCategory === product.subCategory
        );
        setRelatedProduct(relProducts);
      } else {
        setRelatedProduct([]);
      }
    }
  }, [id, allProducts]);

  return (
    <div className="pt-10">
      <div className="flex flex-col md:flex-row gap-4 border-b border-gray-400 py-4 ">
        {/* image section */}
        <div className="flex gap-2 w-full md:w-1/2">
          <div className="flex flex-row md:flex-col gap-2 w-24 md:w-24">
            {selectedProduct?.image?.map((img, idx) => (
              <React.Fragment key={idx}>
                <img
                  src={img}
                  onClick={() => setImgUrl(img)}
                  className="w-16 h-16 md:w-full md:h-24 object-cover rounded cursor-pointer border border-gray-200 hover:border-black transition"
                  alt={`Product thumbnail ${idx + 1}`}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <img
              src={imgUrl ? imgUrl : selectedProduct?.image[0]}
              alt={selectedProduct?.name}
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* description section */}
        <div className="w-full md:w-[40%] flex flex-col gap-4 mt-6 md:mt-0">
          <p className="font-semibold text-2xl">{selectedProduct?.name}</p>

          {/* Example stars rendering */}
          <div className="flex items-center gap-1 mb-3 text-yellow-500 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
            <span className="text-black"> (233)</span>
          </div>

          <p className="text-xl font-bold">
            ₹{Number(selectedProduct?.price).toLocaleString("en-IN")}
          </p>

          <p className="text-gray-500">{selectedProduct?.description}</p>
          <div className="p-2">
            <p className="font-semibold text-lg mb-2">Select size</p>

            <div className="flex gap-2 p-2 mb-4 flex-wrap">
              {selectedProduct?.sizes?.map((size) => (
                <button
                  onClick={()=> handleSelectSize(size)}
                  key={size}
                  className="bg-gray-300 w-10 h-10 flex items-center justify-center rounded hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="p-3 border-b border-gray-300">
              <button
                onClick={()=> addToCart(selectedProduct,selectSize)}
                className="mb-4 w-full bg-black border border-gray-300 text-white px-6 py-3 hover:bg-gray-100 hover:text-black transition rounded">
                ADD TO CART
              </button>
            </div>
            <div className="py-1 text-gray-500 text-sm">
              <p>Enjoy the following benefits:</p>
              <ul className="list-disc list-inside">
                <li>Free shipping on orders over ₹500</li>
                <li>Easy 7-day return policy</li>
                <li>Secure payment options</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {relatedProduct && (
        <div className="py-8  border-b border-gray-400 ">
          <Title text1={"RELATED"} text2={"COLLECTION"} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5">
            {relatedProduct.slice(0,5).map((item, indx) => (
              <ProductItem
                key={indx}
                _id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      )}

      <div className="py-5">
        <OurPolicy />
        <NewsLetter />
      </div>
    </div>
  );
};

export default Products;
