import React from "react";
import styled from "./Shop.module.css";
import ProductDetails from "../Products/ProductDetails";
import { SortIcon } from "../../icons/Icons";
// import Button from "../../ui/Button/Button";

const Shop = () => {
  return (
    <section className={styled["shop-container"]}>
      <ProductDetails
        name="MateBook x pro"
        content="See Greatness in Lightness With 3.1K Real Colour FullView Display, leading intelligent features and Super Device that connects seamlessly, HUAWEI MateBook X Pro takes your experience beyond the extraordinary."
      />

      <article className={styled.heading}>
        <h3>Products</h3>
        <p className={styled.sort}>
          Sort
          <span>
            <SortIcon />
          </span>
        </p>
      </article>
    </section>
  );
};

export default Shop;
