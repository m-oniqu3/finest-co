import React from "react";
import styled from "./ProductDetails.module.css";

const ProductDetails = ({
  name,
  content,
  imgSrc,
  price,
  className,
  category,
  company,
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
      </article>
    </section>
  );
};

export default ProductDetails;
