import { Product } from "../../context/product_context";
import "./cart-item.scss"

export interface CartItemProps {
    id?: number
    name: string
    quantity: number
}

function CartItem(props : CartItemProps) {
    return ( 
        <div>
            <h2>{props.name}</h2>
            <span>{props.quantity}</span>
        </div>
     );
}

export default CartItem;