import { useContext } from "react";
import { CartContext } from "../../context/cart_context";
import Button from "../buttonForm/ButtonForm";
import CartItem from "../cartItem/cartItem";
import "./cart-dropdown.styles.scss"

function CartDropdown() {

    const {cartItems} = useContext(CartContext)


    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            
            {cartItems.map(cartItem => (
                <CartItem
                    key={cartItem.id} 
                    name={cartItem.name} 
                    quantity={cartItem.quantity}/>
            ))}
            </div>    
                <Button>Checkout</Button>
        
        </div>
    );
}

export default CartDropdown;