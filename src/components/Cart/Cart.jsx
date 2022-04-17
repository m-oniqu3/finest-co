import styled from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { calculateTotal } from "../../store/features/cart/cartSlice";
import { LeftArrowIcon } from "../../icons/Icons";
import { useNavigate } from "react-router-dom";
import Empty from "../../ui/Empty";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nf = new Intl.NumberFormat("en-US");

  //get cartItems and total from the store
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  //calculate the total everytime the cartItems change
  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, cartItems]);

  // map over each item in cartItems from the store and return a CartItem
  const cart = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  return (
    <section className={styled["cart-container"]}>
      <h4 className={styled.h4}>
        Your Shopping Cart
        {cartItems.length === 0 && <> is empty.</>}
      </h4>
      {cartItems.length === 0 && <Empty />}

      <div className={styled.total}>
        <p className={styled.back} onClick={() => navigate(-1)}>
          <span>
            <LeftArrowIcon />
          </span>
          Back
        </p>

        <div>
          Total <span> ${nf.format(cartTotal)}</span>
        </div>
      </div>

      {cart}
    </section>
  );
};

export default Cart;
