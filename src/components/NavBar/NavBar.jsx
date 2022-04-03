import React from "react";
import styled from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { ShopIcon, WishlistIcon } from "../../icons/Icons";

const NavBar = () => {
  const navigate = useNavigate();
  const cartHandler = () => {
    navigate("cart");
  };
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
        <WishlistIcon />
        <div onClick={cartHandler}>
          <ShopIcon />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
