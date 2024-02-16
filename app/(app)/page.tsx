import Navbar from "@/components/shared/Navbar";
import HeroSection from "./_components/HeroSection";
import BestSellingSection from "./_components/BestSellingSection";
import NewProductsSection from "./_components/NewProductsSection";
import CategoriesSection from "./_components/CategoriesSection";
import ReviewsSection from "./_components/ReviewsSection";
import AdvProduct from "./_components/AdvProduct";
import ServicesSection from "./_components/ServicesSection";

export default function Home() {
	return (
		<div className="md:container px-2 flex flex-col gap-9 md:gap-14 mb-40">
			<HeroSection />
			<BestSellingSection />
			<NewProductsSection />
			<CategoriesSection />
			<ReviewsSection />
			<AdvProduct />
			<ServicesSection />
		</div>
	);
}
