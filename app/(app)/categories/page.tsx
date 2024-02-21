import CategoriesSection from "./_components/CategoriesSection";
import ProductsSection from "./_components/ProductsSection";
import TopSection from "./_components/TopSection";

const CategoriesPage = () => {
	return (
		<div className="md:container px-2 flex flex-col gap-9 md:gap-14 mb-14 ">
			<TopSection />
			<CategoriesSection />
      <ProductsSection />
		</div>
	);
};

export default CategoriesPage;
