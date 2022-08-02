import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user_types";

export const setCurrentUser = (user: User)=>{
    return {
        type: USER_ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    }
}