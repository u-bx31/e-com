"use client";
import FastDelivery from "@/public/assets/svgs/icon-delivery.svg";
import { Headset, ShieldCheckIcon } from "lucide-react";

const ServicesSection = () => {
	return (
		<div className="flex flex-wrap items-center gap-5 justify-evenly">
			<div className="flex flex-col gap-6 items-center justify-center">
				<div className="bg-primary border-indigo-300 border-8 rounded-full p-5">
					<FastDelivery className="w-8 h-8 md:w-10 md:h-10" />
				</div>
				<div className="flex flex-col gap-1 items-center">
					<h1 className="text-lg md:text-xl font-semibold">FREE AND FAST DELIVERY</h1>
					<p className="text-base font-normal">
						Free delivery for all orders over $140
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-6 items-center justify-center">
				<div className="bg-primary border-indigo-300 border-8 rounded-full p-5">
					<Headset className="w-8 h-8 md:w-10 md:h-10 stroke-white" />
				</div>
				<div className="flex flex-col gap-1 items-center">
					<h1 className="text-lg md:text-xl font-semibold">24/7 CUSTOMER SERVICE</h1>
					<p className="text-base font-normal">Friendly 24/7 customer support</p>
				</div>
			</div>
			<div className="flex flex-col gap-6 items-center justify-center">
				<div className="bg-primary border-indigo-300 border-8 rounded-full p-5">
					<ShieldCheckIcon className="w-8 h-8 md:w-10 md:h-10 stroke-white" />
				</div>
				<div className="flex flex-col gap-1 items-center">
					<h1 className="text-lg md:text-xl font-semibold">MONEY BACK GUARANTEE</h1>
					<p className="text-base font-normal">We return money within 30 days</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
