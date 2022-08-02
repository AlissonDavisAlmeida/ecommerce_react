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