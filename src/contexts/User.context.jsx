import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";
import { createUserAuth } from "../utils/firebase/firebase.utils";
//This is the actual value that you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

});

export const USER_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) =>{
    const {type, payload} = action;
    switch(type) {
        case USER_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default: 
            throw new Error (`Error in ${type} found in userReducer`)
    }
}

const Initial_state = {
    currentUser: null
}

export const UserProvider = ({children}) =>{
    const [ {currentUser}, dispatch] = useReducer(userReducer, Initial_state);

    const setCurrentUser = (user) =>{
        dispatch({type: USER_TYPE.SET_CURRENT_USER, payload: user});
    
    }

    // const [currentUser, setCurrentUser] = useState(null);
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