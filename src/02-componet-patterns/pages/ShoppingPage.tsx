import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/product";

const product = products[0];
export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>

			<hr />
			<ProductCard
				className="bg-dark text-white"
				key={product.id}
				product={product}
				initialValues={{
					count: 4,
					maxCount: 15,
				}}>
				{({ reset, count, maxCount, increaseBy, isMaxCountReached }) => (
					<>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>

						<ProductTitle className="text-white text-bold" />

						<ProductButtons className="custom-buttons" />

						<button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						{!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}

						<span>{count}</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};
