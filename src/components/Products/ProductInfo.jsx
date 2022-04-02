import React from "react";
import styled from "./ProductInfo.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductInfo = () => {
  //destructured the id from the url
  const { productId } = useParams();
  const { products } = useSelector((state) => state.items);

  //find the product in the products array that matches the productId
  const { name, category, company, description, price, image } = products.find(
    (product) => product.id === productId
  );

  const productInfo = (
    <ProductDetails
      className={styled.details}
      name={name}
      category={category}
      company={company}
      price={price}
      imgSrc={image}
      content={description}
    />
  );

  return <section className={styled.productInfo}>{productInfo}</section>;
};

export default ProductInfo;
