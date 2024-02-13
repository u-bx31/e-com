import ProductsCard from "@/components/cards/ProductsCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
const NewProductsSection = () => {
	return (
		<div className="flex flex-col gap-8 items-center">
			<h1 className="font-bold text-xl lg:text-3xl ">New Products</h1>
			<Carousel
				opts={{
					align: "center",
					loop: true,
				}}
				className="w-full ">
				<CarouselContent>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
					<CarouselItem className="basis-[60%] xs:basis-[55%] sm:basis-[40%] md:basis-[35] lg:basis-[290px] ">
						<ProductsCard />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<a className="text-white text-base font-semibold bg-primary rounded-md p-2 transition-all hover:bg-indigo-700" href="#">Show all products</a>
		</div>
	);
};

export default NewProductsSection;
