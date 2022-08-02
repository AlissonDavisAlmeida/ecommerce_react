import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./components/category/categoryStyled.tsx"
import NavBar from "./components/ui/navbar/navbar";
import { setCurrentUser } from "./redux/stores/user/user_actions";
import CheckoutPage from "./routes/checkout/CheckoutPage";
import HomePage from "./routes/home/HomePage";
import ShoppinPage from "./routes/shop/shoppingPage";
import Signin from "./routes/signin/signinPage";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase_utils";



function App() {

    const dispatch = useDispatch()

    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener(userAuth => {
        if(userAuth){
            createUserDocumentFromAuth(userAuth)
        }
        dispatch(setCurrentUser(userAuth))
      })
      return unsubscribe
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
