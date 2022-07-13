import { Link, Outlet } from "react-router-dom";
import "./navbar.scss"
import { ReactComponent as Chrown } from "../../../assets/crown.svg"
import { useContext } from "react";
import { UserContext } from "../../../context/user_context";
import { logout } from "../../../utils/firebase/firebase_utils";
import CartIcon from "../../cartIcon/cartIcon";
import CartDropdown from "../../cartDropdown/cartDropdown";
import { CartContext } from "../../../context/cart_context";

function NavBar() {



    const { user } = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    const handleLogout = async () => {
        const result = await logout();

    }

    return (
        <>
            <div className="navigation">
                <Link className="logo" to={"/"}>
                    <div>
                        <Chrown className="logo-icon" />
                    </div>
                </Link>

                <div className="nav-links">
                    <Link className="link" to="/shop">Shop</Link>
                    {user && <span className="link" onClick={handleLogout}>Logout</span>}
                    {!user && <Link className="link" to="/authenticate">Sign up</Link>}
                    {user && <CartIcon />}
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;