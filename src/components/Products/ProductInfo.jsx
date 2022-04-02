import React from "react";
import styled from "./ProductInfo.module.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { LeftArrowIcon, ShopIcon, WishlistIcon } from "../../icons/Icons";

const ProductInfo = () => {
  const navigate = useNavigate();

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
      btn1="Add to Wishlist"
      btn1icon={<ShopIcon />}
      btn2="Add to Cart"
      btn2icon={<WishlistIcon />}
    />
  );

  return (
    <section className={styled.productInfo}>
      <p className={styled.back} onClick={() => navigate(-1)}>
        <span>
          <LeftArrowIcon />
        </span>
        Back to Shop
      </p>

      {productInfo}
    </section>
  );
};

export default ProductInfo;
