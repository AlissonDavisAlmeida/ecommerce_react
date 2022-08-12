import { CategoryActionTypes } from "./category_types";


export const fetchCategoriesStart = () => {
    
    return {
        type: CategoryActionTypes.FET_CATEGORIES_START
    }
}

export const fetchCategoriesError = (error: string) => {
    return {
        type: CategoryActionTypes.FET_CATEGORIES_ERROR,
        payload: error
    }
}

export const fetchCategoriesSuccess = (categories: any) => {
    return {

        type: CategoryActionTypes.FET_CATEGORIES_SUCCESS,
        payload: categories
    }
}
