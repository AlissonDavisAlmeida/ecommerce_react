import { useContext } from "react";
import CategoryPreview from "../../components/category/category_preview/CategoryPreview";
import { CategoryContext } from "../../context/category_context";

function CategoriesPreviewPage() {

    const { categoriesMap } = useContext(CategoryContext);

    return (
        <>
            {

                Object.keys(categoriesMap).map((title: string) => {
                    return (

                        <CategoryPreview key={title} title={title} products={categoriesMap[title]} />

                    )
                })

            }

        </>
    );
}

export default CategoriesPreviewPage;