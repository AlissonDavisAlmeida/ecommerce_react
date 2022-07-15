import { useContext, useRef } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../context/cart_context";
import "./cart_icon.scss"

function CartIcon() {

    const { toogleCart, totalQuantity, closeDropDown } = useContext(CartContext)
    const ref = useRef<HTMLDivElement>();



    return (
        <div className="cart-icon-container"
            onMouseEnter={toogleCart}
            onBlur={closeDropDown}
        >

            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQuantity}</span>
        </div>
    );
}

export default CartIcon;