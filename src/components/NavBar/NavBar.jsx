import React from "react";
import styled from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { ShopIcon, WishlistIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  //get the amountOfItemsInCart and the amountOfItemsInWishList from the store
  const { amountOfItemsInCart } = useSelector((state) => state.cart);
  const { amountOfItemsInWishList } = useSelector((state) => state.wishList);

  return (
    <nav>
      <figure className={styled.logo}>
        <img src={logo} alt="logo" />
        <figcaption>finest&co</figcaption>
      </figure>

      {/* links to the different components */}
      <ul className={styled.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </ul>

      {/* display the amount of items if there are any in the cart and the wishlist */}
      <div className={styled.icons}>
        <Link to="/wishlist">
          <WishlistIcon />
          {amountOfItemsInWishList !== 0 && (
            <p className={styled.amount}>{amountOfItemsInWishList}</p>
          )}
        </Link>

        <Link to="/cart">
          <ShopIcon />
          {amountOfItemsInCart !== 0 && (
            <p className={styled.amount}>{amountOfItemsInCart}</p>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
