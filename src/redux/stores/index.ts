import { combineReducers } from "redux";
import { categoriesReducer } from "./category";
import { userReducer } from "./user";


export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer
})