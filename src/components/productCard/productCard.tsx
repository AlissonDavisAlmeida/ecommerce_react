import { Product } from "../../context/product_context";
import Button from "../buttonForm/ButtonForm";
import "./productCard.scss"

interface ProductCardProps {
    product: Product
}


function ProductCard({ product }: ProductCardProps) {



    return (
        <div className="product_card_container">
            <img src={product.imageUrl} alt={product.name} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button type="inverted">
                Add to Cart
            </Button>
        </div>
    );
}

export default ProductCard;