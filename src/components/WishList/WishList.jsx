import React from "react";
import styled from "./WishList.module.css";
import Product from "../Products/Product";
import { useSelector } from "react-redux";

import { ShopIcon, SolidWishListIcon } from "../../icons/Icons";

const WishList = () => {
  const { wishListItems } = useSelector((state) => state.wishList);

  const wishList = wishListItems.map((item) => (
    <div className={styled.items} key={item.id}>
      <Product {...item} />
      <div className={styled.wishbtns}>
        <div className={styled.icon}>
          <SolidWishListIcon />
        </div>

        <div className={styled.icon}>
          <ShopIcon />
        </div>
      </div>
    </div>
  ));

  return (
    <section className={styled["wishlist-wrapper"]}>
      <h4 className={styled.h4}>Your WishList</h4>
      <section className={styled.wishlist}>{wishList}</section>
    </section>
  );
};

export default WishList;
