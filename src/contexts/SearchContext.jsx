import {createContext,useState} from "react";

export const SearchContext = createContext();

export const SearchProvider=({children})=>{
    const [searched, setSearched] = useState(false);
    const [searchedText,setSearchedText] = useState("");  
    return(<SearchContext.Provider value={{searched,setSearched,searchedText,setSearchedText}}>{children}</SearchContext.Provider>)
}

