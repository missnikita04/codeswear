"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
        saveCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
   
  }, []);

  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));

    let subt = 0;
    for (let key in newCart) {
      subt += newCart[key].price * newCart[key].qty;
    }

    setSubTotal(subt);
    setCart(newCart);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };

    if (itemCode in newCart) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = {
        qty,
        price,
        name,
        size,
        variant,
      };
    }

    saveCart(newCart);
  };

  const removeFromCart = (itemCode,qty,price,name,size,variant) => {
    let newCart=cart;
    if(itemCode in newCart){
        newCart[itemCode].qty=cart[itemCode].qty-qty;

    }
    console.log(newCart);
    if(newCart[itemCode]["qty"]<=0){
        delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  }
   

  const clearCart = () => {
    saveCart({});
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotal,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};