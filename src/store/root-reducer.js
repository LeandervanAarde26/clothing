import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { USER_TYPE } from "./user/user.types";

export const rootReducer = combineReducers({
    currentUser: userReducer, 
})