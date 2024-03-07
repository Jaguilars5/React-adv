import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/product";

const product = products[0];
export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>

			<hr />
			<ProductCard
				key={product.id}
				product={product}
				initialValues={{
					count: 4,
					// maxCount: 15,
				}}>
				{({ reset, count, maxCount, increaseBy, isMaxCountReached }) => (
					<>
						<ProductImage />

						<ProductTitle />

						<ProductButtons />
					</>
				)}
			</ProductCard>
		</div>
	);
};
