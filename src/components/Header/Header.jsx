import React from "react";
import { Link } from "react-router-dom";
import styled from "./Header.module.css";
import logo from "../../images/logo.png";
import Container from "./Container";
import { ShopIcon } from "../../icons/Icons";

const Header = () => {
  return (
    <>
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

        <div className={styled.background}></div>
        <Container
          title={
            <h2>
              <span>extra-ordinary</span> service made <span>affordable</span>
            </h2>
          }
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus tellus egestas nullam et. Mauris tempor cras eget commodo ut nisl. "
          buttonText={"Shop Now"}
          icon={<ShopIcon />}
        />
      </header>
    </>
  );
};

export default Header;
