import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";
import { createUserAuth } from "../utils/firebase/firebase.utils";
//This is the actual value that you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

});

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() =>{
       const unsub = onAuthStateChangedListener((user) =>{
       if(user){
         createUserAuth(user)
       }
           setCurrentUser(user);
        })
        return unsub;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}