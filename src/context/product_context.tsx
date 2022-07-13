import { createContext, useEffect, useState } from "react";
import product_data from "../db/shop-data.json"

export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface ProductContextProps {
    products: Product[];
}

export const ProductContext = createContext({} as ProductContextProps);


interface ProductProviderProps {
    children: React.ReactNode;
}


const initalState: Product[] = product_data



export const ProductProvider = ({ children }: ProductProviderProps) => {

    const [products, setProducts] = useState<Product[]>(initalState);

    useEffect(() => {
    }, [])
    

    return (
        <ProductContext.Provider value={{
            products
        }}>
            {children}
        </ProductContext.Provider>
    );
}
