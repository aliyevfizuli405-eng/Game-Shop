import { useParams } from "react-router";
import { useEffect, useState, createContext } from "react";
import { games } from "@/js/values";
import { ProductStyle } from "./productStyle/ProductStyle";

// Context


export const ProductPage = () => {
  const { id } = useParams();
  const game=(games.find((g) => String(g.id) == id) ?? games[0]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
   <ProductStyle game={game}/>
  );
};
