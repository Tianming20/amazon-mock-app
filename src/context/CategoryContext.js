import {useState, createContext}  from "react";

export const CategoryContext = createContext(null)

export const CategoryContextProvider = ({children}) => {
    
    const [category, setCategory] = useState("");

    return <CategoryContext.Provider value={{category, setCategory}}>
        {children}
    </CategoryContext.Provider>
}