import { Outlet, useNavigate } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLink, NavLinkContainer } from "./navbarStyled"
import { ReactComponent as Chrown } from "../../../assets/crown.svg"
import { logout } from "../../../utils/firebase/firebase_utils";
import CartIcon from "../../cartIcon/cartIcon";
import CartDropdown from "../../cartDropdown/cartDropdown";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../../redux/stores/cart/cart_selectors";

function NavBar() {

    const navigate = useNavigate()

    const {user} = useSelector((state: any) => state.user)

    const isCartOpen = useSelector(selectIsCartOpen)

    const handleLogout = async () => {
        await logout();

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
                    <NavLink to="/shop">Shop</NavLink>
                    {user && <NavLink as="span" onClick={handleLogout}>Logout</NavLink>}
                    {!user && <NavLink to="/authenticate">Sign up</NavLink>}
                    {user && <CartIcon />}
                </NavLinkContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
}

export default NavBar;