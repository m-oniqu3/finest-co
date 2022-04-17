import React from "react";
import styled from "./WishList.module.css";
import Product from "../Products/Product";
import { useDispatch, useSelector } from "react-redux";
import { LeftArrowIcon, ShopIcon, SolidWishListIcon } from "../../icons/Icons";
import { addToWishList } from "../../store/features/wishlist/wishlistSlice";
import { addToCart } from "../../store/features/cart/cartSlice";
import Empty from "../../ui/Empty";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  //dispatch function
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //get the wishlist items from the store
  const { wishListItems } = useSelector((state) => state.wishList);

  /**dispatch the action to add item to wishlist
   * since the item is already in the list it will be removed when checked by the action
   */
  const wishListHandler = (item) => {
    dispatch(addToWishList(item));
  };

  const cartHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(addToWishList(item));
  };

  //display the items in the wishlist
  const wishList = wishListItems.map((item) => (
    <div className={styled.items} key={item.id}>
      <Product {...item} />
      <div className={styled.wishbtns}>
        {/* icons for adding to cart and removing from wishlist */}
        <div className={styled.icon} onClick={() => wishListHandler(item)}>
          <SolidWishListIcon />
        </div>

        <div className={styled.icon} onClick={() => cartHandler(item)}>
          <ShopIcon />
        </div>
      </div>
    </div>
  ));

  return (
    <section className={styled["wishlist-wrapper"]}>
      <h4 className={styled.h4}>
        Your WishList
        {wishListItems.length === 0 && <> is empty.</>}
      </h4>
      <p className={styled.back} onClick={() => navigate(-1)}>
        <span>
          <LeftArrowIcon />
        </span>
        Back
      </p>
      {wishListItems.length === 0 && <Empty />}
      <section className={styled.wishlist}>{wishList}</section>
    </section>
  );
};

export default WishList;
