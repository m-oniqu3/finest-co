import styled from "./Shop.module.css";
import ProductDetails from "../Products/ProductDetails";
// import { SortIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";
import Product from "../Products/Product";
import Button from "../../ui/Button/Button";

const Shop = () => {
  const { products, isLoading } = useSelector((state) => state.items);

  const productList = products.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return (
    <section className={styled["shop-container"]}>
      <ProductDetails
        name="MateBook x pro"
        content="With 3.1K Real Colour FullView Display, leading intelligent features and Super Device that connects seamlessly, HUAWEI MateBook X Pro takes your experience beyond the extraordinary."
      />

      <article className={styled.heading}>
        <h3>Products</h3>

        <Button>Sort</Button>
      </article>

      {!isLoading && products && (
        <section className={styled.list}>{productList}</section>
      )}
    </section>
  );
};

export default Shop;
