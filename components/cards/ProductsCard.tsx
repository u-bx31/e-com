import { Star } from "lucide-react";

const ProductsCard = () => {
	return (
		<div className="flex flex-col items-start w-100 h-auto ">
			<div className="bg-gray-100 p-5 relative flex items-center justify-center  w-full h-[120px] xs:h-full transition-all overflow-hidden rounded-md">
				<div className="absolute left-1 top-1">
					<p className="bg-primary p-1 text-sm rounded-md text-white">-20%</p>
				</div>
				<div className="flex items-center justify-center">
					<img
						className="w-100 h-100 transition-all"
						src="/assets/images/g27cq4-500x500.png"
						alt="img"
					/>
				</div>
			</div>
			<div className="text w-full px-1">
				<h1 className="w-100 truncate text-base font-medium">IPS LCD Gaming Monitor</h1>
				<div className="flex flex-wrap gap-1 sm:gap-3">
					<p className="text-gray-400 text-sm sm:text-base font-medium">$ 370.00</p>
					<p className="text-red-500 text-sm sm:text-base font-medium">$ 370.00</p>
				</div>
				<div className="flex flex-wrap justify-between items-center gap-1 xs:gap-5">
					<div className="flex flex-row">
						<Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 stroke-none" />
						<Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 stroke-none" />
						<Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 stroke-none" />
						<Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 stroke-none" />
						<Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 stroke-none" />
					</div>
					<p className="text-gray-500 text-sm font-medium">(99)</p>
				</div>
			</div>
		</div>
	);
};

export default ProductsCard;
