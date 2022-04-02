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
        name="New Arrival"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur aspernatur quis rem blanditiis maxime molestiae eaque expedita, inventore consequatur!"
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
