import { Route, Routes } from "react-router-dom";
import "./components/category/category.style.scss"
import NavBar from "./components/ui/navbar/navbar";
import CheckoutPage from "./routes/checkout/CheckoutPage";
import HomePage from "./routes/home/HomePage";
import ShoppinPage from "./routes/shop/shoppingPage";
import Signin from "./routes/signin/signinPage";



function App() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />} >
                <Route index element={<HomePage />} />
                <Route path="shop" element={<ShoppinPage />} />
                <Route path="authenticate" element={<Signin />} />
                <Route path="checkout" element={<CheckoutPage />} />
            </Route>
        </Routes>
    );
}

export default App;
