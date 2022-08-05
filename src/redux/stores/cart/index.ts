import { AnyAction } from "redux";
import { CartItemProps } from "../../../components/cartItem/cartItem";
import { Product } from "../../../components/category/category_interfaces";
import { CartActionTypes } from "./cart_types";

interface CartContextProps {
    isCartOpen: boolean;
    toogleCart?: () => void;
    cartItems: CartItemProps[];
    addItemToCart?: (item: Product) => void;
    closeDropDown?: () => void;
    decreaseItemFromCart?: (item: Product) => void;
    removeItemFromCart?: (id: number) => void;
}

const initialState: CartContextProps = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case CartActionTypes.SET_CART_ITENS:
            return {
                ...state,
                cartItems: action.payload
            }
        case CartActionTypes.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: action.payload
            }
        default:
            return state;
    }
}