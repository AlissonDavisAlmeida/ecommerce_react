import { CartItemProps } from "../../../components/cartItem/cartItem";
import { Product } from "../../../components/category/category_interfaces";
import { CartActionTypes } from "./cart_types";


export const setIsCartOpen = (isCartOpen: boolean) => ({
    type: CartActionTypes.SET_IS_CART_OPEN,
    payload: isCartOpen
})


const addCartItem = (cartItems: CartItemProps[], productToAdd: Product) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItemProps[], cartItemToRemove: Product) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem?.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems: CartItemProps[], cartItemToClear: Product) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const addItemToCart = (cartItems: CartItemProps[], item: Product) => {

    const newCartItens = addCartItem(cartItems, item)

    return {
        type: CartActionTypes.SET_CART_ITENS,
        payload: newCartItens
    }

}

export const decreaseItemFromCart = (cartItens: CartItemProps[], item: Product) => {
    const newCartItens = removeCartItem(cartItens, item)

    return {
        type: CartActionTypes.SET_CART_ITENS,
        payload: newCartItens
    }
}

export const removeItemFromCart = (cartItems: CartItemProps[], cartItemToClear: Product) => {
    const newCartItens = clearCartItem(cartItems, cartItemToClear)

    return {
        type: CartActionTypes.SET_CART_ITENS,
        payload: newCartItens
    }
}

