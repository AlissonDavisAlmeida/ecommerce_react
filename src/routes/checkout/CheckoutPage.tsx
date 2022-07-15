import { useContext } from "react";
import { CartContext } from "../../context/cart_context";
import { Product } from "../../context/product_context";
import "./checkout_style.scss"

function CheckoutPage() {

    const {cartItems, addItemToCart, decreaseItemFromCart} = useContext(CartContext)

    return (
        <>
            <div>
                {cartItems.map(cartItem => {
                    const {id,name, price, quantity, imageUrl} = cartItem
                    return (
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity}</span>
                            <span onClick={()=> decreaseItemFromCart(cartItem as Product)}>decrement</span>
                            <span onClick={()=> addItemToCart(cartItem as Product)}>increment</span>
                        </div>
                    )
                })}
            </div>
        </>
      );
}

export default CheckoutPage;