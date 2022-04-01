import React from "react";
import { useSelector } from "react-redux";
import CheckList from "../../ui/list/CheckList";
import styled from "./SideNav.module.css";

const SideNav = ({ className }) => {
  const { products } = useSelector((state) => state.items);

  //map over the array to remove duplicates
  let categories = new Set([...products].map((product) => product.category));

  let companies = new Set([...products].map((product) => product.company));

  const category = [...categories].map((category) => (
    <CheckList key={category} name={category} />
  ));

  const company = [...companies].map((company) => (
    <CheckList key={company} name={company} />
  ));

  return (
    <aside className={`${styled.aside} ${className}`}>
      <article>
        <p>
          <strong>Category</strong>
        </p>
        {category}
      </article>
      <article>
        <p>
          <strong>Company</strong>
        </p>
        {company}
      </article>
    </aside>
  );
};

export default SideNav;
