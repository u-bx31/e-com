import FilterSection from "./_components/FilterSction";
import ProductsSection from "./_components/ProductsSection";
import TopSection from "./_components/TopSection";

const Products = () => {
	return (
		<div className="md:container px-2 flex flex-col gap-9 md:gap-14 mb-14 ">
			<TopSection />
			<div className="flex items-end lg:items-start  flex-col lg:flex-row gap-7">
				<FilterSection />
				<ProductsSection />
			</div>
		</div>
	);
};

export default Products;
