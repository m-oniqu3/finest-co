import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
};

const url = "https://www.fakeshop-api.com/products";

const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await fetch(url);
  try {
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
});

// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default productSlice.reducer;
