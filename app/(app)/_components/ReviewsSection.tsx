import ReviewCard from "@/components/cards/ReviewCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewsSection = () => {
	return (
		<div className="w-full flex flex-col gap-8">
			<h1 className="text-center text-2xl lg:text-4xl font-black text-black">
				OUR HAPPY CUSTOMERS
			</h1>
			<Carousel
				opts={{
					align: "center",
					loop: true,
				}}
				className="w-full ">
				<CarouselContent>
					<CarouselItem className="basis-[65%] xs:basis-[55%] sm:basis-[50%] md:basis-[380px] lg:basis-[400px] ">
						<ReviewCard />
					</CarouselItem>
					<CarouselItem className="basis-[65%] xs:basis-[55%] sm:basis-[50%] md:basis-[380px] lg:basis-[400px] ">
						<ReviewCard />
					</CarouselItem>
					<CarouselItem className="basis-[65%] xs:basis-[55%] sm:basis-[50%] md:basis-[380px] lg:basis-[400px] ">
						<ReviewCard />
					</CarouselItem>
					<CarouselItem className="basis-[65%] xs:basis-[55%] sm:basis-[50%] md:basis-[380px] lg:basis-[400px] ">
						<ReviewCard />
					</CarouselItem>
					<CarouselItem className="basis-[65%] xs:basis-[55%] sm:basis-[50%] md:basis-[380px] lg:basis-[400px] ">
						<ReviewCard />
					</CarouselItem>
					<CarouselItem className="basis-[65%] xs:basis-[55%] sm:basis-[50%] md:basis-[380px] lg:basis-[400px] ">
						<ReviewCard />
					</CarouselItem>
					<CarouselItem className="basis-[65%] xs:basis-[55%] sm:basis-[50%] md:basis-[380px] lg:basis-[400px] ">
						<ReviewCard />
					</CarouselItem>
				
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default ReviewsSection;
