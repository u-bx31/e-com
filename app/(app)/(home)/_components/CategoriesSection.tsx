import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CategoriesSection = () => {
	return (
		<div className="bg-primary flex flex-col items-center gap-10 md:gap-16 p-5  md:p-14 rounded-xl">
			<h1 className="text-center text-2xl lg:text-4xl font-black text-white">
				Brose By Categories
			</h1>
			<div className="w-full flex flex-col gap-4">
				<div className="w-full flex flex-col justify-center gap-4 md:flex-row md:gap-5">
					<div className="relative overflow-hidden group w-full h-40 md:w-80 md:h-52 lg:w-96 lg:h-72">
						<div className="categories-card_overlay">
							<h2 className=" categories-card_header">Gaming Pc</h2>
						</div>
						<img
							alt="img"
							className="object-cover rounded-3xl transition-all ease-in w-full h-40 md:w-80 md:h-52 lg:w-96 lg:h-72"
							src="https://images.unsplash.com/photo-1587202372583-49330a15584d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
					<div className="relative overflow-hidden group w-full h-40 md:max-w-lg md:h-52 lg:max-w-2xl lg:h-72">
						<div className="categories-card_overlay">
							<h2 className=" categories-card_header">Desktops</h2>
						</div>
						<img
							alt="img"
							className="object-cover rounded-3xl transition-all ease-in w-full h-40 md:max-w-lg md:h-52 lg:max-w-2xl lg:h-72"
							src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col justify-center gap-4 md:flex-row md:gap-5">
					<div className="relative overflow-hidden group w-full h-40 md:max-w-lg md:h-52 lg:max-w-2xl lg:h-72">
						<div className="categories-card_overlay">
							<h2 className=" categories-card_header">Gpu's</h2>
						</div>
						<img
							alt="img"
							className="object-cover rounded-3xl transition-all ease-in w-full h-40 md:max-w-lg md:h-52 lg:max-w-2xl lg:h-72"
							src="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
					<div className="relative overflow-hidden group w-full h-40 md:w-80 md:h-52 lg:w-96 lg:h-72">
						<div className="categories-card_overlay_all">
							<Link href={'/categories'} className="flex items-center justify-center gap-2">
								<h2 className=" categories-card_header">View More</h2>
								<ArrowRightCircle className="w-6 h-6 stroke-white group-hover:stroke-[3px] transition-all ease-in" />
							</Link>
						</div>
						<img
							alt="img"
							className="object-cover rounded-3xl transition-all ease-in w-full h-40 md:w-80 md:h-52 lg:w-96 lg:h-72"
							src="https://images.unsplash.com/photo-1606414760045-9dd333105737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesSection;
