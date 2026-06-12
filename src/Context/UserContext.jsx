import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null)


export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const isAuthenticated = Boolean(user)
    return (
        <UserContext.Provider value={{user, isAuthenticated, setUser}}>{props.children}</UserContext.Provider>
    )
} 