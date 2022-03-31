import React from "react";
import styled from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <nav>
      <figure className={styled.logo}>
        <img src={logo} alt="logo" />
        <figcaption>techstop</figcaption>
      </figure>

      {/* links to the different components */}
      <ul className={styled.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </ul>

      <div className={styled.icons}>
        <p>w</p>
        <p>c</p>
      </div>
    </nav>
  );
};

export default NavBar;
