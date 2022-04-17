import React from "react";
import styled from "./WishList.module.css";
import Product from "../Products/Product";
import { useSelector } from "react-redux";

const WishList = () => {
  const { wishListItems } = useSelector((state) => state.wishList);

  const wishList = wishListItems.map((item) => (
    <Product key={item.id} {...item} />
  ));

  return (
    <section className={styled["wishlist-wrapper"]}>
      <h4 className={styled.h4}>Your WishList</h4>
      <section className={styled.wishlist}>{wishList}</section>
    </section>
  );
};

export default WishList;
