import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import cartReducer from "./features/cart/cartSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    items: productReducer,
    cart: cartReducer,
    wishList: wishlistReducer,
  },
});

export default store;
