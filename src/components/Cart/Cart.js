import React from "react";
import styled from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);

  const cartItems = cart.map((item) => {
    return (
      <section key={item.key} className={styled.card}>
        <div className={styled["cart-content"]}>
          <figure className={styled["cart-product"]}>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className={styled.caption}>
            <figcaption>{item.name}</figcaption>
            <p>{item.price}</p>
          </div>

          <p className={styled.quantity}>{item.quantity}</p>
          <p className={styled.productTotal}> {item.productTotal}</p>
        </div>
      </section>
    );
  });
  return <div>{cartItems}</div>;
};

export default Cart;
