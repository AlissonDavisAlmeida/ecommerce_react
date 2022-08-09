import { AnyAction } from "redux";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase_utils";
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

export const fetchCategoriesAsync = () => async (dispatch: any) => {

    try{
        dispatch(fetchCategoriesStart())
        const categories = await getCategoriesAndDocuments();
        
        dispatch(fetchCategoriesSuccess(categories))
    }catch(err: any){
        dispatch(fetchCategoriesError(err.message))
    }
}