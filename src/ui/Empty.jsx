import React from "react";
import emptyImg from "../images/empty.svg";

function Empty() {
  const figureStyles = {
    width: "100%",
    margin: "0 auto",
    paddingTop: "1.5rem",
    maxWidth: "500px",
  };

  const imgStyles = {
    width: "100%",
  };
  return (
    <figure style={figureStyles}>
      <img style={imgStyles} src={emptyImg} alt="Add to cart illustration" />
    </figure>
  );
}

export default Empty;
