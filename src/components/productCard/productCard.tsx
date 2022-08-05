import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/stores/cart/cart_actions";
import { selectCartItems } from "../../redux/stores/cart/cart_selectors";
import Button from "../buttonForm/ButtonForm";
import { Product } from "../category/category_interfaces";
import "./productCard.scss"

interface ProductCardProps {
    product: Product
}


function ProductCard({ product }: ProductCardProps) {


    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const handleClick = () => {
        dispatch(addItemToCart(cartItems, product))
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