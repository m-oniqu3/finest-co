import React from "react";
import styled from "./CartItem.module.css";
import { MinusIcon, PlusIcon } from "../../icons/Icons";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../../store/features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  //dispatches the increase action
  const increaseHandler = () => {
    dispatch(increase(item));
  };

  //dispatches the decrease action
  const decreaseHandler = () => {
    dispatch(decrease(item));
  };

  //formats number
  const nf = new Intl.NumberFormat("en-US");

  return (
    <section key={item.id} className={styled.card}>
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
            <div onClick={increaseHandler}>
              <PlusIcon />
            </div>
            <div onClick={decreaseHandler}>
              <MinusIcon />
            </div>
          </div>
        </div>

        <p className={styled.productTotal}>${nf.format(item.productTotal)}</p>
      </div>
    </section>
  );
}

export default CartItem;
