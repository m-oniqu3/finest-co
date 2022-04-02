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
  btn1icon,
  btn2,
  btn2icon,
}) => {
  const nf = new Intl.NumberFormat("en-US");

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
        {price && <p className={styled.price}> $ {nf.format(price)}</p>}

        {/* only show buttons if btn props were recieved */}
        {(btn1 || btn2) && (
          <div className={styled.btngroup}>
            <Button className={styled.btns}>
              {btn1}
              <figure className={styled.icon}> {btn1icon}</figure>
            </Button>
            <Button className={styled.btns}>
              {btn2} <figure className={styled.icon}>{btn2icon}</figure>
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default ProductDetails;
