
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesStart } from "../../redux/stores/category/category_actions";
import CategoriesPreviewPage from "../categories-preview/CategoriesPreviewPage";
import CategoryListPage from "../category-list/categoryListPage";
import "./shopping_page.scss"

function ShoppinPage() {

    const dispatch = useDispatch<any>()


    useEffect(() => {
        dispatch(fetchCategoriesStart())

    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreviewPage />} />
            <Route path=":category" element={<CategoryListPage />} />
        </Routes>
    );
}

export default ShoppinPage;