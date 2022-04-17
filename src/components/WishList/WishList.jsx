import React from "react";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishListItems = useSelector((state) => state.wishList.wishListItems);
  console.log(wishListItems);
  return <div>WishList</div>;
};

export default WishList;
