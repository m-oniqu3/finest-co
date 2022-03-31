import React from "react";
import { Link } from "react-router-dom";
import styled from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <figure className={styled.logoname}>
          <img src="" alt="" />
          <figcaption>techstop</figcaption>
        </figure>

        <ul>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
