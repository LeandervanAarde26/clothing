import { USER_TYPE } from "./user.types";
import { createAction } from "../../utils/firebase/Reducer/Reducer.utils";

export const setCurrentUser = (user) =>
    createAction(USER_TYPE.SET_CURRENT_USER,user);
