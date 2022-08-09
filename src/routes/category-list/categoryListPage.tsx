import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../../components/category/category_interfaces";
import ProductCard from "../../components/productCard/productCard";
import Spinner from "../../components/spinner/Spinner";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../redux/stores/category/category_selectors";
import "./category-list.scss"

function CategoryListPage() {


    const { category } = useParams()

    const  categories  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setproducts] = useState<Product[]>([] as Product[])


    useEffect(() => {
        setproducts(categories[category!])
    }, [category, categories])


    return (
        <>
            <h2 className="title">{category}</h2>
            {
                isLoading ? <Spinner/> :(
                    <div className="category-list">
                    {
                        products?.map((product: Product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
    
                            )
                        })
                    }
    
                </div>
                )
            }
           
        </>
    );
}

export default CategoryListPage;