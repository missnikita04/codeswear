import React from "react";

const Order = () => {
  return (
    <section className="text-gray-700 body-font bg-gray-50 min-h-screen py-12">
      <div className="container px-5 mx-auto">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="lg:flex">
            
            {/* Left Section */}
            <div className="lg:w-1/2 w-full p-8 lg:p-12">
              <h2 className="text-sm font-semibold text-pink-500 tracking-widest uppercase mb-2">
                CodesWear.com
              </h2>

              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Order ID: #12727282
              </h1>

              <p className="text-green-600 font-medium mb-8">
                🎉 Your order has been successfully placed!
              </p>

              {/* Header */}
              <div className="grid grid-cols-3 border-b-2 border-pink-500 pb-3 mb-4 text-sm font-semibold text-pink-500 uppercase">
                <span>Item</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Total</span>
              </div>

              {/* Items */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 border-b pb-3">
                  <span>Wear the Code (XL/Black)</span>
                  <span className="text-center">1</span>
                  <span className="text-right font-medium">₹499</span>
                </div>

                <div className="grid grid-cols-3 border-b pb-3">
                  <span>Wear the Code (XL/Green)</span>
                  <span className="text-center">3</span>
                  <span className="text-right font-medium">₹1497</span>
                </div>

                <div className="grid grid-cols-3 border-b pb-3">
                  <span>Wear the Code (XL/Red)</span>
                  <span className="text-center">4</span>
                  <span className="text-right font-medium">₹1996</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mt-8 border-t pt-6">
                <span className="text-2xl font-bold text-gray-900">
                  Subtotal: ₹3992
                </span>

                <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-xl shadow-md transition duration-300">
                  Track Order
                </button>
              </div>

              {/* Wishlist Icon */}
              <div className="mt-6 flex justify-end">
                <button className="rounded-full w-12 h-12 bg-pink-100 hover:bg-pink-200 flex items-center justify-center text-pink-500 transition">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 w-full bg-pink-50 flex items-center justify-center p-8">
              <img
                alt="order"
                className="rounded-2xl shadow-lg object-cover w-full max-w-md"
                src="https://dummyimage.com/500x500/fce7f3/ec4899&text=Your+Order"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;