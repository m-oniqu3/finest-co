import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cart/cartSlice";
import {
  addToWishList,
  checkIfItemIsInWishList,
} from "../../store/features/wishlist/wishlistSlice";
import Button from "../../ui/Button/Button";
import styled from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  //gets the itemIsInList and wishListItems properties from the store
  const { itemIsInList, wishListItems } = useSelector(
    (state) => state.wishList
  );

  const dispatch = useDispatch();

  //formats a number
  const nf = new Intl.NumberFormat("en-US");

  //destructured from the props object
  const { id, name, price, imgSrc } = props;

  //dispatches the action to add the current item to the store
  const wishListHandler = () => {
    dispatch(addToWishList({ id, name, price, imgSrc }));
  };

  //dispatch the action to add the current item to the cart
  const addToCartHandler = () => {
    dispatch(addToCart({ id, name, price, imgSrc }));
  };
  //checks if the current item is in the cart every time changes are made to the wishList
  useEffect(() => {
    dispatch(checkIfItemIsInWishList(id));
  }, [wishListItems, dispatch, id]);

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
              {/* shows appropriate text when the current item is in the wishlist  */}
              {itemIsInList ? props.btn1alt : props.btn1}
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
