import { createSelector } from "reselect"
import { CartItemProps } from "../../../components/cartItem/cartItem"


const selectCartReducer = (state: any) => state.cart


export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumalatedQuantity: any, cartItem: CartItemProps) => accumalatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumalatedQuantity: any, cartItem: CartItemProps) =>
                                 accumalatedQuantity + cartItem.quantity * cartItem.price, 0)

)