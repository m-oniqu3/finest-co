import React from "react";
import styled from "./Header.module.css";
import Container from "./Container";
import { ShopIcon } from "../../icons/Icons";

const Header = () => {
  return (
    <header>
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
  );
};

export default Header;
