import React from "react";
import styled from "./SideNav.module.css";

const SideNav = ({ className }) => {
  return <aside className={`${styled.aside}  ${className}`}>SideNav</aside>;
};

export default SideNav;
