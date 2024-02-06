import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStepper } from "@/components/ui/stepper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import StepperFormActions from "./StepperFormAction";
import { userAddressValidation } from "@/lib/validations/user";
import { Textarea } from "@/components/ui/textarea";

const AddressFrom = ({ user }: any) => {
	const { nextStep } = useStepper();

	const form = useForm<z.infer<typeof userAddressValidation>>({
		resolver: zodResolver(userAddressValidation),
		defaultValues: {
			address: user?.address || "",
			city: user?.city || "",
			state: user?.state || "",
			zipCode: user?.zipCode || "",
			countryOrRegion: user?.countryOrRegion || "",
		},
	});

	function onSubmit(data: z.infer<typeof userAddressValidation>) {
		nextStep();
		alert("next 2 sub");
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((e: any) => onSubmit(e))}
				className="flex flex-col justify-start gap-5">
				<FormField
					control={form.control}
					name="countryOrRegion"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start gap-1">
							<FormLabel className="text-base font-semibold">
								Country / Region
							</FormLabel>
							<FormControl>
								<Input
									className="account-form_input"
									type="text"
									placeholder="Country or Region"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="state"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start gap-1">
							<FormLabel className="text-base font-semibold">State</FormLabel>
							<FormControl>
								<Input
									className="account-form_input"
									type="text"
									placeholder="State"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex flex-row gap-2">
					<FormField
						control={form.control}
						name="city"
						render={({ field }) => (
							<FormItem className="flex flex-col items-start gap-1 !w-full">
								<FormLabel className="text-base font-semibold">City</FormLabel>
								<FormControl>
									<Input
										className="account-form_input !w-full"
										type="text"
										placeholder="City"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="zipCode"
						render={({ field }) => (
							<FormItem className="flex flex-col items-start gap-1">
								<FormLabel className="text-base font-semibold">ZipCode</FormLabel>
								<FormControl>
									<Input
										className="account-form_input"
										type="number"
										placeholder=""
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start gap-1">
							<FormLabel className="text-base font-semibold">Address</FormLabel>
							<FormControl>
								<Textarea
									className="account-form_input"
									placeholder="Type your name"
									rows={3}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<StepperFormActions />
			</form>
		</Form>
	);
};

export default AddressFrom;
