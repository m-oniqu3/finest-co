import React from "react";
import Button from "../../ui/Button/Button";
import styled from "./Container.module.css";

const Container = ({ title, content, buttonText, icon }) => {
  return (
    <section className={styled.container}>
      <article className={styled.details}>
        <>{title}</>
        <p>{content}</p>
        <Button>
          {buttonText}
          <figure className={styled.icon}>{icon}</figure>
        </Button>
      </article>
    </section>
  );
};

export default Container;
