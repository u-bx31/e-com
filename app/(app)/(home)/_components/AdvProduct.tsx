const AdvProduct = () => {
	return (
		<div className="bg-black  p-10 lg:p-14 w-full flex gap-5 flex-col justify-start xl:justify-center lg:flex-row rounded-3xl">
			<div className="pt-3 flex flex-col gap-4 md:gap-8 lg:w-[443px]">
				<h3 className="text-base text-green-700 font-semibold">Categories</h3>
				<h1 className="text-white text-center lg:text-start text-2xl md:text-4xl lg:text-5xl font-semibold !leading-10 lg:!leading-[60px]">
					Enhance Your Music Experience
				</h1>
				<div className="flex flex-wrap gap-3 justify-center lg:justify-start">
					<div className="bg-white rounded-full p-3 flex flex-col items-center justify-center w-[62px] h-[62px] sm:w-[68px] sm:h-[68px]">
						<p className="text-base font-semibold -my-1">23</p>
						<p className="text-[11px] font-medium">Hours</p>
					</div>
					<div className="bg-white rounded-full p-3 flex flex-col gap-0 items-center justify-center  w-[62px] h-[62px] sm:w-[68px] sm:h-[68px]">
						<p className="text-base font-semibold -my-1">05</p>
						<p className="text-[11px] font-medium">Days</p>
					</div>
					<div className="bg-white rounded-full p-3 flex flex-col gap-0 items-center justify-center  w-[62px] h-[62px] sm:w-[68px] sm:h-[68px]">
						<p className="text-base font-semibold -my-1">59</p>
						<p className="text-[11px] font-medium">Minutes</p>
					</div>
					<div className="bg-white rounded-full p-3 flex flex-col gap-0 items-center justify-center  w-[62px] h-[62px] sm:w-[68px] sm:h-[68px]">
						<p className="text-base font-semibold -my-1">35</p>
						<p className="text-[11px] font-medium">Secondes</p>
					</div>
				</div>
				<button className="bg-green-400 text-white px-12 py-4 w-100 lg:w-[171px] rounded-md">
					Buy Now
				</button>
			</div>
			<div className="flex items-center justify-center">
				<div className="relative">
					<div className="absolute inset-0 h-full w-full bg-gray-100/30 transform scale-[0.80] rounded-full blur-3xl" />
					<div className="relative shadow-xl bg-transparent  h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
						<img className="" src="/assets/images/Frame-694.png" alt="img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdvProduct;
