import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./state/cartSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Mens from "./Pages/Mens/Mens";
import Womens from "./Pages/Womens/Womens";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main className="bg-state-300/20 h-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
