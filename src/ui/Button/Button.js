import React from "react";
import styled from "./Button.module.css";

const Button = ({ children, navigateTo, className }) => {
  return (
    <button onClick={navigateTo} className={`${styled.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
