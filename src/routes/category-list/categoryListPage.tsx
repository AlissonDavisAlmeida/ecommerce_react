import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/productCard";
import { CategoryContext, Product } from "../../context/category_context";
import "./category-list.scss"

function CategoryListPage() {


    const { category } = useParams()

    const { categoriesMap } = useContext(CategoryContext);

    const [products, setproducts] = useState<Product[]>([] as Product[])


    useEffect(() => {
        setproducts(categoriesMap[category!])
    }, [category, categoriesMap])


    return (
        <>
            <h2 className="title">{category}</h2>
            <div className="category-list">
                {
                    products?.map((product: Product) => {
                        return (
                            <ProductCard key={product.id} product={product} />

                        )
                    })
                }

            </div>
        </>
    );
}

export default CategoryListPage;