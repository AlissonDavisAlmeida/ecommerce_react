import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart_context";
import Button from "../buttonForm/ButtonForm";
import CartItem from "../cartItem/cartItem";
import { CartDropdownContainer, EmptyMessage, CartItemsContainer } from "./CartDropdownStyled"

function CartDropdown() {

    const { cartItems, closeDropDown } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <CartDropdownContainer onMouseLeave={closeDropDown}>
            <CartItemsContainer className="cart-items">

                {cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            name={cartItem.name}
                            quantity={cartItem.quantity}
                            imageUrl={cartItem.imageUrl}
                            price={cartItem.price}
                        />
                    ))
                    : <EmptyMessage>Your cart is empty</EmptyMessage>}
            </CartItemsContainer>
            <Button onClick={() => navigate("/checkout")}>Checkout</Button>

        </CartDropdownContainer>
    );
}

export default CartDropdown;