import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amountOfItemsInCart: 0,
  cartTotal: 0,
};

/** addToCart
 * stores the payload in a constant itemToAdd
 * checks if the itemToAdd exists in the cartItems array in the store
 * if the itemToAdd does not exist then add its content to a new object then push it to cartItems array
 * if the item does exist then increase its quantity and total price
 */

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
          image: itemToAdd.imgSrc,
        });
        console.log(state);
      } else {
        itemToAddExists.quantity++;
        itemToAddExists.productTotal += itemToAddExists.price;
      }
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
    },
    removeFromCart: () => {},
  },
});

export const { increase, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
