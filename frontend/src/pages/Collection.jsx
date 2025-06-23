import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "../components/ProductItem";
import { use } from "react";

const Collection = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, SetCategory] = useState("all");
  const [subCategory, SetSubCategory] = useState("all");
  const [sortBy , setSortBy] = useState('default')

  const toggleCategory = (e) => {
    const selected = e.target.value;
    SetCategory(selected);
  };

  const toggleSubCategory = (e) => {
    const selected = e.target.value;
    SetSubCategory(selected);
  };

  const toggleSortBy = (e)=>{
    const selected = e.target.value;
    setSortBy(selected);
  }


  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    let sortedProducts = filterProducts;
    if (sortBy === 'price-low-high') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
    } else if(sortBy === 'price-high-low'){
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    setFilterProducts(sortedProducts)
  }, [sortBy]);
  

  useEffect(() => {
    let filtered = products;
    if (category &&  category !== "all") {
      filtered = filtered.filter((item) => item.category.toLowerCase() === category.toLowerCase());
    }
 
    if (subCategory && subCategory !== 'all'){
      filtered = filtered.filter(item => item.subCategory.toLowerCase() === subCategory.toLowerCase());
    }
 
    setFilterProducts(filtered);
  }, [category, subCategory]);

  return (
    <div className="pt-10 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <Title text1="ALL" text2="COLLECTION" />
        {/* Filter & Sort Box */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {/* Sort Box */}
          <div className="border p-1 border-gray-200 flex items-center bg-white rounded sm:w-48">
            <p className="font-semibold text-sm w-20">Sort-by</p>
            <select
              onChange={toggleSortBy}
              className="border-none rounded py-1 ml-2 outline-none text-sm bg-transparent w-full">
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          {/* Filter by Category */}
          <div className="border p-2 border-gray-200 flex items-center bg-white rounded">
            <p className="font-semibold text-sm">Category:</p>
            <select
              onChange={toggleCategory}
              className="border-none rounded py-1 ml-2 outline-none text-sm bg-transparent w-full"
            >
              <option value="all">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          {/* Filter by Type */}
          <div className="border p-2 border-gray-200 flex items-center bg-white rounded">
            <p className="font-semibold text-sm">Type:</p>
            <select
              onChange={toggleSubCategory}
              className="border-none rounded py-1 ml-2 outline-none text-sm bg-transparent w-full"
            >
              <option value="all">All</option>
              <option value="topwear">Topwear</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
        </div>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5">
        {filterProducts.map((item, indx) => (
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
  );
};

export default Collection;
