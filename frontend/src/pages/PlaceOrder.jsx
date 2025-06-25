import React from 'react';
import { useAuth } from '../context/AuthContext';

const PlaceOrder = () => {
  const { checkoutInfo } = useAuth();
  const { subtotal, shippingCharge, total } = checkoutInfo;

  return (
    <section className="py-10 px-4 md:flex md:gap-8">
      <div className="flex-1  p-6 mb-8 md:mb-0 ">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Delivery Information</h1>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="firstName"
              placeholder="First name"
              required
            />
            <input
              className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="lastName"
              placeholder="Last name"
              required
            />
          </div>
          <input
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="emailId"
            placeholder="Email address"
            required
          />
          <input
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="street"
            placeholder="Street address"
            required
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="city"
              placeholder="City"
              required
            />
            <input
              className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="state"
              placeholder="State"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="zipcode"
              placeholder="Zip code"
              required
            />
            <input
              className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="country"
              placeholder="Country"
              required
            />
          </div>
          <input
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="phone"
            placeholder="Phone number"
            required
          />
        </form>
      </div>
      <div className="w-full md:w-96  p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Total</h2>
        <div className="space-y-3">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold text-gray-800">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-600">Shipping Fee</span>
            <span className="font-bold text-gray-800">${shippingCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="text-lg font-bold text-gray-800">Total</span>
            <span className="text-lg font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="flex sm:flex-col gap-3 mt-6">
          <label className="flex items-center gap-2">
            <input type="radio" name="paymentMethod" value="razorpay" />
            Razorpay
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="paymentMethod" value="cod" />
            Cash on Delivery
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-6 bg-black px-5 text-white font-semibold py-3 hover:bg-gray-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
