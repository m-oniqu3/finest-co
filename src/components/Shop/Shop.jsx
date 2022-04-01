import styled from "./Shop.module.css";
import ProductDetails from "../Products/ProductDetails";
import { SortIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";
import ProductList from "../Products/ProductList";

const Shop = () => {
  const { products, isLoading } = useSelector((state) => state.items);

  const productList = products.map((product) => (
    <ProductList key={product.id} {...product} />
  ));

  return (
    <section className={styled["shop-container"]}>
      <ProductDetails
        name="MateBook x pro"
        content="With 3.1K Real Colour FullView Display, leading intelligent features and Super Device that connects seamlessly, HUAWEI MateBook X Pro takes your experience beyond the extraordinary."
      />

      <article className={styled.heading}>
        <h3>Products</h3>
        <p className={styled.sort}>
          Sort
          <span>
            <SortIcon />
          </span>
        </p>
      </article>

      {productList}
    </section>
  );
};

export default Shop;
