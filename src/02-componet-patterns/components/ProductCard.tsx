import { createContext, CSSProperties } from "react";
import {
	InitialValues,
	onChangeArgs,
	Product,
	ProductCardHandlers,
	ProductContextProps,
} from "../interfaces/interfaces";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
	product: Product;
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	children,
	className,
	initialValues,
	onChange,
	product,
	style,
	value,
}: Props) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
		onChange,
		product,
		value,
		initialValues,
	}); //!Custom Hook

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
				maxCount,
			}}>
			<div
				className={` ${styles.productCard} ${className} `}
				style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount,
					product,

					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
