import styled from "./Shop.module.css";
import ProductDetails from "../Products/ProductDetails";
// import { SortIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";
import Product from "../Products/Product";
import SideNav from "./SideNav";

const Shop = () => {
  const { products } = useSelector((state) => state.items);

  const productList = products.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return (
    <section className={styled["shop-container"]}>
      <ProductDetails
        name="New Arrival"
        category="Living Room"
        company="Ikea"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur aspernatur quis rem blanditiis maxime molestiae eaque expedita, inventore consequatur!"
        imgSrc="https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      />
      {/* <article>
      
        
      </article> */}
      <div className={styled["product-grid"]}>
        <SideNav className={styled.side} />
        <section>
          <div className={styled.heading}>
            <h3>Products</h3>
            <h3>Sort</h3>
          </div>
          <section className={styled.list}>{productList}</section>
        </section>
      </div>
    </section>
  );
};

export default Shop;
