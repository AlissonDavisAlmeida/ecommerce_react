import { useContext } from "react";
import ProductCard from "../../components/productCard/productCard";
import { ProductContext } from "../../context/product_context";
import "./shopping_page.scss"

function ShoppinPage() {

    const { products } = useContext(ProductContext);

    return (
        <div className="products_container">
            {products.map(item => (

                <ProductCard key={item.name} product={item}/>
            ))}
        </div>
    );
}

export default ShoppinPage;