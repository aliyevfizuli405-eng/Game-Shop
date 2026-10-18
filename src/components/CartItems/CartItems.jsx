import React from "react";
import { CartItem } from "./CartItem.jsx/CartItem";
import { useContext, useState } from "react";
import { ShopCartContext } from "@/contexts/ShopCartContext";
export const CartItems = () => {
  const { shopCartItems } = useContext(ShopCartContext); 
  return (
  <>
    {
      shopCartItems.map(yevlax=><CartItem coverImage={yevlax.coverImage} title={yevlax.title} price={yevlax.price}/>)
    }
  </>)
};
