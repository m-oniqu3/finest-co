import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./components/Shop/Shop";

import { useDispatch } from "react-redux";
import { getProducts } from "./store/features/products/productSlice";

function App() {
  const dispatch = useDispatch();

  // dispatch action to fetch tha data
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
