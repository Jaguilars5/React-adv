import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCartChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCard((oldShoppingCart) => {
			const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}

			//!Borrar el producto
			const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			return {
				...rest,
			};
			// 	if (count === 0) {
			// 		const { [product.id]: toDelete, ...rest } = oldShoppingCart;

			// 		return {
			// 			...rest,
			// 		};
			// 	}

			// 	return {
			// 		...oldShoppingCart,
			// 		[product.id]: { ...product, count },
			// 	};
			// };
		});
	};
	return {
		onProductCartChange,
		shoppingCard,
	};
};
