import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart_context";
import Button from "../buttonForm/ButtonForm";
import CartItem from "../cartItem/cartItem";
import "./cart-dropdown.styles.scss"

function CartDropdown() {

    const {cartItems, closeDropDown} = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div className="cart-dropdown-container" 
             onMouseLeave={closeDropDown}
             >
            <div className="cart-items">
            
            {cartItems.map(cartItem => (
                <CartItem
                    key={cartItem.id} 
                    name={cartItem.name} 
                    quantity={cartItem.quantity}
                    imageUrl={cartItem.imageUrl}
                    price={cartItem.price}
                    />
            ))}
            </div>    
                <Button onClick={() => navigate("/checkout")}>Checkout</Button>
        
        </div>
    );
}

export default CartDropdown;