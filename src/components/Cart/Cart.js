import React from "react";
import styled from "./Cart.module.css";
import { useSelector } from "react-redux";
import { MinusIcon, PlusIcon } from "../../icons/Icons";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const nf = new Intl.NumberFormat("en-US");
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
            <p>$ {nf.format(item.price)}</p>
          </div>

          <div className={styled["quantity-group"]}>
            <p className={styled.quantity}>{item.quantity}</p>

            <div className={styled.icons}>
              <p>
                <PlusIcon />
              </p>
              <p>
                <MinusIcon />
              </p>
            </div>
          </div>

          <p className={styled.productTotal}>${nf.format(item.productTotal)}</p>
        </div>
      </section>
    );
  });
  return <section className={styled["cart-container"]}>{cartItems}</section>;
};

export default Cart;
