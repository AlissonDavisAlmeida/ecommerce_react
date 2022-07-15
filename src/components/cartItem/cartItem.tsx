import "./cart-item.scss"

export interface CartItemProps {
    id?: number
    name: string
    quantity: number
    imageUrl?: string
    price: number
}

function CartItem(props: CartItemProps) {
    return (
        <div className="cart-item-container">
            <img src={props.imageUrl} alt={props.name} />
            <div className="item-details">
                <span className="name">{props.name}</span>

                <span className="price">{props.quantity} x ${props.price}</span>
            </div>
        </div>
    );
}

export default CartItem;