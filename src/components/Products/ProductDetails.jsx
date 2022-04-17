import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cart/cartSlice";
import {
  addToWishList,
  removeItemFromWishList,
} from "../../store/features/wishlist/wishlistSlice";
import Button from "../../ui/Button/Button";
import styled from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  //destructured from the props object
  const { id, name, price, imgSrc } = props;

  const dispatch = useDispatch();

  const [isInWishList, setIsInWishList] = useState(false);

  //get the cartItems from the store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishListItems = useSelector((state) => state.wishList.wishListItems);

  //formats a number
  const nf = new Intl.NumberFormat("en-US");

  //sets the state to either true/false
  const wishListHandler = () => {
    setIsInWishList((prevState) => !prevState);
  };

  //if the state is true , then add the item to the wishlist
  useEffect(() => {
    isInWishList && dispatch(addToWishList({ id, name, price, imgSrc }));
  }, [isInWishList, dispatch, id, name, price, imgSrc]);

  //if the wishListItems array is not empty then and the state is false then remove the item from the wishlist
  useEffect(() => {
    wishListItems.length !== 0 &&
      !isInWishList &&
      dispatch(removeItemFromWishList({ id }));
  }, [wishListItems.length, dispatch, id, isInWishList]);

  const addToCartHandler = () => {
    dispatch(addToCart({ id, name, price, imgSrc }));
    console.log(cartItems);
  };

  return (
    <section className={`${styled["product-info"]} ${props.className}`}>
      <figure className={styled["product"]}>
        <img src={props.imgSrc} alt={props.name} />
      </figure>

      <article className={styled["product-content"]}>
        <h1>{props.name}</h1>
        <div className={styled.filters}>
          <p>{props.category}</p>
          <p>{props.company}</p>
        </div>
        <p>{props.content}</p>
        {props.price && (
          <p className={styled.price}> $ {nf.format(props.price)}</p>
        )}

        {/* only show buttons if btn props were recieved */}
        {(props.btn1 || props.btn2) && (
          <div className={styled.btngroup}>
            <Button className={styled.btns} onClickHandler={wishListHandler}>
              {props.btn1}
              <figure className={styled.icon}> {props.btn1icon}</figure>
            </Button>

            <Button onClickHandler={addToCartHandler} className={styled.btns}>
              {props.btn2}
              <figure className={styled.icon}>{props.btn2icon}</figure>
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default ProductDetails;
