import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux/stores/cart/cart_actions";
import { selectCartCount } from "../../redux/stores/cart/cart_selectors";
import { CartIconStyled, ShoppingIcon, ItemCount } from "./cartIconStyled"

function CartIcon() {

    const dispatch = useDispatch()

    const totalQuantity = useSelector(selectCartCount)

    const toogleCart = (event: any) => {
        dispatch(setIsCartOpen(true))
    }

    const clodeDropDown = (event: any) => {
        dispatch(setIsCartOpen(false))
    }

    return (
        <CartIconStyled
            onMouseEnter={toogleCart}
            onBlur={clodeDropDown}
        >

            <ShoppingIcon />
            <ItemCount className="item-count">{totalQuantity}</ItemCount>
        </CartIconStyled>
    );
}

export default CartIcon;