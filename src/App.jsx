import React from "react";
import { SearchProvider } from "@/contexts/SearchContext";
import { ShopCartContext, ShopCartProvider } from "./contexts/ShopCartContext";
import { PublicRouter } from "./routes/PublicRouter";
import "./App.css";

export const App = () => {
  return (
   <SearchProvider>
    <ShopCartProvider>
      <PublicRouter/>
    </ShopCartProvider>
   </SearchProvider>
  );
};
