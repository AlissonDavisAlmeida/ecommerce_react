import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "../../redux/stores/cart/cart_actions";
import { selectCartItems } from "../../redux/stores/cart/cart_selectors";
import { CartItemProps } from "../cartItem/cartItem";
import { Product } from "../category/category_interfaces";
import "./checkout-item.styles.scss"

interface CheckoutItemProps {
    cartItem: CartItemProps
}

function CheckoutItem({ cartItem }: CheckoutItemProps) {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={cartItem.imageUrl} alt={cartItem.name} />
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(decreaseItemFromCart(cartItems, cartItem as Product))}>
                    &#10094;
                </div>
                <span className="value">

                    {cartItem.quantity}
                </span>
                <div className="arrow" onClick={() => dispatch(addItemToCart(cartItems, cartItem as Product))}>
                    &#10095;
                </div>
            </span>
            <span className="price">{cartItem.price}</span>
            <div className="remove-button" onClick={() => dispatch(removeItemFromCart(cartItems, cartItem as Product))}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;