const CheckOutInfo = ({ subtotal, shippingCharge,  }) => {
  return (
    <div className="flex justify-end p-8">
      <div className="w-90 p-4">
        <h1 className="text-xl mb-2 font-semibold">Cart Total</h1>
        <div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <p className="text-sm">Subtotal</p>
            <p className="font-bold">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <p className="text-sm">Shipping Fee</p>
            <p className="font-bold">${shippingCharge.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-b border-gray-200 py-2">
            <p className="text-lg font-bold">Total</p>
            <p className="font-bold">${(subtotal + shippingCharge).toFixed(2)}</p>
          </div>
        </div>

        <div className="flex justify-end py-3">
          <button
            onClick={onProceed}
            className="bg-black border border-gray-300 text-white px-6 py-3 hover:bg-gray-100 hover:text-black transition"
          >
            Proceed to Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutInfo;
