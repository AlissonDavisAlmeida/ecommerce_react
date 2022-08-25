import { useSelector } from "react-redux";
import { CartItemProps } from "../../components/cartItem/cartItem";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { PaymentForm } from "../../components/payment-form/payment-form";
import { selectCartItems, selectCartTotal } from "../../redux/stores/cart/cart_selectors";
import "./checkout_style.scss"

function CheckoutPage() {

    const cartItems: CartItemProps[] = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotal)

    return (
        <>
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map(cartItem => {
                    return (
                        <CheckoutItem cartItem={cartItem} />
                    )
                })}
                <span className="total">Total: ${totalPrice}</span>
                <PaymentForm />
            </div>
        </>
    );
}

export default CheckoutPage;