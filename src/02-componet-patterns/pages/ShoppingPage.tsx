import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
	const { onProductCartChange, shoppingCard } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Store</h1>

			<hr />

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}>
				{products.map((product) => (
					<ProductCard
						className="bg-dark text-white"
						key={product.id}
						onChange={onProductCartChange}
						product={product}
						value={shoppingCard[product.id]?.count || 0}>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>

						<ProductTitle className="text-white text-bold" />

						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}
			</div>

			<div className="shopping-cart">
				{Object.entries(shoppingCard).map(([key, product]) => (
					<ProductCard
						className="bg-dark text-white"
						key={key}
						onChange={onProductCartChange}
						product={product}
						style={{ width: "100px" }}
						value={product.count}>
						<ProductImage
							className="custom-image"
							style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
						/>

						<ProductButtons
							className="custom-buttons"
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						/>
					</ProductCard>
				))}
			</div>
		</div>
	);
};
