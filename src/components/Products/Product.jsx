import React from "react";
import styled from "./Product.module.css";

const Product = ({ name, price, image, category }) => {
  return (
    <section className={styled.card}>
      <figure className={styled["card-header"]}>
        <img src={image} alt={name} />
      </figure>
      <article className={styled["card-body"]}>
        <p className={styled.category}>{category}</p>
        <p className={styled.name}>
          <strong>{name}</strong>
        </p>
        <p className={styled.price}>$ {price.toFixed(2)}</p>
      </article>
    </section>
  );
};

export default Product;
