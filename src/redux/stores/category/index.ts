import { AnyAction } from "redux"
import { CategoryActionTypes } from "./category_types"

export interface InitialState {
    isLoading: boolean;
    categories: any[];
    error: string | null;
}

const initialState: InitialState = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {
        case CategoryActionTypes.FET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isLoading: false
            }
        case CategoryActionTypes.FET_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            }
        case CategoryActionTypes.FET_CATEGORIES_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        default:
            return state
    }
}