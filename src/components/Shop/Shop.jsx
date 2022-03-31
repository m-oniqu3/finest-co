import React from "react";
import ProductDetails from "../Products/ProductDetails";
import styled from "./Shop.module.css";

const Shop = () => {
  return (
    <section className={styled["shop-container"]}>
      <ProductDetails
        name="MateBook x pro"
        content="See Greatness in Lightness With 3.1K Real Colour FullView Display, leading intelligent features and Super Device that connects seamlessly, HUAWEI MateBook X Pro takes your experience beyond the extraordinary.
"
      />
    </section>
  );
};

export default Shop;
