import { Route, Routes } from "react-router-dom";
import "./components/category/category.style.scss"
import NavBar from "./components/ui/navbar/navbar";
import HomePage from "./routes/home/HomePage";
import ShoppinPage from "./routes/shop/shoppingPage";
import Signin from "./routes/signin/signinPage";



function App() {
  return (
      <Routes>
          <Route path="/" element={<NavBar />} >
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShoppinPage />} />
              <Route path="signin" element={<Signin />} />
          </Route>
      </Routes>    
  );
}

export default App;
