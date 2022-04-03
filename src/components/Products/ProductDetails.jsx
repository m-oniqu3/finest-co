import React from "react";
import Button from "../../ui/Button/Button";
import styled from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const nf = new Intl.NumberFormat("en-US");

  const addToCartHandler = () => {};

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
              {props.btn2}{" "}
              <figure className={styled.icon}>{props.btn2icon}</figure>
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default ProductDetails;
