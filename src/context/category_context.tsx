import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments} from "../utils/firebase/firebase_utils"

export interface Product{
    id: number
    name: string
    price: number
    imageUrl: string
}

export interface Category {
    [key: string]: Product[]
    
}

interface ProductContextProps {
    categoriesMap: Category;
}

export const CategoryContext = createContext({} as ProductContextProps);


interface ProductProviderProps {
    children: React.ReactNode;
}




export const CategoryProvider = ({ children }: ProductProviderProps) => {

    const [categories, setCategories] = useState<Category>({});

    useEffect(() => {
        const getProducts = async () => {
            const categoriesDoc = await getCategoriesAndDocuments();
            setCategories(categoriesDoc);
            
        }

        getProducts();
    }, [])
    

    return (
        <CategoryContext.Provider value={{
            categoriesMap: categories
        }}>
            {children}
        </CategoryContext.Provider>
    );
}
