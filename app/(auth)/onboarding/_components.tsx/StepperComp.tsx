"use client";
import {
	Stepper,
	StepperFooter,
	StepperItem,
	useStepper,
} from "@/components/ui/stepper";
import { ClipboardList, User } from "lucide-react";
import ProfileForm from "@/components/forms/ProfileForm";
import AddressFrom from "@/components/forms/AddressForm";
import { Button } from "@/components/ui/button";

export default function StepperDemo({ user }: any) {
	const steps = [
		{
			id: 0,
			label: "Profile",
			icon: <User className="stroke-white" />,
			form: <ProfileForm user={user} />,
		},
		{
			id: 1,
			label: "Address",
			icon: <ClipboardList className="stroke-white" />,
			form: <AddressFrom />,
      optional: true
		},
	];
	return (
		<div className="flex w-full flex-col gap-4">
			<Stepper isClickable={false} initialStep={0} steps={steps}>
				{steps.map((step, index) => {
					return <StepperItem key={step.id}>{step.form}</StepperItem>;
				})}
				<StepperFooter>
					<MyStepperFooter />
				</StepperFooter>
			</Stepper>
		</div>
	);
}

function MyStepperFooter() {
	const { activeStep, resetSteps, steps } = useStepper();

	if (activeStep !== steps.length) {
		return null;
	}

	return (
		<div className="flex items-center justify-end gap-2">
			<Button onClick={resetSteps}>Reset Stepper with Form</Button>
		</div>
	);
}
