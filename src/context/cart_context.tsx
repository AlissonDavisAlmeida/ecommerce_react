import { createContext, useState } from "react";


interface CartContextProps {
    isCartOpen: boolean;
    toogleCart: () => void;
}


export const CartContext = createContext({} as CartContextProps)


interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {

    const [isCartOpen, setIsCartOpen] = useState(false)

    const toogleCart = () => {
        setIsCartOpen(prevState => !prevState)
    }


    return (
        <CartContext.Provider value={{
            isCartOpen,
            toogleCart
        }}>
            {children}
        </CartContext.Provider>
    )

}