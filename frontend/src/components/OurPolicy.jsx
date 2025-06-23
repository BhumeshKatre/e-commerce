import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div className='md:flex justify-between text-gray-400 items-center p-8  '>
      < div className='text-center ' >
        <img
          src={assets.exchange_icon}
          alt="exchange_icon"
          className='mx-auto w-12 mb-4 '/>
        <p className='font-medium text-black'>Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>

      < div className='text-center py-8 ' >
        <img
          src={assets.quality_icon}
          alt="exchange_icon"
          className='mx-auto w-12 mb-4 ' />
        <p className='font-medium text-black'>7 Days Return Policy</p>
        <p>We provide 7 days free return policy</p>
      </div>

      < div className='text-center ' >
        <img
          src={assets.support_img}
          alt="exchange_icon"
          className='mx-auto w-12 mb-4 ' />
        <p className='font-medium text-black'>Best customer support</p>
        <p>we provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy;
