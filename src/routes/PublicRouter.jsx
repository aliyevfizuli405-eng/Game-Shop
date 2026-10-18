import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "@/Pages/public/HomePage/HomePage";
import { Layout } from "@/components/Layout/Layout";
import {  DarkPage } from "@/Pages/public/DarkPage/DarkPage";
import { ProductPage } from "@/Pages/public/ProductPage/ProductPage";

export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dark" element={<DarkPage/>}></Route>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
