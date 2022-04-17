import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [],
  amountOfItemsInWishList: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const itemToAdd = action.payload;
      const itemToAddExists = state.wishListItems.find(
        (item) => item.id === itemToAdd.id
      );
      state.amountOfItemsInWishList++;

      if (!itemToAddExists) {
        state.wishListItems.push({ ...itemToAdd });
      } else {
        console.log("item already in cart");
      }
    },

    removeItemFromWishList: (state, action) => {
      const wishItem = state.wishListItems.find(
        (item) => item.id === action.payload.id
      );
      state.amountOfItemsInWishList--;
      state.wishListItems.filter((item) => item.id !== wishItem.id);
    },
  },
});

export const { addToWishList, removeItemFromWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
