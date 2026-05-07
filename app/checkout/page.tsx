"use client";

import React, { useContext } from "react";
import { CartContext } from "../../app/context/cartContext/page";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoBagCheck } from "react-icons/io5";

const Checkout = () => {
  const { cart, addToCart, removeFromCart, subTotal } =
    useContext(CartContext);

  const hasItems = Object.keys(cart).length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Checkout
          </h1>

          {/* DELIVERY FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
            <h2 className="font-semibold text-lg text-gray-700">
              1. Delivery Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Email" />
              <input className="input md:col-span-2" placeholder="Address" />
              <input className="input" placeholder="Phone" />
              <input className="input" placeholder="City" />
              <input className="input" placeholder="State" />
              <input className="input" placeholder="Pincode" />
            </div>
          </div>

          {/* CART ITEMS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold text-lg text-gray-700 mb-4">
              2. Review Cart Items
            </h2>

            {!hasItems ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-3">🛒</div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Your cart is empty
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Add items to proceed to checkout
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.keys(cart).map((k) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    {/* NAME */}
                    <div className="font-medium text-gray-700">
                      {cart[k].name}
                    </div>

                    {/* QTY CONTROL */}
                    <div className="flex items-center gap-3 text-pink-600">
                      <CiCircleMinus
                        className="cursor-pointer hover:scale-110 transition"
                        onClick={() =>
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                      />

                      <span className="font-semibold">
                        {cart[k].qty}
                      </span>

                      <CiCirclePlus
                        className="cursor-pointer hover:scale-110 transition"
                        onClick={() =>
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-md lg:sticky lg:top-24">

            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹{subTotal}</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-3">
              <span>Total</span>
              <span>₹{subTotal}</span>
            </div>

            <button
              disabled={!hasItems}
              className={`w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold shadow-md transition active:scale-95
              ${
                hasItems
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <IoBagCheck />
              Pay ₹{subTotal}
            </button>
          </div>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          outline: none;
          transition: 0.2s;
        }

        .input:focus {
          border-color: #ec4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Checkout;