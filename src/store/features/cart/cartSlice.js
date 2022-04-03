import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amountOfItemsInCart: 0,
  cartTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const itemToAddExists = state.cartItems.find(
        (item) => item.id === itemToAdd.id
      );
      if (!itemToAddExists) {
        state.cartItems.push({
          id: itemToAdd.id,
          name: itemToAdd.name,
          price: itemToAdd.price,
          quantity: 1,
          productTotal: itemToAdd.price,
        });
        console.log(state.cartItems);
      } else {
        itemToAddExists.quantity += 1;
        itemToAddExists.productTotal += itemToAddExists.price;
      }
    },
    removeFromCart: () => {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
