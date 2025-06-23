import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  return (
    <div className="border border-gray-400 mt-2 md:flex bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left Side: Text Content */}
      <div className="md:w-[50%] flex flex-col justify-center items-start p-10 gap-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Discover the Best Products for You
        </h1>
        <p className="text-lg text-gray-600">
          Shop the latest trends and enjoy exclusive deals on your favorite items. Fast delivery and easy returns!
        </p>
        <button className="border border-gray-300 text-gray-700 px-6 py-3 hover:bg-gray-100    transition">
          Shop Now
        </button>
      </div>

      {/* Right Side: Hero Image */}
      <div className="md:w-[50%] flex justify-center items-center bg-gray-50">
        <img
          src={assets.hero_img}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
