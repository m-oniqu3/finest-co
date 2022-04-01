import styled from "./Shop.module.css";
import ProductDetails from "../Products/ProductDetails";
// import { SortIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";
import Product from "../Products/Product";
import Button from "../../ui/Button/Button";
import SideNav from "./SideNav";

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
        <h3>Filters</h3>
        <div>
          <h3>Products</h3>

          <Button>Sort</Button>
        </div>
      </article>

      <div className={styled["product-grid"]}>
        <SideNav className={styled.side} />
        <section className={styled.list}>{productList}</section>
      </div>
    </section>
  );
};

export default Shop;
