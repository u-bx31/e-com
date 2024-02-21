import {
	Computer,
	Gamepad2Icon,
	LampDeskIcon,
	MemoryStick,
} from "lucide-react";

const CategoriesSection = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-10 items-center justify-center px-0 xs:px-4">
			<div className="bg-primary/90 rounded-xl shadow-md flex flex-col gap-4 items-center justify-center p-5  md:p-8 w-full h-[110px] md:h-[150px]">
				<LampDeskIcon className="w-6 h-6 md:w-8 md:h-8 stroke-white" />
				<h1 className="text-sm md:text-base w-full text-center text-white font-bold">Desk Accessories</h1>
			</div>
			<div className="bg-primary/90 rounded-xl shadow-md flex flex-col gap-4 items-center justify-center p-5  md:p-8 w-full h-[110px] md:h-[150px]">
				<Computer className="w-6 h-6 md:w-8 md:h-8 stroke-white" />
				<h1 className="text-sm md:text-base w-full text-center text-white font-bold">Gaming Pc's</h1>
			</div>
			<div className="bg-primary/90 rounded-xl shadow-md flex flex-col gap-4 items-center justify-center p-5  md:p-8 w-full h-[110px] md:h-[150px]">
				<MemoryStick className="w-6 h-6 md:w-8 md:h-8 stroke-white" />
				<h1 className="text-sm md:text-base w-full text-center text-white font-bold">Pc Components</h1>
			</div>
			<div className="bg-primary/90 rounded-xl shadow-md flex flex-col gap-4 items-center justify-center p-5  md:p-8 w-full h-[110px] md:h-[150px]">
				<Gamepad2Icon className="w-6 h-6 md:w-8 md:h-8 stroke-white" />
				<h1 className="text-sm md:text-base w-full text-center text-white font-bold">Gaming Accessories</h1>
			</div>
		</div>
	);
};

export default CategoriesSection;
