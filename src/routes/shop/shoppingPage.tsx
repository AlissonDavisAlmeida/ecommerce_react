
import { Route, Routes } from "react-router-dom";
import CategoriesPreviewPage from "../categories-preview/CategoriesPreviewPage";
import CategoryListPage from "../category-list/categoryListPage";
import Home from "../home/HomePage";
import "./shopping_page.scss"

function ShoppinPage() {


    return (
        <Routes>
            <Route index element={<CategoriesPreviewPage />} />
            <Route path=":category" element={<CategoryListPage />} />
        </Routes>
    );
}

export default ShoppinPage;