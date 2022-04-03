import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../../allProducts";

const initialState = {
  products: allProducts,
  isLoading: false,
};

// const url = "https://fakestoreapi.com/products";
const url = "https://course-api.com/react-store-products";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await fetch(url);
  try {
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

console.log(productSlice.getInitialState);

export default productSlice.reducer;
