import { useContext, useRef } from "react";
import { CartContext } from "../../context/cart_context";
import {CartIconStyled, ShoppingIcon, ItemCount} from "./cartIconStyled"

function CartIcon() {

    const { toogleCart, totalQuantity, closeDropDown } = useContext(CartContext)
    const ref = useRef<HTMLDivElement>();



    return (
        <CartIconStyled
            onMouseEnter={toogleCart}
            onBlur={closeDropDown}
        >

            <ShoppingIcon/>
            <ItemCount className="item-count">{totalQuantity}</ItemCount>
        </CartIconStyled>
    );
}

export default CartIcon;