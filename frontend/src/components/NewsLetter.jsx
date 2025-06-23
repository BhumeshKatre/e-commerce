import React from 'react';

const NewsLetter = () => {
  return (
    <div className='text-center py-10 px-5 '>
      <p className='text-2xl font-semibold mb-3'>Subscribe now & get 20% off</p>
      <p className='mb-3'> Sign up for our newsletter to receive exclusive offers, updates, and more!</p>
      <form className="mt-4 flex justify-center" >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-5/12 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className=" bg-black border border-gray-300 text-white px-6 py-3 hover:bg-gray-100  hover:text-black   transition">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
