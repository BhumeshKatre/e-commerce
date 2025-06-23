import React from 'react';

const Title = ({text1,text2}) => {
  return (
    <div className='flex flex-col justify-center items-center py-2 '>
      <p className='text-4xl text-gray-400 p-2 font-semibold '>{text1} <span className='text-black '>{text2}</span></p>
      <hr  className='w-3/12 border-none h-1 bg-gray-500 '/>
    </div>
  );
}

export default Title;
