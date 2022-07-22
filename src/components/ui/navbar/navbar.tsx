import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLink, NavLinkContainer } from "./navbarStyled"
import { ReactComponent as Chrown } from "../../../assets/crown.svg"
import { useContext } from "react";
import { UserContext } from "../../../context/user_context";
import { logout } from "../../../utils/firebase/firebase_utils";
import CartIcon from "../../cartIcon/cartIcon";
import CartDropdown from "../../cartDropdown/cartDropdown";
import { CartContext } from "../../../context/cart_context";

function NavBar() {

    const navigate = useNavigate()

    const { user } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    const handleLogout = async () => {
        const result = await logout();

        navigate("/authenticate")
    }

    return (
        <>
            <NavigationContainer>
                <LogoContainer to={"/"}>
                    <div>
                        <Chrown className="logo-icon" />
                    </div>
                </LogoContainer>

                <NavLinkContainer>
                    <NavLink  to="/shop">Shop</NavLink>
                    {user && <NavLink as="span" onClick={handleLogout}>Logout</NavLink>}
                    {!user && <NavLink   to="/authenticate">Sign up</NavLink>}
                    {user && <CartIcon />}
                </NavLinkContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
}

export default NavBar;