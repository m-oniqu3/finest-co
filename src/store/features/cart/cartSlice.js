import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amountOfItemsInCart: 0,
  cartTotal: 0,
};

/** addToCart
 * stores the payload in a constant itemToAdd
 * checks if the itemToAdd exists in the cartItems array in the store
 * increases the amountOfItemsInCart by 1
 * if the itemToAdd does not exist then add its content to a new object then push it to cartItems array
 * if the item does exist then increase its quantity and total price
 */

/** increase
 * increases the amountOfItemsInCart by 1
 * finds the payload in the cartItems array and stores it in cartItem constant
 * increases the cartItem's quantity and its total
 */

/** decrease
 * decreases the amountOfItemsInCart by 1
 * finds the payload in the cartItems array and stores it in cartItem constant
 * decreases the cartItem's quantity and its total
 * if the quantity is less than 1, remove the item from the cart
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
      state.amountOfItemsInCart++;
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
    increase: (state, action) => {
      state.amountOfItemsInCart++;
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.quantity = cartItem.quantity + 1;
      cartItem.productTotal += cartItem.price;
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.amountOfItemsInCart--;
      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItem.id
        );
      } else {
        cartItem.quantity--;
        cartItem.productTotal -= cartItem.price;
      }
    },
  },
});

export const { increase, addToCart, decrease } = cartSlice.actions;
export default cartSlice.reducer;
