import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "./Product.module.css";

const Product = ({ id, name, price, image, category }) => {
  const navigate = useNavigate();
  const nf = new Intl.NumberFormat("en-US");

  // navigates to the productInfo page for the given item
  const getProductInfo = (id) => {
    navigate(`product/${id}`);
  };

  //returns all the products with their image, category and price
  //displayed on the shop page
  return (
    <section className={styled.card} onClick={() => getProductInfo(id)}>
      <figure className={styled["card-header"]}>
        <img src={image} alt={name} />
      </figure>
      <article className={styled["card-body"]}>
        <p className={styled.category}>{category}</p>
        <p className={styled.name}>
          <strong>{name}</strong>
        </p>
        <p className={styled.price}>$ {nf.format(price)}</p>
      </article>
    </section>
  );
};

export default Product;
