import React from "react";
import { Link } from "react-router-dom";
import styled from "./Header.module.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <figure className={styled.logo}>
          <img src={logo} alt="logo" />
          <figcaption>techstop</figcaption>
        </figure>

        <ul className={styled.links}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </ul>

        <div className={styled.icons}>
          <p>w</p>
          <p>c</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
