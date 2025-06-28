import React, { createContext, useEffect, useState } from 'react';
import all_product from './all_product';
// import Cartitem from './Cartitem';

export const Shopcontext = createContext(null);

// Creates initial cart object like: { 0: 0, 1: 0, ... }
const getDefaultCart = () => {
  let cart = {};
  // all_product.forEach(product => {
  //   cart[product.id] = 0;
  for (let index = 0; index<all_product.length;index++){
    cart[index] =0;
  }
  return cart;
};



export const ShopcontextProvider = (props) => {
const getInitialCart =() =>{
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : getDefaultCart();
}
  const [cartItem, setCartItem] = useState(getInitialCart());

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cartItem));
  },[cartItem])

  // ✅ Corrected addTocart function
  const addTocart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    // console.log("Cart updated:", cartItem);
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]:Math.max(prev[itemId] - 1, 0),
    }));
  }


  // ✅ Make sure to include addTocart and cartItem in context
  const removeFromCartAll = (itemId) =>{
    setCartItem((prev) => ({
    ...prev,
    [itemId]:0,
    }))
  }
  const getTotalCartItem = ()=>{
    let totalItems = "";
    for(const item in cartItem){
      if(cartItem[item]>0){
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  }

  const getTotalCartAmount =() =>{
    let totalAmount = 0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        let itemInfo = all_product.find((product)=>product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount
  }


  // ✅ Make sure to include addTocart and cartItem in context
  const contextValue = {
    all_product,
    cartItem,
    addTocart,
    removeFromCart,
    getTotalCartItem,
    getTotalCartAmount,
    removeFromCartAll

  };


  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};