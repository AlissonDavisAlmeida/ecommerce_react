import { createContext, useState } from "react";
import { CartItemProps } from "../components/cartItem/cartItem";
import {Product} from "./product_context"


interface CartContextProps {
    isCartOpen: boolean;
    toogleCart: () => void;
    cartItems: CartItemProps[];
    addItemToCart: (item: Product) => void;
    totalQuantity: number;
    closeDropDown: () => void;
    decreaseItemFromCart: (item: Product ) => void;
}


export const CartContext = createContext({} as CartContextProps)


interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItemProps[]>([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    const toogleCart = () => {
        setIsCartOpen(prevState => !prevState)
    }

    const addItemToCart = (item: Product) => {
       
        const itemAlreadyInCart = cartItems.find(cartItem => cartItem.name === item.name)

        if (itemAlreadyInCart) {
            setCartItems(prevState => prevState.map(cartItem => cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
        } else {
            setCartItems([...cartItems, { id: item.id,name: item.name, quantity: 1, imageUrl: item.imageUrl, price: item.price }])
        }

        setTotalQuantity(prevState => prevState + 1)
        
    }

    const decreaseItemFromCart = (item: Product) => {
        const itemToRemove = cartItems.find(cartItem => cartItem.name === item.name)

        if(itemToRemove!.quantity > 1){
            setCartItems(prevState => prevState.map(cartItem => cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
        }
        else{
            setCartItems(prevState => prevState.filter(cartItem => cartItem.name !== item.name))
        }

        setTotalQuantity(prevState => prevState - 1)
    }

    const closeDropDown = () => {
        setIsCartOpen(false)
    }

    return (
        <CartContext.Provider value={{
            decreaseItemFromCart,
            totalQuantity,
            isCartOpen,
            toogleCart,
            cartItems,
            closeDropDown,
            addItemToCart
        }}>
            {children}
        </CartContext.Provider>
    )

}