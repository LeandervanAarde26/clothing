import { USER_TYPE } from "./user.types";


const Initial_state = {
    currentUser: null
}

export const userReducer = (state = Initial_state , action) =>{
    const {type, payload} = action;
    switch(type) {
        case USER_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default: 
            return state; 
    }
}