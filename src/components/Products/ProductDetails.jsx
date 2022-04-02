import React from "react";
import Button from "../../ui/Button/Button";
import styled from "./ProductDetails.module.css";

const ProductDetails = ({
  name,
  content,
  imgSrc,
  price,
  className,
  category,
  company,
  btn1,
  btn2,
}) => {
  return (
    <section className={`${styled["product-info"]} ${className}`}>
      <figure className={styled["product"]}>
        <img src={imgSrc} alt={name} />
      </figure>

      <article className={styled["product-content"]}>
        <h1>{name}</h1>
        <div className={styled.filters}>
          <p>{category}</p>
          <p>{company}</p>
        </div>
        <p>{content}</p>
        <p>{price}</p>

        {/* only show buttons if btn props were recieved */}
        {(btn1 || btn2) && (
          <div className={styled.btn}>
            <Button> {btn1}</Button>
            <Button> {btn2}</Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default ProductDetails;
