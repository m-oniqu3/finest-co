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
      const itemToAddExists = state.find((item) => (item.id = itemToAdd.id));
      if (!itemToAddExists) {
        const newProduct = {
          id: itemToAdd.id,
          name: itemToAdd.name,
          price: itemToAdd.price,
          quantity: 1,
          productTotal: itemToAdd.price,
        };
        state.cartItems.push(newProduct);
        console.log(state);
      } else if (itemToAddExists) {
        itemToAddExists.quantity++;
        itemToAddExists.productTotal =
          itemToAddExists.quanity * itemToAddExists.price;
        console.log(state);
      }
    },
    removeFromCart: () => {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
