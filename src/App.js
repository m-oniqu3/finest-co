import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./components/Shop/Shop";

// import { useDispatch } from "react-redux";
// import { getProducts } from "./store/features/products/productSlice";
import ProductInfo from "./components/Products/ProductInfo";
import Cart from "./components/Cart/Cart";

function App() {
  // const dispatch = useDispatch();

  // // dispatch action to fetch tha data
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="shop/product/:productId" exact element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
