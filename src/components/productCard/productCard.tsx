import { useContext } from "react";
import { CartContext } from "../../context/cart_context";
import { Product } from "../../context/product_context";
import Button from "../buttonForm/ButtonForm";
import "./productCard.scss"

interface ProductCardProps {
    product: Product
}


function ProductCard({ product }: ProductCardProps) {

    const {addItemToCart} = useContext(CartContext)

    const handleClick = () => {
        addItemToCart(product)
    }

    return (
        <div className="product_card_container">
            <img src={product.imageUrl} alt={product.name} />
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button type="inverted" onClick={handleClick}>
                Add to Cart
            </Button>
        </div>
    );
}

export default ProductCard;