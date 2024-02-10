import Navbar from "@/components/shared/Navbar";
import HeroSection from "./_components/HeroSection";

export default function Home() {
	return (
		<div className="md:container px-2 flex flex-col gap-y-3">
			<HeroSection />
		</div>
	);
}
