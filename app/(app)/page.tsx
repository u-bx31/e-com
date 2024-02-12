import Navbar from "@/components/shared/Navbar";
import HeroSection from "./_components/HeroSection";
import BestSellingSection from "./_components/BestSellingSection";

export default function Home() {
	return (
		<div className="md:container px-2 flex flex-col gap-9 md:gap-14">
			<HeroSection />
			<BestSellingSection />
		</div>
	);
}
