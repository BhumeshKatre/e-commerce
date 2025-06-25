import React from 'react';
import Title from '../../../components/Title';
import { products } from '../../frontend_assets/assets';
import ProductItem from '../../../components/ProductItem';

const ViewItem = () => {
  return (
    <div>
      <Title text1={'All'} text2={'Products'} />
      <div className='py-5 '>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-5">
          {products.map((item, indx) => (
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
    </div>
  );
}

export default ViewItem;
