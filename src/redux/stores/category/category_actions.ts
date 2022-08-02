import { CategoryActionTypes } from "./category_types";

export const setCategories = (categories: any) => {
 return{

     type: CategoryActionTypes.SET_CATEGORIES,
     payload: categories
    }
}