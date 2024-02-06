import * as z from "zod";

export const userProfileValidation = z.object({
	profilePicture: z.string().url().optional(),
	email: z.string().email().min(1),
	firstName: z.string().min(3).max(30),
	lastName: z.string().min(3).max(30),
	phoneNumber: z.string().min(3).max(30),
});
export const userAddressValidation = z.object({
	address: z.string().min(3).max(1000),
	city: z.string().min(3).max(30),
	state: z.string().min(3).max(30),
	zipCode: z.number().min(4).max(10),
	countryOrRegion: z.string().min(4).max(10),
});
