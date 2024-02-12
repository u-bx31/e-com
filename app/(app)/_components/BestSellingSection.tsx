import { BestSelling } from "@/constants";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const BestSellingSection = () => {
	return (
		<div className="flex flex-col xl:flex-row gap-8">
			<div className="flex flex-col gap-4 items-center xl:items-start">
				<h1 className="font-bold text-xl lg:text-3xl ">Best Selling</h1>
				<p className="text-center lg:text-start font-medium text-base lg:text-lg text-gray-400">
					Easiest way to healthy life by buying your favorite plants{" "}
				</p>
				<button className="text-white p-3 bg-primary gap-3 flex items-center rounded-lg">
					See more
					<div>
						<MoveRight className="" />
					</div>
				</button>
			</div>

			<div className="flex flex-wrap gap-8 xl:gap-12 justify-center lx:justify-start lg:flex-row lg:flex-nowrap">
				{BestSelling.map((items: any) => {
					return (
						<div className="flex flex-col overflow-hidden w-full xs:h-56 sm:w-60 sm:h-60  lg:w-[300px] lg:h-[436px]">
							<div className="w-100 h-48 lg:h-80 relative">
								<Image
									loading='lazy'
									className="object-cover rounded-lg"
									src={items.img}
									alt="img"
									fill
								/>
							</div>
							<h3 className="font-bold text-lg truncate text-gray-950 w-100 mt-3">
								{items.title}
							</h3>
							<p className="font-medium text-base lg:text-lg text-justify text-gray-500">
								$ {items.price}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BestSellingSection;
