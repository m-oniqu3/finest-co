import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import styled from "./Container.module.css";

const Container = ({ title, content, buttonText, icon }) => {
  const navigate = useNavigate();

  // navigates to the shop page when the button is clicked
  const shopHandler = () => {
    navigate("shop");
  };

  return (
    <section className={styled.container}>
      <article className={styled.details}>
        {title}
        <p>{content}</p>

        {/* includes text and icon */}
        <Button navigateTo={shopHandler}>
          {buttonText}
          <figure className={styled.icon}>{icon}</figure>
        </Button>
      </article>
    </section>
  );
};

export default Container;
