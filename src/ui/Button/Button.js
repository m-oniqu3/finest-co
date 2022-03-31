import React from "react";
import styled from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={styled.btn}>{children}</button>;
};

export default Button;
