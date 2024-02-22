import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Sliders } from "lucide-react";

const FilterSection = () => {
	return (
		<div className="h-fit border border-black/10 p-6 rounded-3xl bg-white flex flex-col gap-6">
			<div className="flex flex-row justify-between">
				<h1 className="text-base font-bold text-black">Filters</h1>
				<Sliders className="w-5 h-5 stroke-black/40" />
			</div>
			<Separator />
			<div className="flex flex-col gap-5">
				<p className="text-base text-black/60">Work stations</p>
				<p className="text-base text-black/60">Laptops</p>
				<p className="text-base text-black/60">Accessories</p>
				<p className="text-base text-black/60">Components</p>
			</div>
			<Separator />
			<div className="flex flex-col gap-5">
				<h1 className="text-base font-bold text-black">Price</h1>
				<div className="flex flex-col gap-1">
					<Slider step={50} min={0} max={1000} defaultValue={[0, 1000]} />
          <p className="text-end text-gray-400">$0 - $1000</p>
				</div>
			</div>
			<button className="bg-primary w-[247px] text-white rounded-3xl  py-4">
				Apply filter
			</button>
		</div>
	);
};

export default FilterSection;
