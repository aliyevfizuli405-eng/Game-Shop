import {createContext,useState} from "react";

export const SearchContext = createContext();

export const SearchProvider=({children})=>{
    const [searched, setSearched] = useState(false);
    return(<SearchContext.Provider value={{searched,setSearched}}>{children}</SearchContext.Provider>)
}

