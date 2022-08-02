import { AnyAction } from "redux"
import { CategoryActionTypes } from "./category_types"


const initialState = {
    categories:[]
}

export const categoriesReducer = (state =  initialState, action: AnyAction) =>{

    switch(action.type){
        case CategoryActionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case CategoryActionTypes.SET_CATEGORIES_TESTE:
            return{
                ...state
            }    

        default:
            return state
    }
}