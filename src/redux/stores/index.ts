import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { categoriesReducer } from "./category";
import { userReducer } from "./user";


export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer,
    cart: cartReducer
})