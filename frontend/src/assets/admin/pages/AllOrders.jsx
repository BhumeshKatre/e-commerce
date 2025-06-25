import React from 'react';
import Title from '../../../components/Title';
import { products } from '../../frontend_assets/assets';

const AllOrders = () => {
  return (
    <div className="py-5">
      <Title text1="OUR" text2="ORDERS" />
      <div className="py-5">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b border-gray-300">Image</th>
              <th className="py-2 px-4 border-b border-gray-300">Description</th>
              <th className="py-2 px-4 border-b border-gray-300">Payment</th>
              <th className="py-2 px-4 border-b border-gray-300">Price</th>
              <th className="py-2 px-4 border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, indx) => (
              <tr key={indx} className="text-center border-b border-gray-200">
                <td className="py-2 px-4">
                  <img src={item.image} alt={item.name} className="h-12 w-12 object-cover mx-auto" />
                </td>
                <td className="py-2 px-4 text-start">
                  <div>{item.name}</div>
                  <div className="text-sm text-gray-500">Size: {item.sizes?.[0]}</div>
                </td>
                <td className="py-2 px-4 text-start">
                  <div className="font-semibold">{item.user?.name || "User Name"}</div>
                  <div className="text-sm text-gray-500">Phone: {item.user?.phone || "Number"}</div>
                  <div className="text-xs text-gray-400">Address: {item.user?.address || "Address"}</div>
                </td>
                <td className="py-2 px-4 text-start">
                  <div className='text-sm'> paymentMethod :{item.paymentMethod || "N/A"}</div>
                  <div className="text-sm text-gray-500"> orderDate :{item.orderDate || "Date"}</div>
                  <div className="text-xs">Qty: {item.quantity || 1}</div>
                </td>
                <td className="py-2 px-4">
                  ${item.price}
                </td>
                <td className="py-2 px-4">
                  <select className="border border-gray-300 rounded px-2 py-1">
                    <option>Pending</option>
                    <option>Shipped</option>
                    <option>Out of Delivery</option>
                    <option>Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default AllOrders;
