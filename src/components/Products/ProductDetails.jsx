import React from "react";
import styled from "./ProductDetails.module.css";
import laptop from "../../images/laptop.png";

const ProductDetails = ({ name, content, price }) => {
  return (
    <section className={styled["product-info"]}>
      <figure className={styled.header}>
        <img src={laptop} alt={name} />
      </figure>

      <article>
        <h1>{name}</h1>
        <p>{content}</p>
        <p>{price}</p>
      </article>
    </section>
  );
};

export default ProductDetails;
