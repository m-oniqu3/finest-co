import React from "react";
import styled from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { ShopIcon, WishlistIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { amountOfItemsInCart } = useSelector((state) => state.cart);

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

      <div className={styled.icons}>
        <Link to="/cart">
          <WishlistIcon />
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
