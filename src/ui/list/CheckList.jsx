import React from "react";

const CheckList = ({ name }) => {
  const formStyle = { paddingBottom: ".2rem" };
  const labelStyle = { paddingLeft: "0.3rem", textTransform: "capitalize" };
  return (
    <form style={formStyle}>
      <input type="checkbox" />
      <label style={labelStyle}>{name}</label>
    </form>
  );
};

export default CheckList;
