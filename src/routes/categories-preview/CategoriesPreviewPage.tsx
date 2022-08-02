import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category/category_preview/CategoryPreview";
import { selectCategoriesMap } from "../../redux/stores/category/category_selectors";

function CategoriesPreviewPage() {

    const categories  = useSelector(selectCategoriesMap)


    return (
        <>
            {

                Object.keys(categories).map((title: string) => {
                    return (

                        <CategoryPreview key={title} title={title} products={categories[title]} />

                    )
                })

            }

        </>
    );
}

export default CategoriesPreviewPage;