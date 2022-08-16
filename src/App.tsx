import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./components/category/categoryStyled.tsx"
import NavBar from "./components/ui/navbar/navbar";
import { checkUserSession } from "./redux/stores/user/user_actions";
import CheckoutPage from "./routes/checkout/CheckoutPage";
import HomePage from "./routes/home/HomePage";
import ShoppinPage from "./routes/shop/shoppingPage";
import Signin from "./routes/signin/signinPage";



function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkUserSession())
    }, [])


    return (
        <Routes>
            <Route path="/" element={<NavBar />} >
                <Route index element={<HomePage />} />
                <Route path="shop/*" element={<ShoppinPage />} />
                <Route path="authenticate" element={<Signin />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Route>
        </Routes>
    );
}

export default App;
