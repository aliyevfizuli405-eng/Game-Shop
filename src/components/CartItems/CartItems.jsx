
import React, { useContext } from "react";
import { CartItem } from "./CartItem.jsx/CartItem";
import { ShopCartContext } from "@/contexts/ShopCartContext";

export const CartItems = () => {
  const { shopCartItems, setShopCartItems } =
    useContext(ShopCartContext);

  const increaseQuantity = (id) => {
    setShopCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
              totalPrice: (item.count + 1) * item.price,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setShopCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.count > 1
          ? {
              ...item,
              count: item.count - 1,
              totalPrice: (item.count - 1) * item.price,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setShopCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {shopCartItems.length > 0 &&
        shopCartItems.map((item) => (
          <CartItem
            key={item.id}
            coverImage={item.coverImage}
            title={item.title}
            price={item.price}
            count={item.count}
            totalPrice={item.totalPrice}
            onIncrease={() => increaseQuantity(item.id)}
            onDecrease={() => decreaseQuantity(item.id)}
            onRemove={() => removeItem(item.id)}
          />
        ))}
    </div>
  );
};
