import React from "react";
import styled from "./ProductDetails.module.css";

const ProductDetails = ({ name, content, price }) => {
  return (
    <section className={styled["product-info"]}>
      <figure className={styled["product"]}>
        <img
          src="https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt={name}
        />
      </figure>

      <article className={styled["product-content"]}>
        <h1>{name}</h1>
        <p>{content}</p>
        <p>{price}</p>
      </article>
    </section>
  );
};

export default ProductDetails;
