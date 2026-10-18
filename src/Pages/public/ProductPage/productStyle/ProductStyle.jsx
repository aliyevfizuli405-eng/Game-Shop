import { ProductHerobg } from "../productHerobg/ProductHerobg";
import { SwiperProduct } from "../swiperProduct/SwiperProduct";
import { GameInfo } from "../gameinfo/GameInfo";
import { GameContext } from "../ProductPage";
import { useContext } from "react";

export const ProductStyle = ({game}) => {
  return (
    <>
      <ProductHerobg game={game} />
      <main className="container-md bg-[#080325]">
        <SwiperProduct />
        <GameInfo game={game} />
      </main>
    </>
  );
};