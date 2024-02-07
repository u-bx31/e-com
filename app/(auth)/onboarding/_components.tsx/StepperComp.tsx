"use client";
import {
	Stepper,
	StepperFooter,
	StepperItem,
	useStepper,
} from "@/components/ui/stepper";
import {
	ClipboardList,
	Loader2,
	User,
	UserCheck2,
} from "lucide-react";
import ProfileForm from "@/components/forms/ProfileForm";
import AddressFrom from "@/components/forms/AddressForm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function StepperDemo({ user }: any) {
	
	const lUser = JSON.parse(user.toString())
	const steps = [
		{
			id: 0,
			label: "Profile",
			icon: <User className="stroke-white" />,
			form: <ProfileForm user={lUser} />,
		},
		{
			id: 1,
			label: "Address",
			icon: <ClipboardList className="stroke-white" />,
			form: <AddressFrom user={lUser} />,
			optional: true,
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
	const { activeStep, steps } = useStepper();
	const { push } = useRouter();
	useEffect(() => {
		if (activeStep == steps.length) {
			setTimeout(() => {
				push("/");
			}, 4000);
		}
	}, [activeStep]);

	if (activeStep !== steps.length) {
		return null;
	}

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div className="flex items-center justify-center bg-green-700 p-7 rounded-full shadow-md">
				<UserCheck2 className="w-12 h-12 stroke-white" />
			</div>
			<h2 className=" mt-3 text-lg font-bold text-gray-950">
				Your account created successfully
			</h2>
			<div className="flex flex-col items-center justify-center gap-2">
				<Loader2 className="stroke-gray-600 animate-spin" />
				<p className="text-sm font-semibold text-gray-600">wait few second </p>
			</div>
		</div>
	);
}
