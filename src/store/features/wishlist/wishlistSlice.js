import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  amountOfItemsInWishList: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const itemToAdd = action.payload;
    },
  },
});

export default wishlistSlice.reducer;
