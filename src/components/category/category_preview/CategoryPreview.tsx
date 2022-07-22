import { Link } from "react-router-dom";
import { Product } from "../../../context/category_context";
import ProductCard from "../../productCard/productCard";
import "./category-preview.scss"

interface CategoryPreviewProps {
    title: string;
    products: Product[]
}

function CategoryPreview({ products, title }: CategoryPreviewProps) {


    return (
        <div className="category-preview-container">
            <h2>
                <Link to={title} className="title">{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {
                    products.filter((_, index) => index < 4).map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CategoryPreview;