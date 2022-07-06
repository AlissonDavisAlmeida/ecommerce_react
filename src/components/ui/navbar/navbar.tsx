import { Link, Outlet } from "react-router-dom";
import "./navbar.scss"
import { ReactComponent as Chrown } from "../../../assets/crown.svg"

function NavBar() {
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
                    <Link className="link" to="/signin">Sign in</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;