'use client'
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { isBase64Image } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useStepper } from "@/components/ui/stepper";
import StepperFormActions from "../../app/(auth)/onboarding/_components.tsx/StepperFormAction";
import { userProfileValidation } from "@/lib/validations/user";
import { PlusCircle } from "lucide-react";
import { UpdateUser } from "@/lib/actions/user.action";

interface UserProps {
	user: {
		id: string;
		objectId: string;
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: number;
		image?: string;
	};
}
const ProfileForm = ({ user }: UserProps) => {
	const { nextStep } = useStepper();
	const [files, setFiles] = useState<File[]>([]);
	const { startUpload } = useUploadThing("imageUploader");
	const router = useRouter();
	const pathname = usePathname();

	const form = useForm({
		resolver: zodResolver(userProfileValidation),
		defaultValues: {
			profilePicture: user?.image || undefined,
			email: user?.email || "",
			firstName: user?.firstName || "",
			lastName: user?.lastName || "",
			phoneNumber: user?.phoneNumber || undefined,
		},
	});
	const onSubmit = async (values: z.infer<typeof userProfileValidation>) => {
		nextStep();
		const blob = values?.profilePicture;

		const hasImageChanged = isBase64Image(blob || "");

		if (hasImageChanged) {
			const imgRes = await startUpload(files);
			if (imgRes && imgRes[0].url) {
				values.profilePicture = imgRes[0].url;
			}
		}
		await UpdateUser({
			userId : user.id,
			firstName: values.firstName,
			lastName: values.lastName,
			image: values.profilePicture || '',
			phoneNumber: values.phoneNumber || '',
			path : pathname
		});
	};

	const handleImage = (
		e: ChangeEvent<HTMLInputElement>,
		fieldChange: (value: string) => void
	) => {
		e.preventDefault();
		const fileReader = new FileReader();

		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];
			setFiles(Array.from(e.target.files));
			if (!file.type.includes("image")) return;
			fileReader.onload = async (e) => {
				const imageDataUrl = e.target?.result?.toString() || "";
				fieldChange(imageDataUrl);
			};
			fileReader.readAsDataURL(file);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit((e: any) => onSubmit(e))}
				className="flex flex-col justify-start gap-5">
				<FormField
					control={form.control}
					name="profilePicture"
					render={({ field }) => (
						<FormItem className="flex flex-col items-center  gap-4">
							<FormLabel className="account-form_image-label relative group">
								<Image
									src={field.value ? field.value : "/assets/profile.svg"}
									alt="avatar"
									width={86}
									height={86}
									priority={field.value != ""}
									className={`${
										field?.value ? "rounded-full !w-full !h-full" : "!w-12 !h-12"
									} object-cover `}
								/>
								<div className="absolute w-full h-full rounded-full hidden group-hover:block group-hover:bg-gray-400 group-hover:bg-opacity-[60%] ">
									<PlusCircle className="absolute stroke-gray-900 stroke-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
								</div>
							</FormLabel>
							<FormControl>
								<Input
									className="account-form_image-input hidden"
									type="file"
									placeholder="Upload your profile image"
									accept="image/*"
									onChange={(e) => handleImage(e, field.onChange)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start gap-1">
							<FormLabel className="text-base font-semibold">FirstName</FormLabel>
							<FormControl>
								<Input
									className="account-form_input"
									type="text"
									placeholder="Joe"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start gap-1">
							<FormLabel className="text-base font-semibold">LastName</FormLabel>
							<FormControl>
								<Input
									className="account-form_input"
									type="text"
									placeholder="Doe"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start gap-1">
							<FormLabel className="text-base font-semibold">Email</FormLabel>
							<FormControl>
								<Input
									className="account-form_input"
									type="text"
									placeholder="name@example.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start gap-1">
							<FormLabel className="text-base font-semibold">PhoneNumber</FormLabel>
							<FormControl>
								<Input
									className="account-form_input"
									type="text"
									placeholder="example: +1 687-75-45-06 (optional)"
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

export default ProfileForm;
