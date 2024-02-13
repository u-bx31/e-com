import Image from "next/image";
import Link from "next/link";

const CategoriesSection = () => {
	return (
		<div className="bg-primary flex flex-col items-center gap-16 p-14 rounded-xl">
			<h1 className="text-2xl lg:text-4xl font-black text-white">
				Brose By Categories
			</h1>
			<div className="w-full flex flex-col items-center">
				<div className="flex flex-row gap-5">
					<img
						alt="img"
						className=" w-[415px] h-[289px] object-cover mb-4 rounded-3xl"
						src="https://images.unsplash.com/photo-1587202372583-49330a15584d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
					<img
						alt="img"
						className=" w-[600px] h-[289px] object-cover mb-4 rounded-3xl"
						src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</div>
				<div className="flex flex-row gap-5">
					<img
						alt="img"
						className="w-[600px] h-[289px] object-cover mb-4 rounded-3xl"
						src="https://images.unsplash.com/photo-1606414760045-9dd333105737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>

					<img
						alt="img"
						className="w-[415px] h-[289px] object-cover mb-4 rounded-3xl"
						src="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</div>
			</div>
		</div>
	);
};

export default CategoriesSection;
