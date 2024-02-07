import { Button } from "@/components/ui/button";
import { useStepper } from "@/components/ui/stepper";

export default function StepperFormActions() {
	const {
		activeStep,
		isLastStep,
		isOptionalStep,
		isDisabledStep,
		prevStep,
	} = useStepper();

	return (
		<div className="flex items-center justify-center sm:justify-end gap-2">
			{!isDisabledStep && (
				<Button variant={"outline"} className="w-full sm:w-32" onClick={prevStep}>
					Prev
				</Button>
			)}
			<Button type={"submit"} className="w-full sm:w-32">
				{isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
			</Button>
		</div>
	);
}
