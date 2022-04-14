import styled from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  //get cart items from the store
  const cart = useSelector((state) => state.cart.cartItems);

  /**
   * map over each item in the cart array from the store and return a CartItem
   */

  const cartItems = cart.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <section className={styled["cart-container"]}>
      <h4 className={styled.h4}>Your Shopping Cart</h4>
      {cart.length !== 0 ? cartItems : <h4 className={styled.h4}>is empty</h4>}
    </section>
  );
};

export default Cart;
