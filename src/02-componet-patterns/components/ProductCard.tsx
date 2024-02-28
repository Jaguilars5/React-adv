import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";
import { createContext } from "react";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct(); //!Custom Hook
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
    <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
