import React from "react";
import Title from "../components/Title";
import { useAuth } from "../context/AuthContext";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cartItem, allProducts, handleProceedBtn } = useAuth();
  const subtotal = allProducts.slice(0,4).reduce((sum, item) => sum + item.price,0);
  const shippingCharge = 10;
  return (
    <section className="py-10">
      <Title text1={"YOUR"} text2={"CART"} />
      <div className="px-2 sm:px-5 py-6 mt-8 border border-gray-400 rounded-md bg-white">
        {allProducts.slice(0, 4).map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full md:flex-row  gap-4 py-4 border-b border-gray-200"
          >
            {/* Product Image & Name */}
            <div className="flex gap-4 md:w-[50%]  ">
              <img
                src={item.image[0]}
                className="w-20 h-20 object-cover rounded"
                alt=""
              />
              <div>
                <p className="text-md font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  size : {item.selectSize || "S"}
                </p>
              </div>
            </div>

            {/* Quantity, Price, Delete */}
            <div className="flex flex-row md:flex-row items-center gap- md:gap-8 md:w-[50%] justify-between  ">
              <input
                className="w-16 border border-gray-200 text-center outline-none rounded"
                type="number"
                min={1}
                defaultValue={1}
              />
              <div className="font-semibold">${item.price}</div>
              <MdDelete
                className="text-gray-500 cursor-pointer hover:text-red-500"
                size={24}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end   p-8">
        <div className="w-90  p-4 ">
          <h1 className="text-xl mb-2  font-semibold ">Cart Total</h1>
          <div>
            <div className="flex
               justify-between border-b border-gray-200 py-2">
              <p className="text-sm"> Subtotal  </p>
              <p className="font-bold">${subtotal}  </p>
            </div>
            <div className="flex
               justify-between border-b border-gray-200 py-2">
              <p className="text-sm ">Shipping Fee </p>
              <p className="font-bold"> ${shippingCharge}  </p>
            </div>
            <div className="flex
               justify-between border-b border-gray-200 py-2">
              <p className="text-lg font-bold ">Total </p>
              <p className="font-bold">${shippingCharge + subtotal}  </p>
            </div>
          </div>


          <div className="flex justify-end py-3 ">
            <button
              onClick={()=>handleProceedBtn(subtotal, shippingCharge)}
              type="submit"
              className=" bg-black border border-gray-300 text-white px-6 py-3 hover:bg-gray-100  hover:text-black   transition">
              Proceed to Continue
            </button>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Cart;
