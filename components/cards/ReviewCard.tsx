import { Star } from "lucide-react";

const ReviewCard = () => {
	return (
		<div className="bg-white rounded-3xl border border-gray-300 h-auto p-4 sm:p-6 md:p-8 w-full ">
			<div className="flex flex-col gap-3">
				<div className="flex flex-row gap-1">
					<Star className="w-5 h-5 stroke-none fill-yellow-400" />
					<Star className="w-5 h-5 stroke-none fill-yellow-400" />
					<Star className="w-5 h-5 stroke-none fill-yellow-400" />
					<Star className="w-5 h-5 stroke-none fill-yellow-400" />
					<Star className="w-5 h-5 stroke-none fill-yellow-400" />
				</div>
				<h3 className="text-base lg:text-lg font-black text-black">Sarah M.</h3>
				<p className="text-xs sm:text-sm lg:text-base font-black text-gray-700">
					"I'm blown away by the quality and style of the clothes I received from
					Shop.co. From casual wear to elegant dresses, every piece I've bought has
					exceeded my expectations.”
				</p>
			</div>
		</div>
	);
};

export default ReviewCard;
