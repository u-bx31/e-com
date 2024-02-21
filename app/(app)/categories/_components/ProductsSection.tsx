import ProductsCard from "@/components/cards/ProductsCard";

const ProductsSection = () => {
	return (
		<div className="flex flex-col items-center gap-9">
			<h1 className="text-2xl font-black">All Products</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 md:gap-7">
				<ProductsCard  />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
				<ProductsCard />
			</div>
      <button className="bg-primary rounded-lg text-white px-14 py-3 text-lg font-bold">Show More</button>
		</div>
	);
};

export default ProductsSection;
