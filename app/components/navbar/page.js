"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoBagCheck } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../../app/context/cartContext/page";
const Navbar = () => {
const {cart,addToCart, removeFromCart,clearCart,subTotal} = useContext(CartContext);
console.log(cart,subTotal);
  const ref = useRef(null);

  const toggleCart = () => {
    if (!ref.current) return;

    const el = ref.current;

    // open/close logic
    if (el.classList.contains("translate-x-full")) {
      el.classList.remove("translate-x-full");
      el.classList.add("translate-x-0");
    } else {
      el.classList.remove("translate-x-0");
      el.classList.add("translate-x-full");
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="flex md:flex-row md:justify-start justify-between items-center flex-col mb-1 py-2 shadow-md relative">

        {/* LOGO */}
        <div className="logo mx-5">
          <Link href="/">
            <Image
              src="/images/logo.jpeg"
              alt="logo img"
              width={80}
              height={30}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className="nav">
          <ul className="flex items-center space-x-4 font-semibold md:text-lg">
            <li><Link href="/tshirt">Tshirts</Link></li>
            <li><Link href="/hoodies">Hoodies</Link></li>
            <li><Link href="/stickers">Stickers</Link></li>
            <li><Link href="/mugs">Mugs</Link></li>
          </ul>
        </div>

        {/* CART ICON */}
        <div
          onClick={toggleCart}
          className="cart  right-0 mx-12 top-6 cursor-pointer"
        >
          <FaShoppingCart className="text-xl md:text-3xl text-pink-500" />
        </div>
      </div>

      {/* SIDEBAR CART */}
      <div
        ref={ref}
        className="fixed top-0 right-0 h-full w-80 bg-pink-100 p-6 transform translate-x-full transition-transform duration-300 z-50 shadow-2xl"
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-xl">Shopping Cart</h2>

          <button onClick={toggleCart} className="text-2xl text-pink-600">
            <IoClose />
          </button>
        </div>

<ol className="list-decimal space-y-4 font-semibold">
{Object.keys(cart).length === 0 && (
  <div className="my-6 text-center bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm">
    <h2 className="text-lg font-semibold text-pink-600">
      Your cart is empty
    </h2>
    <p className="text-sm text-gray-600 mt-2 italic">
      Please add a few items to continue to checkout.
    </p>
  </div>
)}
  {Object.keys(cart).map((k) => {
    return (
      <li key={k} className="flex items-center justify-between my-5" >
      
      {/* PRODUCT NAME */}
      <div className="w-2/3 font-semibold">
        {cart[k].name}
      </div>

    {/* QUANTITY CONTROLS */}
    <div className="w-1/3 flex items-center justify-center gap-3 text-lg text-pink-700">
      <CiCircleMinus onClick={()=>{ removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer hover:text-pink-900" />
      <span className="mx-2"> {cart[k].qty}</span>
      <CiCirclePlus onClick={()=>{ addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer hover:text-pink-900" />
    </div>

  </li>
 ) })}

</ol> 

  <div className="flex gap-3">
 <button
      className=" flex items-center justify-center px-8 py-3 mt-16 m-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-md transition-all duration-200 active:scale-95"
    >
      <IoBagCheck className="text-xl mx-1" />
      Check Out
    </button>
     <button
     onClick={clearCart}
      className=" flex items-center justify-center mt-16 px-12 py-3 m-auto bg-white hover:bg-pink-600 text-pink-500 hover:text-white font-semibold rounded-xl shadow-md transition-all duration-200 active:scale-95 "
    >
     
      Clear Cart
    </button></div>

     </div>
    </div>
  );
};

export default Navbar;