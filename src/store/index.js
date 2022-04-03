import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: { items: productReducer, cart: cartReducer },
});

export default store;
