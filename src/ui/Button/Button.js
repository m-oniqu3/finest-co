import React from "react";
import styled from "./Button.module.css";

const Button = ({ children, onClickHandler, className }) => {
  return (
    <button onClick={onClickHandler} className={`${styled.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
