import { useContext } from "react";
import { CartContext } from "../../context/cart_context";
import { Product } from "../../context/product_context";
import { CartItemProps } from "../cartItem/cartItem";
import "./checkout-item.styles.scss"

interface CheckoutItemProps {
    cartItem: CartItemProps
}

function CheckoutItem({ cartItem }: CheckoutItemProps) {

    const { removeItemFromCart, addItemToCart, decreaseItemFromCart } = useContext(CartContext)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={cartItem.imageUrl} alt={cartItem.name} />
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseItemFromCart(cartItem as Product)}>
                    &#10094;
                </div>
                <span className="value">

                    {cartItem.quantity}
                </span>
                <div className="arrow" onClick={() => addItemToCart(cartItem as Product)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{cartItem.price}</span>
            <div className="remove-button" onClick={() => removeItemFromCart(cartItem.id!)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;