import { createContext,useState} from "react";

export const ShopCartContext = createContext();

export const ShopCartProvider = ({children})=>{
    const [shopCartItems,setShopCartItems]=useState([])
    return (<ShopCartContext.Provider value={{shopCartItems,setShopCartItems}}>{children}</ShopCartContext.Provider>)
}