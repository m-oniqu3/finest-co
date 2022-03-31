import React from "react";
import styled from "./Button.module.css";

const Button = ({ children, navigateTo }) => {
  return (
    <button onClick={navigateTo} className={styled.btn}>
      {children}
    </button>
  );
};

export default Button;
