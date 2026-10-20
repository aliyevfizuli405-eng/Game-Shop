import React, { useState, useContext } from "react";
import { Button2 } from "@components/Button/Button2/Button2";
import { ShopCartContext } from "@/contexts/ShopCartContext";

export const ProductHerobg = ({ game }) => {
  const [inputFizuli, setInputFizuli] = useState(false);
  const {shopCartItems}=useContext(ShopCartContext)
  const {setShopCartItems}=useContext(ShopCartContext)
  return (
    <div
      className="container-md h-[70vh] p-10 flex flex-col justify-center items-center md:items-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${game.bgImage}")`, padding: "40px" }}
    >
      <p className="text-[50px] font-medium text-center md:text-left  text-white">{game.title}</p>

      <p className="text-[22.5px] text-white mb-4 font-bold">{game.price}$</p>

      <div className="flex flex-col md:flex-row gap-5">
        <span
          onClick={() => {
            game.count++;
            console.log(game.count); 
            if(game.count==1)
              { 
            setShopCartItems((shopCartItems) => [...shopCartItems, game])
            game.totalPrice=game.price
            }
          else if(game.count>1){
            game.totalPrice=game.price*game.count;}
            console.log(Math.floor(game.totalPrice));
          }
        }
          
        >
          <Button2 text="Add to cart" />
        </span>

       
      </div>
    </div>
  );
};
