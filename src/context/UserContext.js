import {useState, createContext}  from "react";

export const UserContext = createContext(null)

export const UserContextProvider = ({children}) => {
    
    const [userInfo, setUserInfo] = useState([]);
    const [isAuth, setIsAuth] = useState(false);

    return <UserContext.Provider value={{userInfo, setUserInfo, isAuth, setIsAuth}}>
        {children}
    </UserContext.Provider>
}