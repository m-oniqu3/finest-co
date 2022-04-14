import React from "react";
import styled from "./CartItem.module.css";
import { MinusIcon, PlusIcon } from "../../icons/Icons";
import { useDispatch } from "react-redux";
import { increase } from "../../store/features/cart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(increase(item));
  };

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
            <p>
              <MinusIcon />
            </p>
          </div>
        </div>

        <p className={styled.productTotal}>${nf.format(item.productTotal)}</p>
      </div>
    </section>
  );
}

export default CartItem;

/**
 *       <section key={item.id} className={styled.card}>
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
              <div onClick={() => addToCartHandler(item.id)}>
                <PlusIcon />
              </div>
              <p>
                <MinusIcon />
              </p>
            </div>
          </div>

          <p className={styled.productTotal}>${nf.format(item.productTotal)}</p>
        </div>
      </section>
 */
