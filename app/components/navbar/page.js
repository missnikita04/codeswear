"use client";

import React, { useRef, useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose, IoBagCheck } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { motion } from "framer-motion";
import { CartContext } from "../../../app/context/cartContext/page";
import toast from "react-hot-toast";

const Navbar = () => {
  const { cart, addToCart, removeFromCart, clearCart, subTotal } =
    useContext(CartContext);

  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const cartCount = Object.keys(cart).length;

  const toggleCart = () => {
    if (!ref.current) return;
    ref.current.classList.toggle("translate-x-full");
    ref.current.classList.toggle("translate-x-0");
  };

  // OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        ref.current.classList.add("translate-x-full");
        ref.current.classList.remove("translate-x-0");
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // ADD TO CART + TOAST WRAPPER
  const handleAdd = (...args) => {
    addToCart(...args);
    toast.success("Item added to cart 🛒");
  };
    // ADD TO CART + TOAST WRAPPER
  const handleRemove = (...args) => {
    removeFromCart(...args);
    toast.success("Item removed from cart 🛒");
  };



  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 gap-4">

        {/* LOGO */}
        <Link href="/">
          <Image src="/images/logo.jpeg" width={80} height={30} alt="logo img" />
        </Link>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="hidden md:block w-1/3 border rounded-xl px-3 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
        />

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-5 font-semibold">
          <Link href="/tshirt">Tshirts</Link>
          <Link href="/hoodies">Hoodies</Link>
          <Link href="/mugs">Mugs</Link>
        </div>

        {/* CART ICON */}
        <div onClick={toggleCart} className="relative cursor-pointer">
          <FaShoppingCart className="text-2xl text-pink-500" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* CART DRAWER */}
      <motion.div
        ref={ref}
        className="fixed top-0 right-0 h-full w-full sm:w-96 bg-pink-50 p-5 z-50 shadow-2xl flex flex-col translate-x-full transition-transform"
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">Your Cart</h2>
          <button onClick={toggleCart}>
            <IoClose className="text-2xl text-pink-600" />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto space-y-3">

          {cartCount === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Cart is empty 🛒
            </p>
          ) : (
            Object.keys(cart).map((k) => (
              <div
                key={k}
                className="flex justify-between items-center bg-white p-2 rounded-lg"
              >
                <div>{cart[k].name}</div>

                <div className="flex items-center gap-2 text-pink-600">

                  <CiCircleMinus
                    onClick={() =>
                      handleRemove(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      )
                    }
                    className="cursor-pointer"
                  />

                  <span>{cart[k].qty}</span>

                  <CiCirclePlus
                    onClick={() => {
                      handleAdd(
                        k,
                        1,
                        cart[k].price,
                        cart[k].name,
                        cart[k].size,
                        cart[k].variant
                      );
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t pt-4">

          <div className="flex justify-between font-semibold mb-3">
            <span>Total</span>
            <span>₹{subTotal}</span>
          </div>

          {/* CHECKOUT */}
          <Link href="/checkout">
            <button
              onClick={toggleCart}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <IoBagCheck />
              Checkout
            </button>
          </Link>

          {/* CLEAR */}
          <button
            onClick={() => {
              clearCart();
              toast.success("Cart cleared 🧹");
            }}
            className="w-full mt-2 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white py-2 rounded-xl"
          >
            Clear Cart
          </button>

        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;