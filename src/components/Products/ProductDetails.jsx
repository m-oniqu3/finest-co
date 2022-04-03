import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cart/cartSlice";
import Button from "../../ui/Button/Button";
import styled from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const nf = new Intl.NumberFormat("en-US");
  const { id, name, price, imgSrc } = props;

  const addToCartHandler = () => {
    dispatch(addToCart({ id, name, price, imgSrc }));
  };

  console.log(cartItems);

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
            <Button className={styled.btns}>
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
