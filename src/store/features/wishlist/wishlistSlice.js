import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [],
  amountOfItemsInWishList: 0,
  message: "",
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

      if (!itemToAddExists) {
        state.wishListItems.push({
          id: itemToAdd.id,
          name: itemToAdd.name,
          price: itemToAdd.price,
          image: itemToAdd.imgSrc,
        });
        state.message = "item added";
        state.amountOfItemsInWishList++;
      }
      if (itemToAddExists) {
        state.message = "item removed";
        state.wishListItems = state.wishListItems.filter(
          (item) => item.id !== itemToAddExists.id
        );
        state.amountOfItemsInWishList--;
      }
    },
  },
});

export const { addToWishList, removeItemFromWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;
