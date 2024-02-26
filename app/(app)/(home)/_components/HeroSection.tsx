'use client'
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import Image from "next/image";
import { Arrow, ArrowUp } from "@/public/assets/svgs/index";

const HeroSection = () => {
	return (
		<div className="w-100 flex flex-row gap-9 justify-center md:justify-between lg:flx-row bg-primary rounded-xl  overflow-hidden relative">
			<div className="p-9 sm:p-12 flex flex-col gap-6 w-100 md:w-[550px] z-10">
				<h1 className="font-extrabold text-center md:text-start text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Buy your dream setup</h1>
				<div className="flex flex-row justify-center md:justify-start gap-4">
					<div className="flex flex-col text-white">
						<h3 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl ">50+</h3>
						<p className="font-normal text-sm sm:text-base lg:text-lg">Brands</p>
					</div>
					<Separator orientation="vertical" />
					<div className="flex flex-col text-white">
						<h3 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">100+</h3>
						<p className="font-normal text-sm sm:text-base lg:text-lg">Customers</p>
					</div>
				</div>
				<div className="bg-white rounded-lg flex flex-row items-center gap-2 p-2 lg:p-3">
					<Input placeholder="What are you looking for ?" className="placeholder:text-xs placeholder:sm:text-base" />
					<button className="bg-primary p-3 rounded-lg">
						<Search className="stroke-white w-5 h-5" />
					</button>
				</div>
			</div>
			<div className="absolute md:relative z-0 w-100 md:w-[643px] h-full md:!h-auto lg:!h-[512px]">
				<img
					src={"/assets/images/hero_img.jpg"}
					alt="heroImg"
					className="!w-100 md:!w-[644px] !h-full rounded-2xl !object-cover shadow-lg opacity-30 md:opacity-100"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
