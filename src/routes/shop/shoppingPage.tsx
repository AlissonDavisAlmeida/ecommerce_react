
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../redux/stores/category/category_actions";
import { CategoryActionTypes } from "../../redux/stores/category/category_types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase_utils";
import CategoriesPreviewPage from "../categories-preview/CategoriesPreviewPage";
import CategoryListPage from "../category-list/categoryListPage";
import "./shopping_page.scss"

function ShoppinPage() {

    const dispatch = useDispatch()

    
    useEffect(() => {
        const getProducts = async () => {
            const categories = await getCategoriesAndDocuments();
            dispatch(setCategories(categories))
            dispatch({
                type: CategoryActionTypes.SET_CATEGORIES_TESTE,
            })
            
        }
        getProducts();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreviewPage />} />
            <Route path=":category" element={<CategoryListPage />} />
        </Routes>
    );
}

export default ShoppinPage;