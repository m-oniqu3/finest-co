import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cart/cartSlice";
import { addToWishList } from "../../store/features/wishlist/wishlistSlice";
import Button from "../../ui/Button/Button";
import styled from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const dispatch = useDispatch();

  //get the cartItems and wishListItems from the store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishListItems = useSelector((state) => state.wishList.wishListItems);

  //formats a number
  const nf = new Intl.NumberFormat("en-US");
  //destructured from the props object
  const { id, name, price, imgSrc } = props;

  const wishListHandler = () => {
    dispatch(addToWishList({ id, name, price, imgSrc }));
    // setAddToList((prevState) => !prevState);
  };

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
