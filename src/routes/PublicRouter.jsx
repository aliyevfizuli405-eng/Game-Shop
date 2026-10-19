import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "@/Pages/public/HomePage/HomePage";
import { Layout } from "@/components/Layout/Layout";
import {  DarkPage } from "@/Pages/public/DarkPage/DarkPage";
import { ProductPage } from "@/Pages/public/ProductPage/ProductPage";
import { SearchedProducts } from "@/components/SearchedProducts/SearchedProducts";

export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dark" element={<DarkPage/>}></Route>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductPage/>}></Route>
          <Route path="/search" element={<SearchedProducts/>}></Route>
        </Route>
        <Route path="/search" element={<SearchedProducts/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
