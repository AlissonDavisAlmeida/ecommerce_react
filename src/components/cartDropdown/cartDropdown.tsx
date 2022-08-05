import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../redux/stores/cart/cart_actions";
import { selectCartItems } from "../../redux/stores/cart/cart_selectors";
import Button from "../buttonForm/ButtonForm";
import CartItem, { CartItemProps } from "../cartItem/cartItem";
import { CartDropdownContainer, EmptyMessage, CartItemsContainer } from "./CartDropdownStyled"

function CartDropdown() {

    const dispatch = useDispatch()
    const cartItems: CartItemProps[] = useSelector(selectCartItems)

    const closeDropdown = (event:any) => {
        dispatch(setIsCartOpen(false))
    }

    const navigate = useNavigate()

    return (
        <CartDropdownContainer onMouseLeave={closeDropdown}>
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